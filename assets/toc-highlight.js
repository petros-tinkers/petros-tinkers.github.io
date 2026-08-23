(function () {
  var toc = document.querySelector("details.toc");
  if (toc) {
    var mq = window.matchMedia("(max-width: 800px)");
    function syncTocOpen() {
      if (mq.matches) {
        toc.removeAttribute("open");
      } else {
        toc.setAttribute("open", "");
      }
    }
    syncTocOpen();
    mq.addEventListener("change", syncTocOpen);
  }

  var article = document.querySelector(".article");
  var tocLinks = document.querySelectorAll(".toc a[href^='#']");
  if (!article || !tocLinks.length) return;

  var linkById = {};
  var headings = [];

  tocLinks.forEach(function (link) {
    var id = link.getAttribute("href").slice(1);
    if (!id) return;
    var heading = document.getElementById(id);
    if (!heading) return;
    linkById[id] = link;
    headings.push(heading);
  });

  if (!headings.length) return;

  function setActive(id) {
    tocLinks.forEach(function (link) {
      link.classList.toggle("is-active", link === linkById[id]);
    });
  }

  var observer = new IntersectionObserver(
    function (entries) {
      var visible = entries
        .filter(function (entry) {
          return entry.isIntersecting;
        })
        .sort(function (a, b) {
          return a.boundingClientRect.top - b.boundingClientRect.top;
        });

      if (visible.length) {
        setActive(visible[0].target.id);
      }
    },
    {
      rootMargin: "0px 0px -60% 0px",
      threshold: 0,
    }
  );

  headings.forEach(function (heading) {
    observer.observe(heading);
  });
})();
