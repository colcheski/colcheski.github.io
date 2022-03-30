$(document).ready(function () {
  const backgroundImageSize = 100;

  const parallaxElement = $(".aboutTest");
  const parallaxElementWidth = $(".aboutTest").width();
  const leftBound = parallaxElement[0].getBoundingClientRect().left;
  const topBound = parallaxElement[0].getBoundingClientRect().top;
  const parallaxElementPosition = parallaxElement.position();
  let priorScrollTop = 0;

  parallaxElement.css(
    "background",
    'linear-gradient(135deg, hsl(196, 76%, 31%, 0.35), hsl(175, 52%, 31%, 0.55)), url("images/Me.jpg") no-repeat -' +
      leftBound +
      $(".aboutTest").width() / 2 -
      backgroundImageSize / 2 +
      "px  / cover;"
  );

  var width = $(window).width();

  $(window).on("resize", function () {
    console.log();
    if ($(this).width() != width) {
      width = $(this).width();
      parallaxElement.css(
        "background",
        'linear-gradient(135deg, hsl(196, 76%, 31%, 0.35), hsl(175, 52%, 31%, 0.55)), url("images/Me.jpg") no-repeat -' +
          leftBound +
          parallaxElementWidth / 2 -
          backgroundImageSize / 2 +
          "px  / cover;"
      );
    }
  });

  $(document).scroll(function () {
    //console.log($(window).innerHeight());
    let scrollTop = $(window).scrollTop();
    //var scrollToTop = document.scrollingElement.scrollTop;
    //let windowHeight = $(document).height() - $(window).height();
    //let percentageOfScroll = (scrollTop * 100) / windowHeight;
    //console.log(scrollTop);
    //console.log(windowHeight);

    var xValue = leftBound + parallaxElementWidth / 4;
    var yValue = topBound + scrollTop / -2;
    //console.log("topBound is: " + topBound);
    console.log("scrollTop is: " + scrollTop);

    /* Overwriting yValue for now to a speed that is correct on my monitor */
    /* Halve the scroll speed of the background */
    //yValue = scrollTop / -2;
    yValue = scrollTop * -0.5;
    bottomOfElement =
      parallaxElement.position().top + parallaxElement.outerHeight(true);
    //console.log("y value is: " + yValue);
    console.log("Top of Element At: " + parallaxElement.position().top);
    console.log("Bottom of Element At: " + bottomOfElement);
    var range = parallaxElement.outerHeight(true); //The height is the range of from 0-{height} that we want the percentage of
    var increaseAmount = (-0.5 * range) / 100; //((percent * (max - min) / 100) + min
    if (priorScrollTop <= scrollTop) {
      console.log("Increase By: " + increaseAmount);
      yValue += increaseAmount;
    } else if (priorScrollTop > scrollTop) {
      console.log("Decrease By: " + increaseAmount);
      yValue -= increaseAmount;
    }
    console.log("What is the original: " + scrollTop / -2);
    //yValue = scroll * -0.5;
    xValue = 0;
    $(".aboutTest").css(
      "background",
      'url("images/Me.jpg") no-repeat scroll ' +
        -xValue +
        "px " +
        -yValue +
        //"-100% " +
        "px / cover"
    );
    priorScrollTop = scrollTop;
  });
});
