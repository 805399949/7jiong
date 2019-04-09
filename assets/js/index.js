// import '../less/index.scss'
// import '../css/swiper-3.4.2.min.css'
// import './swiper-3.4.2.jquery.min.js'

$(document).ready(function() {
    // var bannerSwiper = new Swiper ('#banner-swiper', {
    //   direction: 'vertical',
    //   loop: true,
    //   autoplay: 5000,
    //   speed: 1000,
    //   autoplayDisableOnInteraction: false,
    //   // 如果需要分页器
    //   pagination: '#banner-pagination',  
    //   paginationClickable: true,  
    // })  

    var  innerSwiper = new Swiper ('#inner-swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        autoplay: 5000,
        speed: 600,
        autoplayDisableOnInteraction: false,
        nextButton: '#inner-next',
        prevButton: '#inner-prev',
    })

    var surveyPageNames = ['数据处理', '金融建模', '工具应用']; 
    var surveySwiper = new Swiper ('#survey-swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        pagination: '#survey-pagination', 
        paginationBulletRender: function (swiper, index, className) {
            return '<span class="survey-page'+index+' survey-bullets '+ className +'">'+ surveyPageNames[index] +'</span>';
        },
        paginationClickable: true,
    })
})
