$(document).ready(function() {
    var part = location.search.substr(1) || location.hash.substr(1);
    changePart(part);
    var parts = ['culture', 'member', 'join']
    $('.prods').on('click', '.prod', function () {
        var index = $(this).index();
        changePart(parts[index]);
        var top = $('#prods-content')[0].offsetTop;
        $('html,body').animate({
            scrollTop: top
        })
    })
    var isPhone = window.innerWidth > 960 ? 1 : 2;
    $('.job-items').on('click', '.job-item', function() {
        var index = $(this).index();
        $('.job-items .active').removeClass('active');
        $(this).addClass('active');
        $('.job-items-detail .active').removeClass('active');
        $('.job-items-detail .job-item-d').eq(index).addClass('active');
        var top = $('.prods-content')[0].offsetTop;
        $('html,body').animate({
            scrollTop: top
        })
        
        
    })
    $('.member-part').on('click', '.member-item', function () {
        if($(this)[0].className.indexOf("activeImg") === -1) {
            var i = isPhone > 1 ? $('.activeImg').index() % 2 !== 0 : $('.activeImg').index();
            if(i) {
                $('.activeImg').stop().animate({
                    left: 0
                },500)
            }else {
                $('.activeImg').stop().animate({
                    right: 0
                },500)
            }
            $('.member-item').removeClass('activeImg');
            var left = $(this).data('boss') ? -50 * isPhone + '%' : -25 * isPhone + '%';
            var flag = isPhone > 1 ? $(this).index() % 2 !== 0 : $(this).index() !== 0;
            if(flag) { 
                $(this).stop().animate({
                    left: left,
                }, 500) 
            }else {
                $(this).stop().animate({
                    right: left,
                }, 500);
            } 
            $(this).addClass('activeImg');
        }else {
            var index = isPhone > 1 ? $(this).index() % 2 !== 0 : $(this).index();
            if(index) {
                $('.activeImg').stop().animate({
                    left: 0
                },500,function(){
                    $('.member-item').removeClass('activeImg');
                })
            }else {
                $('.activeImg').stop().animate({
                    right: 0
                },500,function() {
                    $('.member-item').removeClass('activeImg');
                })
            }
           
        }
        
    })

    $('#culture-arrows').on('click',function() {
        var top = $('.content')[0].offsetTop;
        $('html,body').animate({
            scrollTop: top
        }, 500)
    })

    $('.item-arrows').on('click',function() {
        var index = $(this).parents('.culture-item').eq(0).index();
        var top = $('.culture-item').eq(index + 1)[0].offsetTop - 30;
        console.log(top)
        $('html,body').animate({
            scrollTop: top
        }, 500)
    })
    
    $('.item-arrows-t').on('click',function() {
        $('html,body').animate({
            scrollTop: 0
        }, 500)
    })
})

function changePart (part) {
    $('.delta-part').hide();
    $('.prods .active').removeClass('active');
    if(part === 'member') {
        $('.member-part').show();
        $('.prods .prod').eq(1).addClass('active');
    }else if(part === 'join') {
        $('.join-part').show();
        $('.prods .prod').eq(2).addClass('active');
    }else {
        $('.culture-part').show();
        $('.prods .prod').eq(0).addClass('active');
    }
}