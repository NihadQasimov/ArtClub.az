$(".fa-bars-staggered").click(function () {


    $("nav").addClass("boyut")
    $(".fa-bars-staggered").hide(1000)
    $(".fa-x").show(1000)
  
  
  
  })
  
  $(".fa-x").click(function () {
  
  
    $("nav").removeClass("boyut")
    $(".fa-x").hide(1000)
    $(".fa-bars-staggered").show(1000)
  
  
  })




  var swiper = new Swiper(".mySwiper", {});


  document.addEventListener('contextmenu', event => event.preventDefault());


  $(".fa-circle-info").click(function () {
    $(".sagbox").addClass("aktiv")
    $(this).hide(500)
  })

  $(".sagbox i").click(function () {
    $(".sagbox").removeClass("aktiv")
    $(".fa-circle-info").show(600)
  })