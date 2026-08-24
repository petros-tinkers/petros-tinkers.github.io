(function () {
  const filter = document.querySelector(".tag-filter");
  if (!filter) return;

  const buttons = filter.querySelectorAll(".tag-filter-btn");
  const projects = document.querySelectorAll(".project");
  if (!buttons.length || !projects.length) return;

  function tagFromPath(pathname) {
    const match = pathname.match(/^\/tags\/([^/]+)\/?$/);
    if (!match) return "all";
    const btn = filter.querySelector(
      '.tag-filter-btn[href="/tags/' + match[1] + '/"]'
    );
    return btn ? btn.dataset.tag : "all";
  }

  function applyFilter(tag) {
    buttons.forEach(function (btn) {
      const active = btn.dataset.tag === tag;
      btn.classList.toggle("is-active", active);
      if (active) {
        btn.setAttribute("aria-current", "page");
      } else {
        btn.removeAttribute("aria-current");
      }
    });

    projects.forEach(function (project) {
      const tags = (project.dataset.tags || "").split(",");
      project.hidden = tag !== "all" && tags.indexOf(tag) === -1;
    });
  }

  filter.addEventListener("click", function (event) {
    const btn = event.target.closest(".tag-filter-btn");
    if (!btn || !filter.contains(btn)) return;
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();
    const tag = btn.dataset.tag;
    applyFilter(tag);
    history.pushState({ tag: tag }, "", btn.getAttribute("href"));
  });

  window.addEventListener("popstate", function (event) {
    const tag =
      event.state && event.state.tag ? event.state.tag : tagFromPath(location.pathname);
    applyFilter(tag);
  });

  const initial =
    (filter.querySelector(".tag-filter-btn.is-active") || {}).dataset.tag ||
    "all";
  history.replaceState({ tag: initial }, "", location.href);
})();
