(() => {
  const panel = document.querySelector("[data-room-invite]");
  if (!panel) return;
  const params = new URLSearchParams(window.location.search);
  const room = params.get("room") ?? "";
  const code = params.get("code") ?? "";
  if (params.getAll("room").length !== 1 || params.getAll("code").length !== 1 ||
    !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(room) || !/^[A-Z0-9]{6,16}$/.test(code)) return;
  panel.querySelector("[data-invite-invalid]").hidden = true;
  panel.querySelector("[data-invite-valid]").hidden = false;
  panel.querySelector("[data-invite-code]").textContent = code;
  panel.querySelector("[data-invite-open]").href = `habitduel://invite?room=${encodeURIComponent(room)}&code=${encodeURIComponent(code)}`;
  panel.querySelector("[data-invite-copy]").addEventListener("click", async () => {
    const copied = panel.querySelector("[data-invite-copied]");
    const error = panel.querySelector("[data-invite-copy-error]");
    copied.hidden = true;
    error.hidden = true;
    try { await navigator.clipboard.writeText(code); copied.hidden = false; }
    catch { error.hidden = false; }
  });
})();
