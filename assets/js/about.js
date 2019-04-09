$(document).ready(function() {
    var part = location.search.substr(1) || location.hash.substr(1);
    changePart(part);
    var parts = ['contrail', 'partners', 'news']
    $('.prods').on('click', '.prod', function () {
        var index = $(this).index();
        changePart(parts[index]);
        var top = $('#prods-content')[0].offsetTop;
        $('html,body').animate({
            scrollTop: top
        })
    })
    $('#culture-arrows').on('click',function() {
        var top = $('#prods-content')[0].offsetTop;
        $('html,body').animate({
            scrollTop: top
        })
    })
    $('#contrail-arrows').on('click',function() {
        $('html,body').animate({
            scrollTop: 0
        })
    })
})

function changePart (part) {
    $('.delta-part').hide();
    $('.prods .active').removeClass('active');
    if(part === 'partners') {
        $('.partners-part').show();
        $('.prods .prod').eq(1).addClass('active');
    }else if(part === 'news') {
        $('.news-part').show();
        $('.prods .prod').eq(2).addClass('active');
    }else {
        $('.contrail-part').show();
        $('.prods .prod').eq(0).addClass('active');
    }
}