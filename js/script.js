$(document).ready(function(){
    $('.main-menu').click(function(){
        $('.sub-menu-cover').fadeToggle();
    });
    $('.hamburger').click(function(){
        $('.mb-sub-menu-cover').fadeToggle();
    });
    $('.sub-img .won').click(function(){
        $('.box1').fadeToggle();
        $(this).toggleClass('active');
    });
    $('.sub-img-right .hat').click(function(){
        $('.box2').fadeToggle();
        $(this).toggleClass('active');
    });
    $('.sub-img-right .best').click(function(){
        $('.box3').fadeToggle();
        $(this).toggleClass('active');
    });
    $('.main-img .won').click(function(){
        $('.box4').fadeToggle();
        $(this).toggleClass('active');
    });

    //스와이퍼
    var swiper = new Swiper(".firstSwiper", {
        effect: "fade",
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay:{
            delay:2000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // scrollbar: {
        //     el: ".swiper-scrollbar",
        //     hide: true,
        // },
    });

    // 바 스와이퍼
    var ww = $(window).width();
    var swiper = undefined;
    layout();

    function layout(){
        if(ww >= 1550 && swiper == undefined){
            swiper = new Swiper(".secondSwiper", {
                slidesPerView: '3',
                autoplay:{
                    delay:1500,
                    disableOnInteraction: false
                },
                scrollbar: {
                    el: ".swiper-scrollbar",
                //   hide: true,
                
                },
            });
        }else if(ww < 1550 && swiper != undefined){
            console.log('des')
            swiper.destroy()
            swiper=undefined
        }

        //footer 위치 바꾸기
        if(ww < 550){
            $('.footer .txt-box').appendTo('.footer .sub-box');
        }


    }
    //리사이즈 시 자동으로 바뀌도록 호출
    $(window).resize(function(){
        ww = $(window).width();
        layout();
    });

    //aos 구동
    AOS.init();

    //sec-1 스크롤바 움직이기 (스크롤 할 때 왼쪽 이미지 고정, 오른쪽 스크롤 활성화)
    $(window).scroll(function(){
        const h = $(window).scrollTop();
        console.log(h);

        // 스크롤값이 1600px 일 때 왼쪽 이미지 고정, 오른쪽 스크롤 활성화
        const sec1 = $('.sec-1').offset().top;
        const sec2 = $('.sec-2').offset().top;
        const wh = $(window).height();

        const sct = $(window).scrollTop();
        if(sct >= sec1 && sct < sec2){
            $('.sec-1 .main-img').addClass('active');
        }else{
            $('.sec-1 .main-img').removeClass('active');
        }
    });

    //top 클릭하면 위로 올라가기
    const topbutton = $('.banner-top-btn');
    topbutton.click(function(){
        $('html,body').animate({
            scrollTop:0
        });
    });

    //sec-4 탭 열기
    $('.sec-4 .btn li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        // 탭메뉴 연결해주기
        const result = $(this).attr('data-alt');

        $('.sec-4 .main-box div').removeClass('active');
        $(`#${result}`).addClass('active');
    });

    
});