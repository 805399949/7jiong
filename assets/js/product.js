// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
// import './registration.js'
// import '../css/registration.less'
// import '../docs/deltaVision.pdf'
// import '../docs/deltaMotion.pdf'
// import '../docs/deltaDetection.pdf'

$(document).ready(function() {
    var part = location.search.substr(1);
    changePart(part);
    var parts = ['vision', 'motion', 'detection']
    $('.prods').on('click', '.prod', function () {
        var index = $(this).index();
        changePart(parts[index]);
    })

    var tryFlag = location.hash.substr(1);
    if(tryFlag === 'try') {
        freeProb();
        location.hash = '';
    }

    $('.prod-d-btn').on('click',function() {
        var $box = $(this).parents('.delta-part').eq(0);
        var index = $(this).parents('.prod-detail').eq(0).index();
        var top = $box.find('.prod-detail').eq(index + 1)[0].offsetTop - 30;
        $('html,body').animate({
            scrollTop: top
        }, 500)
    })
    $('.prod-d-btn-t').on('click',function() {
        $('html,body').animate({
            scrollTop: 0
        }, 500)
    })
    $('#free-prob-btn').on('click', function() {
        freeProb()
    })
})

function freeProb () {
    $('.form-control').val('');
    $('.g-status').hide();
    $('.er-msg').addClass('sr-only');
    $('.success-cover').hide();
    $('.afterprob').show()
    $('#prob-btn').button('reset');
    var index = $('.prods').find('.active').index();
    $('.prod-radio input').eq(index).attr({checked: true})
    $('#prob-modal').modal('toggle')
}

function changePart (part) {
    $('.delta-part').hide();
    $('.prods .active').removeClass('active');
    if(part === 'motion') {
        $('.motion-part').show();
        $('.prods .prod').eq(1).addClass('active');
    }else if(part === 'detection') {
        $('.detection-part').show();
        $('.prods .prod').eq(2).addClass('active');
    }else {
        $('.vision-part').show();
        $('.prods .prod').eq(0).addClass('active');
    }
}