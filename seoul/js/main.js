        
$(function(){

    $('.sc_slide h3').click(function(e){
        e.preventDefault();
        $(this).parent('.slide_cont').addClass('on').siblings().removeClass('on')

        if($(this).parent().hasClass('slide02')){
            if($('.slide02 .play').css('display') != 'none'){
                slide01.autoplay.stop();
                slide02.autoplay.stop();
            }else{
                slide01.autoplay.stop();
                slide02.autoplay.start();
            }

        }else{
            if($('.slide01 .play').css('display') != 'none'){
                slide01.autoplay.stop();
                slide02.autoplay.stop();
            }else{
                slide01.autoplay.start();
                slide02.autoplay.stop();
            }
        
        }
    })

    var slide01 = new Swiper(".slide01 .swiper", {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        loop:true,
        pagination: {
            el: ".slide01 .fraction",
            type: "fraction",
        },
        navigation: {
            nextEl: ".slide01 .next",
            prevEl: ".slide01 .prev",
        },
    });


    $('.slide01 .play_btn .btn').click(function(e){
        e.preventDefault();

        if($(this).hasClass('play')){
            slide01.autoplay.start();
            $('.slide01 .pause').show();
            $('.slide01 .play').hide();


        }else{
            slide01.autoplay.stop();
            $('.slide01 .pause').hide();
            $('.slide01 .play').show();
        }
    })


    var slide02 = new Swiper(".slide02 .swiper", {
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        loop:true,
        pagination: {
            el: ".slide02 .fraction",
            type: "fraction",
        },
        navigation: {
            nextEl: ".slide02 .next",
            prevEl: ".slide02 .prev",
        },
    });
    slide02.autoplay.stop();


    $('.slide02 .play_btn .btn').click(function(e){
        e.preventDefault();
        // slide01.autoplay.stop();
        // $('.slide01 .pause').hide();
        // $('.slide01 .play').show();

        if($(this).hasClass('play')){
            slide02.autoplay.start();
            $('.slide02 .pause').show();
            $('.slide02 .play').hide();


        }else{
            slide02.autoplay.stop();
            $('.slide02 .pause').hide();
            $('.slide02 .play').show();
        }

    })


    var banner_slide = new Swiper(".banner_slide", {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop:true,
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
        el: ".banner_slide .fraction",
        type: "fraction",
        },
        navigation: {
        nextEl: ".banner_slide .next",
        prevEl: ".banner_slide .prev",
        },
    });


    $('.banner_slide .play_btn .btn').click(function(e){
        e.preventDefault();
        // alert('경고');
        
        if($(this).hasClass('play')){ //재생시킬때
            banner_slide.autoplay.start();
            $('.banner_slide .play_btn .pause').show();
            $('.banner_slide .play_btn .play').hide();


        }else{  //일시 정지 시킬때
            banner_slide.autoplay.stop();
            $('.banner_slide .play_btn .pause').hide();
            $('.banner_slide .play_btn .play').show();
        }

    })


    $('.dept1').click(function(e){

        e.preventDefault();

        if($(this).hasClass('on')){ //두번클릭시
            $('.dept1').removeClass('on')
            $('.sub').stop().slideUp();
        }else{
            $('.dept1').removeClass('on')
            $(this).addClass('on');
            $('.sub').stop().slideUp();
            $(this).siblings('.sub').stop().slideDown();
        }
    });

    $('.sc_link .link .sub li:last-child a').keydown(function(e){
        var v_keyCode = event.keyCode || event.which;
        if(v_keyCode == 9){
            if(!event.shiftKey){
                $('.sub').stop().slideUp()
            }
        }
    })
    $('.sc_link .link .sub li:first-child a').keydown(function(e){
        var v_keyCode = event.keyCode || event.which;
        if(v_keyCode == 9){
            if(event.shiftKey){
                $('.sub').stop().slideUp()
            }
        }
    })

 
})
