(function () {
  const cfg = window.TOU_AUTH;
  if (!cfg) return;

  function siteBase() {
    const marker = "/tou-new-technologies-challenge";
    const path = location.pathname;
    const idx = path.indexOf(marker);
    if (idx !== -1) return path.slice(0, idx + marker.length);
    return "";
  }

  function loginUrl() {
    return siteBase() + "/login.html";
  }

  function homeUrl() {
    return siteBase() + "/";
  }

  async function sha256Hex(text) {
    const data = new TextEncoder().encode(text);
    const digest = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  function isAuthed() {
    try {
      return sessionStorage.getItem(cfg.sessionKey) === cfg.passwordHash;
    } catch {
      return false;
    }
  }

  async function tryLogin(password) {
    const hash = await sha256Hex(password);
    if (hash !== cfg.passwordHash) return false;
    sessionStorage.setItem(cfg.sessionKey, cfg.passwordHash);
    return true;
  }

  function logout() {
    sessionStorage.removeItem(cfg.sessionKey);
    location.href = loginUrl();
  }

  function requireAuth() {
    if (isAuthed()) {
      document.documentElement.classList.add("tou-authed");
      return true;
    }
    const next = encodeURIComponent(location.pathname + location.search + location.hash);
    location.replace(loginUrl() + "?next=" + next);
    return false;
  }

  window.TouAuth = {
    siteBase,
    loginUrl,
    homeUrl,
    isAuthed,
    tryLogin,
    logout,
    requireAuth,
    sha256Hex,
  };
})();
