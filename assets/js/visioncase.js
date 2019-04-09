$(document).ready(function(){
    var flag = window.innerWidth > 960;
    if(!flag) {
        $('.expanded').find('.case-content').show().animate({height: 600},500)
    }
    $('.content').on('click','.unexpanded', function(e) {
        var flag = window.innerWidth > 960;
        if(flag) {
            return
        }
        $(this).find('.case-content').show().animate({
            height: 600
        },500,function(){
            $(this).parents('.col').eq(0).removeClass('unexpanded').addClass('expanded')
        })
    })
    $('.content').on('click','.expanded', function() {
        var flag = window.innerWidth > 960;
        if(flag) {
            return
        }
        $(this).find('.case-content').animate({
            height: 0
        },500,function(){
            $(this).parents('.col').eq(0).removeClass('expanded').addClass('unexpanded')
        })
    })
})