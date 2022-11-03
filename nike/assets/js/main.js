$(function(){

  /**
   * 접근성 & UX 개선 (키보드 사용할때만 포커스 나오게)
   *
   * @version 1.0.0
   * @since 2022-01-16
   * @author 본인이름 (beomsoo)
   */

  last = 0
  $(window).scroll(function(){
    curr = $(this).scrollTop();

    if (curr > last) {
      $('header').addClass('active')
    } else {
      $('header').removeClass('active') 
    }

    last = curr;
  })
  // 헤더 스크롤

  $('.gnb .nav-item').mouseover(function(){
    $(this).children('.sub-menu').stop().slideDown(150).addClass('active')
  })

  $('.gnb .nav-item').mouseleave(function(){
    $('.sub-menu').stop().slideUp(150).removeClass('active')
  });
  // nav 슬라이드

  const motionElement = document.querySelectorAll(`[data-motion]`)
  motionElement.forEach(element => {

    gsap.fromTo(element,{
      yPercent:100,
      opacity:0,
    },{
      scrollTrigger:{
        trigger:element,
        start:'top 100%',
        end:'bottom top',
        // [onEnter, onLeave, onEnterBack[멀리], onLeaveBack[가까이 ] ]
        toggleActions:"play pause resume reset"
      },
      yPercent:0,
      opacity:1,
    })

  })

  gsap.to('.sc-main .bg-area img',{
    scrollTrigger:{
      trigger:'.sc-main .img-box',
      start:'top 50%',
      end:'bottom top',
      scrub:1,
    },
    yPercent:-20
  });
  
  // 메인 이미지 컨트롤

  wideTl = gsap.timeline({
    scrollTrigger:{
      trigger:'.wide-area',
      start:'top top',
      end:'300%',
      scrub:1,
      pin:true,
    },
  });

  wideTl.addLabel('.m1')
  .to('.wide-area .wide-wrap',{
    width:'100%',
  },'m1')
  .to('.wide-area .wide-wrap',{
    'border-radius':0,
  },'m1+=0.2')
  .to('.wide-area .wide-wrap .logo-img',{
    top:'50%'
  },'+=0.2');
  
  sampleTl = gsap.timeline({
    scrollTrigger:{
      trigger:'.sc-product',
      start:'top 30%',
      end:'bottom top',
      scrub:1,
    },
  });

  sampleTl.addLabel('m1')
  .to('.sc-product .txt01',{
    xPercent:-100
  },'m1')
  .to('.sc-product .txt02',{
    xPercent:100
  },'m1')

  gsap.fromTo('.video-wrap',{
    'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
  },{
    scrollTrigger:{
      trigger:".video-wrap",
      start:"top 50%",
      end:"bottom top",
      scrub:1,
    },
    'clip-path': 'polygon(10% 0, 90% 0%, 90% 100%, 10% 100%)'
  })

  gsap.to('.sc-slide',{
    scrollTrigger:{
      trigger:'.sc-slide',
      start:'top top',
      end:'+=300%',
      scrub:1,
      pin:true,
    },
    xPercent:-300
  })

// introduction

const intro = gsap.timeline({
  scrollTrigger:{
    trigger:'.sc-introduction',
    pin:true,
    scrub:0.5,
    start:'top top',
    end:'+=3000',
  },
})

.addLabel('motion1')
intro.from('.sc-introduction .img-box01',{scale:2, xPercent:-200},'motion1')
.from('.sc-introduction .img-box02',{scale:2, xPercent: 200,},'motion1')
.from('.sc-introduction .img-box03',{scale:2, yPercent: 150,},'motion1')
.from('.sc-introduction p',{yPercent: 150},'motion1')

});