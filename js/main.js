$(document).ready(function () {
  $(window).on("hashchange", function (e) {
    window.history.pushState("", document.title, window.location.pathname);
  });

  $("#myModal").on("hidden.bs.modal", function () {
    $("#navi-toggle").prop("checked", false);
  });

  $("#myModal").on("shown.bs.modal", function () {
    $("#navi-toggle").prop("checked", true);
  });

  $(".mobileNavigation")
    .off()
    .on("click", function () {
      const href = $(this).attr("href");
      console.log(href);
      $("html,body").animate(
        {
          scrollTop: $(href).offset().top,
        },
        100
      );
    });
});
