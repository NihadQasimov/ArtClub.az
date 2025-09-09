var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

let sound= new Audio("nemeee.mp3")
  window.addEventListener("scroll",function () {
    if (this.window.scrollY>276 && this.window.scrollY<976) {
        
       sound.play()
    } else {
        sound.pause()
    }
  })

let say=0
  let eded=0
  let reqem=0
  setInterval( function () {
    
    if (eded>=10) {
        clearInterval()
    } else {
        eded++
    }
    $(".ok ").eq(0).children().eq(2).text(eded)

}  ,100)
setInterval( function () {
    
    if (say>=130) {
        clearInterval()
    } else {
        say++
    }
    $(".ok ").eq(1).children().eq(2).text(say)

}  ,70)
setInterval( function () {
    
    if (reqem>=1) {
        clearInterval()
    } else {
        reqem++
    }
    $(".ok ").eq(2).children().eq(2).text(reqem)

}  ,100)
  

$(".fa-bars-staggered").click(function () {
  

  $("nav").addClass("boyut")
  $(".fa-bars-staggered").hide(1000)
  $(".fa-x").show(1000)

  $("header").addClass("kicilt")
  $(".artma").addClass("kicilt")
  $(".map").addClass("kicilt")
  $(".reytinq").addClass("kicilt")
  $("footer").addClass("kicilt")
})

$(".fa-x").click(function () {
  

  $("nav").removeClass("boyut")
  $(".fa-x").hide(1000)
  $("header").removeClass("kicilt")
  $(".artma").removeClass("kicilt")
  $(".map").removeClass("kicilt")
  $(".reytinq").removeClass("kicilt")
  $(".fa-bars-staggered").show(1000)
  $("footer").removeClass("kicilt")

})
document.addEventListener('contextmenu', event => event.preventDefault());
