$(".fa-bars-staggered").click(function () {
  

  $(".fa-bars-staggered").hide(1000)
  $(".fa-x").show(1000)
  $("nav").addClass("boyut")
    $(".menuu").addClass("kicilt")

  })
  
  $(".fa-x").click(function () {
    
  
    $(".fa-x").hide(1000)
    $(".fa-bars-staggered").show(1000)
    $("nav").removeClass("boyut")
    $(".menuu").removeClass("kicilt")

  
  })

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  $(".all").children().eq(0).click(function () {
    $(".modal1").css("display","flex")
    $(".modal2").css("display","none")
    
  })
  $(".all").children().eq(1).click(function () {
    $(".modal1").css("display","none")
    $(".modal2").css("display","flex")

  })
  document.addEventListener('contextmenu', event => event.preventDefault());
