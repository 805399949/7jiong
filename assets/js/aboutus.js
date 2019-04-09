$(document).ready(function() {
    setTimeout(function() {
        $('.aboutus-bg img').height($('.header').height() + $('.content').innerHeight() + $('.footer').innerHeight() );    
    }, 0)

    $('#toAboutP1').on('click',function() {
        var top = $('#aboutus-part1')[0].offsetTop - 30 > 0 ? $('#aboutus-part1')[0].offsetTop - 30 : $('#aboutus-part2')[0].offsetTop - 30;
        $('html,body').animate({
            scrollTop: top
        })
    })
    $('#toAboutP2').on('click',function() {
        var top = $('#aboutus-part2')[0].offsetTop - 30;
        $('html,body').animate({
            scrollTop: top
        })
    })
    $('#toAboutP3').on('click',function() {
        var top = $('#aboutus-part3')[0].offsetTop;
        var pdt = parseInt($('#aboutus-part3 .aboutus-left').css("paddingTop"));
        $('html,body').animate({
            scrollTop: top + pdt - 110
        })
    })
    $('#toAboutTop').on('click',function() {
        $('html,body').animate({
            scrollTop: 0
        })
    })
})