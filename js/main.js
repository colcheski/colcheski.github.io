$(document).ready(function () {
  /* Remove # from url when clicking on navigation */
  $(window).on("hashchange", function (e) {
    window.history.pushState("", document.title, window.location.pathname);
  });

  /* Variables for Mobile Scroll (probably want to think about not using globals) */
  let intro = $("#intro");
  let introBottom = intro.position().top + intro.outerHeight(true);

  /* Hamburger button display method */
  const hamburgerButtonDisplay = (elementBottom) => {
    let scrollTop = $(window).scrollTop();
    if (window.innerWidth < 992) {
      if (scrollTop < introBottom - 10) {
        $(".hamburgerButton").fadeOut();
      } else {
        $(".hamburgerButton").fadeIn();
      }
    } else {
      $(".hamburgerButton").fadeOut();
    }
  };

  /* Check to see if hamburger button should be shown on page resize */
  $(window).on("resize", () => {
    intro = $("#intro");
    introBottom = intro.position().top + intro.outerHeight(true);

    hamburgerButtonDisplay(introBottom);
  });

  /* Check to see if hamburger button should be shown on page scroll */
  $(window).on("scroll", () => {
    hamburgerButtonDisplay(introBottom);
  });

  /* Modal and modal navigation controls */
  $("#myModal").on("hidden.bs.modal", () => {
    $("#navi-toggle").prop("checked", false);
  });

  $("#myModal").on("shown.bs.modal", () => {
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

  /* Fade Up Intersection Observer */
  const createFadeupObserver = () => {
    const observerOptions = {
      root: null,
      threshold: 0,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = Array.from(document.getElementsByClassName("fadeUp"));

    for (let section of sections) {
      observer.observe(section);
    }
  };

  createFadeupObserver();
  hamburgerButtonDisplay(introBottom);
});
