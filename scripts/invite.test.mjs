import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { runInNewContext } from "node:vm";

const source = await readFile(new URL("../src/assets/invite.js", import.meta.url), "utf8");
const id = "12345678-abcd-1234-abcd-123456789012";
function open(search, clipboard = async () => {}) {
  const nodes = new Map();
  const panel = { querySelector(selector) {
    if (!nodes.has(selector)) nodes.set(selector, { hidden: selector !== "[data-invite-invalid]", addEventListener(_, callback) { this.click = callback; } });
    return nodes.get(selector);
  } };
  runInNewContext(source, { document: { querySelector: () => panel }, window: { location: { search } }, URLSearchParams, encodeURIComponent, navigator: { clipboard: { writeText: clipboard } } });
  return panel.querySelector.bind(panel);
}
test("valid invitation opens the exact room and copies only its code", async () => {
  let copied;
  const node = open(`?room=${id}&code=ABC12345`, async (value) => { copied = value; });
  assert.equal(node("[data-invite-valid]").hidden, false);
  assert.equal(node("[data-invite-invalid]").hidden, true);
  assert.equal(node("[data-invite-open]").href, `habitduel://invite?room=${id}&code=ABC12345`);
  await node("[data-invite-copy]").click();
  assert.equal(copied, "ABC12345");
  assert.equal(node("[data-invite-copied]").hidden, false);
});
test("malformed and duplicated params never become app links", () => {
  for (const search of ["", `?room=${id}`, `?room=${id}&room=${id}&code=ABC12345`, `?room=${id}&code=<script>`, "?room=javascript:bad&code=ABC12345"]) {
    const node = open(search);
    assert.equal(node("[data-invite-valid]").hidden, true);
    assert.equal(node("[data-invite-open]").href, undefined);
  }
});
test("blocked clipboard offers manual selection", async () => {
  const node = open(`?room=${id}&code=ABC12345`, async () => { throw new Error("denied"); });
  await node("[data-invite-copy]").click();
  assert.equal(node("[data-invite-copy-error]").hidden, false);
});
