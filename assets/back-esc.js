function isTypingTarget(target) {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable ||
      target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.tagName === "SELECT")
  );
}

function followHotkeyLink(selector) {
  const link = document.querySelector(selector);
  if (!(link instanceof HTMLAnchorElement) || !link.href) {
    return false;
  }
  window.location.assign(link.href);
  return true;
}

document.addEventListener("keydown", (event) => {
  if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) {
    return;
  }
  if (isTypingTarget(event.target)) {
    return;
  }

  if (event.key === "Escape") {
    if (followHotkeyLink(".back-link")) {
      event.preventDefault();
    }
    return;
  }

  if (event.key === "a" || event.key === "A") {
    if (followHotkeyLink('[data-hotkey="a"]')) {
      event.preventDefault();
    }
  }
});
