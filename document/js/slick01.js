$(function () {


    $('.main_slider').on('init reinit afterChange', function (e, s, c) {
        console.log(e, s, c)
        $('.num').text((c ? c + 1 : 1) + "/" + s.slideCount);
        let cur = $('.slick-current');
        cur.addClass('oo').siblings().removeClass('oo')

    });

    $('.main_slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });



})
