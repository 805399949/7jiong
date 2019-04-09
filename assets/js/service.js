$(document).ready(function() {
    $('#service-arrows').on('click tap',function() {
        var top = $('#service-descs')[0].offsetTop - 30;
        $('html,body').animate({
            scrollTop: top
        },500)
    })

    $('.item-arrows').on('click tap',function() {
        var index = $(this).parents('.service-desc').eq(0).index();
        var top = $('.service-desc').eq(index + 1)[0] ? $('.service-desc').eq(index + 1)[0].offsetTop - 30
         : $('.service-swiper-box')[0].offsetTop - 30;
        $('html,body').animate({
            scrollTop: top
        }, 500)
    })
})