$(function () {
    let intro = $("#intro");

    let header = $("#header");



    $(window).on("scroll resize", function () {
        let introH = intro.innerHeight();

        let headerH = header.innerHeight();

        let scrollTop = $(this).scrollTop();

        if (scrollTop >= (introH - headerH)) {
            header.addClass("header--dark");
        } else {
            header.removeClass("header--dark");
        }
    });

});





