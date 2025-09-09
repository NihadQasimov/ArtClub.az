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
 
  document.addEventListener('contextmenu', event => event.preventDefault());
  
