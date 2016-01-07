// my javascript

function scroll (destination) {
    $('html, body').animate({
        scrollTop: $("#" + destination).offset().top
    }, 1000);
};