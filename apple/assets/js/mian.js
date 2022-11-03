$(function(){
  
  var topMenu = $('.menu-trigger');

  topMenu.each(function(index){
    var $this = $(this);
    
    $this.on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('active-' + (index+1));
    })
  });

    naviFade =  gsap.from('.navi li',{
                  opacity:0,
                  yPercent:100,
                  stagger:0.01,
                  paused:true,
                })

    $('.header_m .menu-trigger').click(function () {
      if ($('.navi').css('display') == 'none') { 
        $('.navi').addClass('navi_active')
        $('.user').css('display','none')
        $('body').css('overflow-y','hidden')
        naviFade.restart()
      } else {
        $('.navi').removeClass('navi_active')
        $('.user').css('display','block')
        $('body').css('overflow-y','auto')
        naviFade.reverse()
      }
    });

    const utilFade = gsap.timeline({
      y: 100,
      stagger : 0.3
    })

    .addLabel('motion1')
    utilFade.from('.m_banner_util_inner .overview',{yPercent:-100},'motion1')
    .from('.m_banner_util_inner .util_bot',{yPercent:-200,},'motion1')

    $('.m_banner_util_btn').click(function () {
      if ($('.m_banner_util_inner').css('visibility') == 'hidden') {
        $('.m_banner_util_inner').addClass('banner_util_active');
        $('.m_banner_util_btn1').css({"transform":"rotate(-40deg) scaleY(1.1)", "transform-origin":"100% 0;"});
        $('.m_banner_util_btn2').css({"transform":"rotate(40deg) scaleY(1.1)", "transform-origin":"0% 0%;"});
        $('.m_banner_util_btn').css('transform','translateY(-8px)');
        utilFade.restart()
      } else {
        $('.m_banner_util_inner').removeClass('banner_util_active')
        $('.m_banner_util_btn1').css({"transform":"rotate(40deg) scaleY(1.1)", "transform-origin":"100% 0;"});
        $('.m_banner_util_btn2').css({"transform":"rotate(-40deg) scaleY(1.1)", "transform-origin":"0% 0%;"});
        $('.m_banner_util_btn').css('transform','translateY(0px)');
        utilFade.reverse()
      }
    });


    $('.pdr_menu_btn').click(function () {
        if ($('.pdr_menu_inner').css('display') == 'none') {
          $('.pdr_menu_inner').addClass('active');
          $('.group_pdr').css('background-color','#1d1d1f')
          $('.pdr_menu_btn img').attr('src', './assets/images/drop-up.png');
          pdr_menuFade.restart()
        } else {
          $('.pdr_menu_inner').removeClass('active');
          $('.group_pdr').css('background-color','rgba(29,29,31,0.72)')
          $('.pdr_menu_btn img').attr('src', './assets/images/drop-down.png');
          pdr_menuFade.reverse()
        }
      });

$(document).ready(function() {
  $(".spacegray_btn").click(function() {
    if ($("item_area .item_space").css("zIndex","1")) {
      $('.item_area .ar_item').css({"zIndex":"0", "opacity":"0"});
      $('.color_btn').css("border-color","transparent");
      $('.color_btn span').css("display","none");
      $('.item_area .item_space').css({"zIndex":"1", "opacity":"1"});
      $('.spacegray_btn').css("border-color","rgb(0, 113, 227)");
      $('.color_spacegray span').css("display","block");
    } else {
      $('.item_area .ar_item').css({"zIndex":"0", "opacity":"0"});
    }
  });
});

$(document).ready(function() {
  $(".silver_btn").click(function() {
    if ($("item_area .item_sliver").css("zIndex","1")) {
      $('.item_area .ar_item').css({"zIndex":"0", "opacity":"0"});
      $('.color_btn').css("border-color","transparent");
      $('.color_btn span').css("display","none");
      $('.item_area .item_sliver').css({"zIndex":"1", "opacity":"1"});
      $('.silver_btn').css("border-color","rgb(0, 113, 227)");
      $('.color_silver span').css("display","block");
    } else {
      $('.item_area .ar_item').css({"zIndex":"0", "opacity":"0"});
    }
  });
});

$(document).ready(function() {
  $(".gold_btn").click(function() {
    if ($("item_area .item_gold").css("zIndex","1")) {
      $('.item_area .ar_item').css({"zIndex":"0", "opacity":"0"});
      $('.color_btn').css("border-color","transparent");
      $('.color_btn span').css("display","none");
      $('.item_area .item_gold').css({"zIndex":"1", "opacity":"1"});
      $('.gold_btn').css("border-color","rgb(0, 113, 227)");
      $('.color_gold span').css("display","block");
    } else {
      $('.item_area .ar_item').css({"zIndex":"0", "opacity":"0"});
    }
  });
});

      $('.foot_nav_btn').click(function(){
        if ($(this).siblings('.foot_nav').css('visibility') == 'hidden') {
            $(this).siblings('.foot_nav').addClass('foot_nav_active')
        } else {
            $(this).siblings('.foot_nav').removeClass('foot_nav_active')
        }
      })   
      
 
})