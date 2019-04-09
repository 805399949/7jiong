$(document).ready(function() {
    $('#prob-btn').on('click',function() {
        var flag = checkEmpty('inputName') && checkEmpty('inputOrgan') && checkEmpty('inputJob') && checkEmpty('inputWay') && checkPhone() && checkEmail();
        if(!flag) {
            return false
        }

        var data = {
            name: checkEmpty('inputName'),
            email: checkEmail('inputEmail'),
            phone: checkPhone('inputPhone'),
            organization: checkEmpty('inputOrgan'),
            job_position: checkEmpty('inputJob'),
            product: $('.prod-radio input:checked').val(),
            ref: checkEmpty('inputWay'),
        }
        var _this = this;
        $(this).button('loading');
        $.ajax({
            url: 'https://www.deltaentropy.com/applicant',
            method: 'POST',
            data: data,
            success: function(res) {
                $('#prob_name').text($('#inputName').val().replace(/(^\s*)|(\s*$)/g, ''))
                $('.success-cover').show();
                $(_this).button('reset')
                $('.afterprob').hide()
            },
            error: function(err) {
                $(_this).button('reset')
                if(err.status === '429') {
                    showMsg('你已超过单日申请次数限制，请明日再试')
                }else {
                    showMsg(err.responseJSON.msg)              
                }
            }
        })
    })

    function checkEmpty (id) {
        var val = $('#'+id).val().replace(/(^\s*)|(\s*$)/g, '');
        if(val === '') {
            $('.'+ id).find('.g-status').hide();
            $('.'+ id).find('.g-remove').show();
            $('#'+ id + 'status').text('该项为必填项');
            $('#'+ id + 'status').removeClass('sr-only');
            return false
        }else {
            $('.'+ id).find('.g-status').hide();
            $('.'+ id).find('.g-ok').show();
            $('#'+ id + 'status').addClass('sr-only');
            return val
        }
    }

    function checkPhone () {
        var val = checkEmpty('inputPhone');
        if(val && /^1[3-8]\d{9}$/.test(val)) {
            $('.inputPhone').find('.g-status').hide();
            $('.inputPhone').find('.g-ok').show();
            return val
        }else {
            $('.inputPhone').find('.g-status').hide();
            $('.inputPhone').find('.g-remove').show();
            $('#inputPhonestatus').text('请填写正确的手机号码');
            $('#inputPhonestatus').removeClass('sr-only');
            return false
        }
    }

    function checkEmail () {
        var val = checkEmpty('inputEmail');
        if(val && /^([a-zA-z0-9])([a-zA-Z0-9_\.\-])*\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(val)) {
            $('.inputEmail').find('.g-status').hide();
            $('.inputEmail').find('.g-ok').show();
            return val
        }else {
            $('.inputEmail').find('.g-status').hide();
            $('.inputEmail').find('.g-remove').show();
            $('#inputEmailstatus').text('请填写正确的邮箱');
            $('#inputEmailstatus').removeClass('sr-only');
            return false
        }
    }

    $('.form-control').on('blur',function(){
        var flag = true;
        if($(this).val().replace(/(^\s*)|(\s*$)/g, '') !== '') {
            if($(this)[0].id === 'inputEmail') {
               flag = checkEmail();
            }
            if($(this)[0].id === 'inputPhone') {
                flag = checkPhone();
            }
            if(flag) {
                $(this).parents('.form-group').find('.er-msg').text('').addClass('sr-only')
                $(this).parents('.form-group').find('.g-status').hide();
                $(this).parents('.form-group').find('.g-ok').show();
            }
        }
    })

    function showMsg (msg) {
        $('.res-msg').show();
        $('.msg-content').text(msg)
        $('.msg-content').stop(true).animate({
            top: 0
        },500,function() {
            setTimeout(function(){
                $('.msg-content').stop(true).animate({
                    top: -100
                },500,function(){
                    $('.res-msg').hide();
                })
            },3000)
        })
    }
})

