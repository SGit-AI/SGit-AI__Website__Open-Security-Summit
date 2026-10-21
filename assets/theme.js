// Light or dark: the reader's choice if they made one, else the system's. Runs in <head>,
// before the first paint, so the page never flashes the wrong theme.
(function () {
  var key = "oss.theme", root = document.documentElement, saved = null;
  try { saved = localStorage.getItem(key); } catch (e) {}
  var dark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (dark) root.setAttribute("data-theme", "dark");
  document.addEventListener("DOMContentLoaded", function () {
    var b = document.querySelector(".theme");
    if (!b) return;
    b.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      if (next === "dark") root.setAttribute("data-theme", "dark"); else root.removeAttribute("data-theme");
      try { localStorage.setItem(key, next); } catch (e) {}
    });
  });
})();
