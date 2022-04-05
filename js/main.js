$(document).ready(function () {
  /* Variables for Mobile Scroll (probably want to think about not using globals) */
  let parallaxIntro = $("#parallaxIntro");
  let parallaxIntroBottom =
    parallaxIntro.position().top + parallaxIntro.outerHeight(true);

  var scrollTop = $(window).scrollTop();
  if (window.innerWidth < 992) {
    if (scrollTop < parallaxIntroBottom) {
      $(".hamburgerButton").fadeOut();
    } else {
      $(".hamburgerButton").fadeIn();
    }
  } else {
    $(".hamburgerButton").fadeOut();
  }

  $(window).on("hashchange", function (e) {
    window.history.pushState("", document.title, window.location.pathname);
  });

  $(window).on("resize", function () {
    parallaxIntro = $("#parallaxIntro");
    parallaxIntroBottom =
      parallaxIntro.position().top + parallaxIntro.outerHeight(true);

    var scrollTop = $(window).scrollTop();
    if (window.innerWidth < 992) {
      if (scrollTop < parallaxIntroBottom) {
        $(".hamburgerButton").fadeOut();
      } else {
        $(".hamburgerButton").fadeIn();
      }
    } else {
      $(".hamburgerButton").fadeOut();
    }
  });

  console.log($(window).innerWidth);

  /* Probably want to make this more efficient */
  $(window).on("scroll", () => {
    var scrollTop = $(window).scrollTop();
    if (window.innerWidth < 992) {
      if (scrollTop < parallaxIntroBottom) {
        $(".hamburgerButton").fadeOut();
      } else {
        $(".hamburgerButton").fadeIn();
      }
    } else {
      $(".hamburgerButton").fadeOut();
    }
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
      $("html,body").animate(
        {
          scrollTop: $(href).offset().top,
        },
        100
      );
    });
});
