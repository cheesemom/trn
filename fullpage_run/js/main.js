$(function () {

    $('#main').fullpage({
        anchors: ['page01', 'page02', 'page03'],
        css3: false,
        // navigator: true,
        afterLoad: function (ank, idx) {
            $('.gnb li').removeClass('on');
            $('.gnb li').eq(idx - 1).addClass('on')
            $('.section').removeClass('on');
            $('.section').eq(idx - 1).addClass('on')
            idx == 3 || idx == 1 ? $('.gnb a').addClass('w') : $('.gnb a').removeClass('w')
        }
    });

    $('.coverBtn').on('.click', function () {
        $(this).toggleClass('on')
    })

    var coverContent = $('.gnb ul').clone();
    console.log(coverContent);


})