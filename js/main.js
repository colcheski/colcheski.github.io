$(window).on("hashchange", function (e) {
  window.history.pushState("", document.title, window.location.pathname);
  // do something...
});
