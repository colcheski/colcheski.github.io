Need to come back to navbar background color. It's not quite right compared to the react version where we were able to use variant="dark" (might need bootstrap vue so may have to change the color myself)

.mainContent CSS class may not matter at all

need to move script loading to the bottom of the body as this is a best practice

add this directly under first body tag if we want the navbar back:

    <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#about">LOGO</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav"
                aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="basic-navbar-nav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#testimonials">Testimonials</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav> -->

This is the working version for one screen size parallax project

$(document).scroll(function () {
var scroll = $(window).scrollTop();
var xValue =
parallaxElement[0].getBoundingClientRect().left +
$(".aboutTest").width() / 4 -
backgroundImageSize / 4;

    var yValue = parallaxElement[0].getBoundingClientRect().top + scroll / -2;
    //console.log(secondValue);
    console.log(
      'linear-gradient(135deg, hsl(196, 76%, 31%, 0.35), hsl(175, 52%, 31%, 0.55)), url("images/Me.jpg") no-repeat -' +
        xValue +
        "px " +
        yValue +
        "px / cover;"
    );

    /* Overwriting yValue for now to a speed that is correct on my monitor */
    yValue = scroll / -2;
    $(".aboutTest").css(
      "background",
      'url("images/Me.jpg") no-repeat ' +
        -xValue +
        "px " +
        -yValue +
        "px / cover"
    );

});
});
