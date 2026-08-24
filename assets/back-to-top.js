(function () {
  var button = document.querySelector(".back-to-top");
  var progress = document.querySelector(".scroll-progress");
  var mq = window.matchMedia("(max-width: 800px)");
  var threshold = 400;

  function sync() {
    if (button) {
      button.hidden = !(mq.matches && window.scrollY > threshold);
    }

    if (progress) {
      var scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      var value = scrollable > 0 ? window.scrollY / scrollable : 0;
      progress.style.transform =
        "scaleX(" + Math.min(1, Math.max(0, value)) + ")";
    }
  }

  if (button) {
    button.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (button || progress) {
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync, { passive: true });
    mq.addEventListener("change", sync);
    sync();
  }
})();
