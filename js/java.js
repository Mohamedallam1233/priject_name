$(document).ready(
function(){
        /* start nicescroll */
        $("html").niceScroll(
            {
            cursorcolor : '#0088CC' 
            })
        /* end nicescroll */
            /* start header */
            var windowHeight = $(window).height() 
                $(".myheader").height(windowHeight) ;
                $(".overr").height((windowHeight+2)) ;
                $(".myheader .midlle-head2 .mousee").click(function (){
                  $("html , body").animate({scrollTop : $(".porto").offset().top},500)
                })
            $(window).resize(function(){
                var windowHeight = $(window).height()  , navHeight = $('nav').height()  , divHeight = windowHeight - navHeight  ;
                $(".myheader  ").height(windowHeight) ;
                $(".myheader .overr").height((windowHeight +2)) ;
                $(".midlle-head").height(divHeight) ;
            })
            /* end header */
            // start nav 
              $("nav .navbar-nav li a").click(function (){
                $(this).parent().addClass('active').siblings().removeClass("active");
              })
            // end nav
            $(" .bigFooter .fin li").hover(function(){
             $(this).find("span").css({"cursor":"pointer" , "color":"#FFF" , "left":"5px"})
            },function (){
              $(this).find("span").css({"cursor":"pointer" , "color":"#777", "left":"0" })
            })
            console.log($(".midlle-head2"))
            $(".midlle-head2").find("span").eq(0).css({"animation":"fadeInDownBig 2s "})
            $(".midlle-head2").find("span").eq(1).css({"animation":"zoomInDown 6s "})
            $(".midlle-head2").find("img").eq(0).css({"animation":"fadeInLeft 2s "})
            $(".midlle-head2").find("img").eq(1).css({"animation":"fadeInRight 2s "})
            $(".midlle-head2").find("span").eq(2).css({"animation":"fadeInLeft 3s "})
             // start our team 
             
             picnum = 0;
             arr = ["../images/team-1.jpg","../images/team-2.jpg","../images/team-3.jpg","../images/team-4.jpg","../images/team-5.jpg","../images/team-6.jpg","../images/team-7.jpg","../images/team-8.jpg"]
            $(".team  #rightArrow").click(function(){
              if (picnum < 6)
              picnum +=1
              {
                $(".team  #leftImage").attr("src",arr[picnum])
                $(".team  #rightImage").attr("src",arr[picnum+1])
              }
            })
            $(".team  #leftArrow").click(function(){
              console.log("allam")
              if (picnum >0)
              picnum -=1
              {
                $(".team  #leftImage").attr("src",arr[picnum])
                $(".team  #rightImage").attr("src",arr[picnum+1])
              }
            })
             // end our team
            $(window).scroll(function(){
              var x1 = $(".myheader").offset().top ,
             x2 = $(".porto").offset().top ,
             x3 = $(".aboutt").offset().top ,
             x4 = $(".team").offset().top ,
             x5 = $(".mycursor").offset().top ,
             x6 = $(".bigFooter").offset().top ,
            postop = $(document).scrollTop()
            console.log(postop)
             if (postop < x2 && postop >=x1 )
              {
                $(".porto").css({"animation":"fadeInUp 1s "})
                $(".porto .l-icon").css({"animation":"bounce 3s "})
                $(".porto .r-content h5").css({"animation":"bounce 3s "})
                $(".porto .r-content p").css({"animation":"rubberBand 3s "})
               console.log(x2)
              }
              else if (postop  < x3 +20 && postop  >=x2 +20 )
              {
                $(".progress-bar").eq(0).css({"width":"100%"})
                $(".progress-bar").eq(1).css({"width":"75%"})
                $(".progress-bar").eq(2).css({"width":"60%"})
                $(".progress-bar").eq(3).css({"width":"75%"})
                $(".team").css({"animation":"fadeInUp 2s " ,  "animation-delay": "0.5s" })
              }
              else if (postop < x4 && postop >=x3 )
              {
               console
                
              }
              else if (postop < x5 && postop >=x4 )
              {
                $(".mycursor").css({"animation":"fadeInUp 1s "})
              }
              else if (postop < x6 && postop >=x5  )
              {
                console.log(x5)
              }
              else if ( postop >= x6)
              {
                console.log(x6)
              }
            })








           
    })