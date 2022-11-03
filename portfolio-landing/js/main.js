
$(function(){

    var jbOffset = $( '.main' ).offset();
  
    $( window ).scroll( function() {
        if ( $( document ).scrollTop() > jbOffset.top ) {
            $('.git_link').addClass("on");
        }
        else if( $( document ).scrollTop() < jbOffset.top ){
            $('.git_link').removeClass("on");
        }
    });


    gsap.utils.toArray(".main .content").forEach(function(section) {
  
        const main = gsap.timeline({
          scrollTrigger: {
          trigger: section,
          start: "top 90%",
          end: "top top",
          scrub:true,
          }
        });
        
        main.set(section, {
            opacity: 0
        })
        .to(section, {
            opacity: 1
        })

    });

    ScrollTrigger.matchMedia({
        
        "(min-width: 767px)": function() {
            const leftMotion = gsap.timeline({})
            leftMotion.addLabel('label')
            .to('.loading_page strong',{xPercent:-35,delay:1,duration:0.1},'label')
            .to('.loading_page .txt01',{opacity:0,delay:1},'label')
            .to('.loading_page .txt02',{opacity:0,delay:2},'label')
            .to('.loading_page .txt03',{opacity:0,delay:3},'label')
            .to('.loading_page',{yPercent:-100,delay:3.5,ease: Power4.easeIn},'label')
            .fromTo('.intro h1',{
                xPercent:100,
                scale:0,
                opacity:0
            },{
                xPercent:0,
                scale:1,
                opacity:1,
            })
        },
        
        "(max-width: 767px)": function() {

            const leftMotion = gsap.timeline({})
            leftMotion.addLabel('label')
            .to('.loading_page strong',{delay:1,duration:0.1},'label')
            .to('.loading_page .txt01',{opacity:0,delay:1},'label')
            .to('.loading_page .txt02',{opacity:0,delay:2},'label')
            .to('.loading_page .txt03',{opacity:0,delay:3},'label')
            .to('.loading_page',{yPercent:-100,delay:3.5,ease: Power4.easeIn},'label')
            .fromTo('.intro h1',{
                xPercent:100,
                scale:0,
                opacity:0
            },{
                xPercent:0,
                scale:1,
                opacity:1,
            })
        }, 
        
        "all": function() {
        
        }
      
    });

})
