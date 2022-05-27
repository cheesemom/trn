$(function () {

    $('.main_slider').on('init reinit afterChange', function () {
        var here = $('.slick-current');
        console.log(here)
        here.addClass('on').siblings().removeClass('on')
    })

    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });






})
