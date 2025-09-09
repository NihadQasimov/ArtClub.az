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


const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 15000000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

});


$(".menu1").click(function () {
  $(".modal3").css("display", "flex")
  $(".menubox").hide()
  $(".modal4").css("display", "none")

})

$(".menu2").click(function () {
  $(".modal5").css("display", "flex")
  $(".menubox").hide()
  $(".modal3").css("display", "none")

})
$(".category ul li:first").click(function () {
  $(".modal3").css("display", "none")
  $(".modal5").css("display", "flex")
  $(".menubox").hide()


})
$(".category2 ul li:first").click(function () {
  $(".modal5").css("display", "none")
  $(".modal3").css("display", "flex")
  $(".menubox").hide()


})


let sound = new Audio("cafeland.mp3.mp3")
window.addEventListener("scroll", function () {
  sound.play()
  sound.volume = 0.5
})


let array = [
  {
    sekil: "erzaq1.jpg",
    ad: "Tuna qəlyanaltısı",
    qiymet: "9,00 ₼ ",
    miqdar: "390gr",
    cat: "Qəlyanaltılar",
    haqqinda:"Konservləşdirilmiş tuna balığı, paşot yumurta, suda bişmiş kartof, tartar sousu, qarışıq göyərti, sumax, sarımsaqlı dressinq",
    id: 1
  },
  {
    sekil: "erzaq2.jpg",
    ad: "Qızardılmış gürzə",
    qiymet: "7,90 ₼",
    miqdar: "150qr",
    cat: "Qəlyanaltılar"
    
    ,
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",
    id: 2
  },
  {
    sekil: "erzaq3.jpg",
    ad: "Toyuq naqqetsləri",
    qiymet: "9,00 ₼ ",
    miqdar: "215qr",
    cat: "Qəlyanaltılar"
    ,
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    id: 3
  },
  {
    sekil: "erzaq4.jpg",
    ad: "Toyuqlu şarlot",
    qiymet: "11,00 ₼ ",
    miqdar: "320gr",
    cat: "Qəlyanaltılar"
    ,
    haqqinda:"Suxariyə batırılmış çəkilmiş toyuq qauda pendiri ilə, ev sayağı kartof, pendirli sous",
    id: 4
  },
  {
    sekil: "erzaq5.jpg",
    ad: "Toyuq və göbələkli profitrollar",
    qiymet: "9,00 ₼ ",
    miqdar: "300qr",
    cat: "Qəlyanaltılar"
    ,
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    id: 5
  },
  {
    sekil: "erzaq6.jpg",
    ad: "Asiya sayağı boul",
    qiymet: "11,00 ₼ ",
    miqdar: "260gr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Qəlyanaltılar"
  },
  {
    sekil: "erzaq7.jpg",
    ad: "Toyuqlu 'Vulkan'",
    qiymet: "8,00 ₼ ",
    miqdar: "200qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Qəlyanaltılar"
  },
  {
    sekil: "erzaq8.jpg",
    ad: "Şərqsayağı badımcan",
    qiymet: "7,90 ₼",
    miqdar: "110qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Qəlyanaltılar"
  },
  {
    sekil: "erzaq9.jpg",
    ad: "Humus fokaçça ilə",
    qiymet: "9,00 ₼ ",
    miqdar: "390gr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Qəlyanaltılar"
  },
  {
    sekil: "erzaq10.jpg",
    ad: "Tuna salatı",
    qiymet: "12,00 ₼ ",
    miqdar: "350gr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Salatlar"
  },
  {
    sekil: "erzaq11.jpg",
    ad: "Nisuaz",
    qiymet: "13,00 ₼ ",
    miqdar: "400qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Salatlar"
  },
  {
    sekil: "erzaq12.jpg",
    ad: "Asiya sayağı ət salatı",
    qiymet: "16,50 ₼ ",
    miqdar: "280qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Salatlar"
  },
  {
    sekil: "erzaq13.jpg",
    ad: "Can ətindən talyata",
    qiymet: "17,00 ₼ ",
    miqdar: "350gr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Salatlar"
  },

  {
    sekil: "erzaq14.jpg",
    ad: "Kartoflu salat toyuq ilə",
    qiymet: "11,00 ₼ ",
    miqdar: "370gr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Salatlar"
  },
  {
    sekil: "erzaq15.jpg",
    ad: "Toyuq salatı bulqur və çuğundur ilə",
    qiymet: "11,50 ₼ ",
    miqdar: "400gr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Salatlar"
  },
  {
    sekil: "sup1.jpg",
    ad: "Pomidor şorbası",
    qiymet: "7,20 ₼ ",
    miqdar: "330qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Şorbalar"
  },
  {
    sekil: "sup2.jpg",
    ad: "Göbələk şorbası",
    qiymet: "5,50 ₼ ",
    miqdar: "330qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Şorbalar"
  },
  {
    sekil: "sup3.jpg",
    ad: "Mərci şorbası",
    qiymet: "4,40₼ ",
    miqdar: "330qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Şorbalar"
  },
  {
    sekil: "sip4.jpg",
    ad: "Toyuq bulyonu",
    qiymet: "4,00 ₼ ",
    miqdar: "330qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Şorbalar"
  },
  {
    sekil: "sup5.jpg",
    ad: "Ət küftələri ilə əriştə (mövsümi)",
    qiymet: "6,60 ₼",
    miqdar: "380qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Şorbalar"
  },
  {
    sekil: "sup6.jpg",
    ad: "Doğramac (mövsümi)",
    qiymet: "5,50 ₼ ",
    miqdar: "330qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Şorbalar"
  },
  {
    sekil: "pasta1.jpg",
    ad: "Spaqetti Bolonyeze",
    qiymet: "12,00 ₼ ₼ ",
    miqdar: "340qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Pastalar"
  },
  {
    sekil: "pasta2.jpg",
    ad: "Fettuçine vetçina və göbələk ilə",
    qiymet: "14,00 ₼ ₼ ",
    miqdar: "400",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Pastalar"
  },
  {
    sekil: "pasta3.jpg",
    ad: "Toyuq və pesto sousu ilə talyatelle",
    qiymet: "12,00 ₼ ",
    miqdar: "350qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Pastalar"
  },
  {
    sekil: "pasta4.jpg",
    ad: "Toyuq ilə spaqetti",
    qiymet: "12,00 ₼ ",
    miqdar: "330qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Pastalar"
  },
  {
    sekil: "pasta5.jpg",
    ad: "Qaymaqlı penne qarğıdalı ilə",
    qiymet: "12,00 ₼ ",
    miqdar: "320qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Pastalar"
  },
  {
    sekil: "pasta6.jpg",
    ad: "Pendirli sousda kartoflu vareniklər",
    qiymet: "8,50 ₼ ",
    miqdar: "280qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Pastalar"
  },
  {
    sekil: "esas1.jpg",
    ad: "Pikant sousla qızıl balıq",
    qiymet: "28,50 ₼ ",
    miqdar: "320qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Əsas_Yeməklər"
  },
  {
    sekil: "esas2.jpg",
    ad: "Fish and Chips",
    qiymet: "19,00 ₼ ",
    miqdar: "220qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Əsas_Yeməklər"
  },
  {
    sekil: "esas3.jpg",
    ad: "Küncüt və yerfındığlı qızıl balıq  ",
    qiymet: "27,50 ₼ ",
    miqdar: "400qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Əsas_Yeməklər"
  },
  {
    sekil: "esas4.jpg",
    ad: "İstiotlu sousla steyk",
    qiymet: "32,80 ₼ ",
    miqdar: "450qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Əsas_Yeməklər"
  },
  {
    sekil: "esas5.jpg",
    ad: "Ət minyonları təzə kartof ilə",
    qiymet: "18,50 ₼ ",
    miqdar: "220qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Əsas_Yeməklər"
  },
  {
    sekil: "esas6.jpg",
    ad: "İçlikli ət günbəzi dranik ilə",
    qiymet: "22,00 ₼ ",
    miqdar: "420qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Əsas_Yeməklər"
  },
  {
    sekil: "burger1.jpg",
    ad: "Çizburqer pikant sousla",
    qiymet: "15,50 ₼ ",
    miqdar: "450qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Sendviç_və_burgerlər"
  },
  {
    sekil: "burger2.jpg",
    ad: "Burqer pendirli sousla",
    qiymet: "15,00 ₼ ",
    miqdar: "450qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Sendviç_və_Burgerlər"
  },
  {
    sekil: "burger3.jpg",
    ad: "Klab sendviçi",
    qiymet: "13,80 ₼ ",
    miqdar: "400qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Sendviç_və_burgerlər"
  },
  {
    sekil: "burger4.jpg",
    ad: "Sezar Roll",
    qiymet: "15,50 ₼ ",
    miqdar: "400qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Sendviç_və_burgerlər"
  },
  {
    sekil: "pizza1.jpg",
    ad: "Diabola",
    qiymet: "15,50 ₼ ",
    miqdar: "470qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Pizzalar"
  },
  {
    sekil: "pizza2.jpg",
    ad: "Salsiccia",
    qiymet: "13,80 ₼ ",
    miqdar: "470qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Pizzalar"
  },
  {
    sekil: "pizza3.jpg",
    ad: "Four Seasons",
    qiymet: "17,50 ₼ ",
    miqdar: "470qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Pizzalar"
  },
  {
    sekil: "pizza4.jpg",
    ad: "Chicken Ranch",
    qiymet: "12,30 ₼ ",
    miqdar: "470qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Pizzalar"
  },
  {
    sekil: "pizza5.jpg",
    ad: "Funghi con Pollo",
    qiymet: "15,00 ₼ ",
    miqdar: "470qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Pizzalar"
  },
  {
    sekil: "pizza6.jpg",
    ad: "Pollo al Pomodoro",
    qiymet: "15,50 ₼ ",
    miqdar: "470qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Pizzalar"
  },
]


let array2 = [
  {
    sekil: "kokteyl1.jpg",
    ad: "Kiwi Cooler",
    qiymet: "7.70 ₼ ",
    miqdar: "330qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Kokteyllər"


  },
  {
    sekil: "kokteyl2.jpg",
    ad: "Pleasure",
    qiymet: "7,70 ₼ ",
    miqdar: "330qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Kokteyllər"


  },
  {
    sekil: "kokteyl3.jpg",
    ad: "Fresh G",
    qiymet: "7,70 ₼ ",
    miqdar: "330qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Kokteyllər"


  },
  {
    sekil: "kokteyl4.jpg",
    ad: "Cucamba",
    qiymet: "7,70 ₼ ",
    miqdar: "330qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Kokteyllər"


  },
  {
    sekil: "kokteyl5.jpg",
    ad: "Grapefreshener",
    qiymet: "7,  ₼ ",
    miqdar: "330qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Kokteyllər"


  },
  {
    sekil: "kokteyl6.jpg",
    ad: "Non-Alcoholic Mojito",
    qiymet: "7,70 ₼ ",
    miqdar: "330qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Kokteyllər"


  },
  {
    sekil: "spirt1.jpg",
    ad: "Sweet Jackie",
    qiymet: "15,00 ₼ ",
    miqdar: "100qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Kokteyllər"


  },
  {
    sekil: "spirt2.jpg",
    ad: "Kill Me Softly",
    qiymet: "13,00 ₼",
    miqdar: "150qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Kokteyllər"


  },
  {
    sekil: "spirt3.jpg",
    ad: "Cardinal's Kiss",
    qiymet: "14,00 ₼ ",
    miqdar: "170qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Kokteyllər"


  },
  {
    sekil: "spirt4.jpg",
    ad: "Magic Safari",
    qiymet: "15,00 ₼ ",
    miqdar: "250qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Kokteyllər"


  },
  {
    sekil: "spirt5.jpg",
    ad: "Peach on the Beach",
    qiymet: "13,00 ₼ ",
    miqdar: "200qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Kokteyllər"


  },
  {
    sekil: "spirt6.jpg",
    ad: "Cucu JOY",
    qiymet: "14,00 ₼",
    miqdar: "100qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Kokteyllər"


  },
  {
    sekil: "six1.jpg",
    ad: "Kök",
    qiymet: "4,00 ₼",
    miqdar: "280qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Təzəsıxılmış_İçkilər"


  },
  {
    sekil: "six2.jpg",
    ad: "Alma",
    qiymet: "5,00 ₼",
    miqdar: "280qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Təzəsıxılmış_İçkilər"


  },
  {
    sekil: "six3.jpg",
    ad: "Ananas",
    qiymet: "7,00 ₼",
    miqdar: "280qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Təzəsıxılmış_İçkilər"


  },
  {
    sekil: "six4.jpg",
    ad: "Ananas",
    qiymet: "9,90 ₼",
    miqdar: "280qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Təzəsıxılmış_İçkilər"


  },
  {
    sekil: "six5.jpg",
    ad: "Qreypfrut",
    qiymet: "14,00 ₼",
    miqdar: "280qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Təzəsıxılmış_İçkilər"


  },
  {
    sekil: "kofe1.jpg",
    ad: "Salted Caramel Latte",
    qiymet: "7,70 ₼",
    miqdar: "120qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Qəhvəli_İçkilər"


  },
  {
    sekil: "kofe2.jpg",
    ad: "Sour Berry Raf",
    qiymet: "7,20 ₼",
    miqdar: "120qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Qəhvəli_İçkilər"


  },
  {
    sekil: "kofe3.jpg",
    ad: "Citrus Raf",
    qiymet: "5,00 ₼",
    miqdar: "120qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Qəhvəli_İçkilər"


  },
  {
    sekil: "kofe4.jpg",
    ad: "Coffee Mocha",
    qiymet: "9,30 ₼",
    miqdar: "120qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Qəhvəli_İçkilər"


  },
  {
    sekil: "kofe5.jpg",
    ad: "Espresso Freddo",
    qiymet: "14,00 ₼",
    miqdar: "120qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Qəhvəli_İçkilər"


  },
  {
    sekil: "kofe6.jpg",
    ad: "Cappuccino Freddo",
    qiymet: "6,00 ₼",
    miqdar: "120qr",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Qəhvəli_İçkilər"


  },
  {
    sekil: "cay1.jpg",
    ad: "Çay dəsti",
    qiymet: "30,00 ₼",
    miqdar: "Somovar",
    haqqinda:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus mollitia cum amet autem, quibusdam obcaecati incidunt necessitatibus facilis, blanditiis voluptate ullam sint ipsum commodi aliquam fugiat a eligendi repellendus.",

    cat: "Çaylar_və_dəzgahlar"


  },
]
$(".maint").empty()

for (let i = 0; i < array.length; i++) {
  $(".main").append(`
       <div class="item"  cat=${array[i].cat} onclick="bir(${i})">
                    <div class="itemphoto">
                        <img src="${array[i].sekil}"
                            alt="">
                        <p>${array[i].miqdar}</p>
                    </div>
                    <h1>${array[i].ad}</h1>
                    <span>${array[i].qiymet}</span>
                    <div class="icons">

                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
    
    `)
  
$(".maintwo").empty()
for (let i = 0; i < array2.length; i++) {
  $(".maintwo").append(`
     <div class="item"  cat="${array2[i].cat}">
                    <div onclick="iki(${i})" class="itemphoto">
                        <img src="${array2[i].sekil}" alt="">
                        <p>${array2[i].miqdar}</p>
                    </div>
                    <h1>${array2[i].ad}</h1>
                    <span>${array2[i].qiymet}</span>
                    <div class="icons">

                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        </div>
                       <i class="fa-solid fa-heart"></i>

                </div>

    
    
    `)

}
$(".fa-heart").click(function () {
  $(this).toggleClass("ok")
})

$(document).ready(function () {
  $("body").on("click", ".category ul li", function () {
    a = $(this).attr("cat")

    $(".item").each(function () {
      if ($(this).attr("cat") == a || a == "Bütün Menyu" || a == "İçki_Menyusuna_Keçid") {

        $(this).show()
      } else {
        $(this).hide()
      }
    })
  })
})


$(document).ready(function () {
  $("body").on("click", ".category2 ul li", function () {
    b = $(this).attr("cat")

    $(".item").each(function () {
      if ($(this).attr("cat") == b || b == "Bütün Menyu" || b == "Yemek_Menyusuna_Keçid") {

        $(this).show()
      } else {
        $(this).hide()
      }
    })
  })
})

function bir(i) {

  $(".modal4").show()
  $(".modal4").html(`
    <div class="modalbox">
                 <div class="photo">
                     <img src="${array[i].sekil}" alt="">
 
                 </div>
                 <div class="inspect">
                     <i class="fa-solid fa-xmark"></i>
                     <h1>${array[i].ad}</h1>
                     
                     <p>${array[i].haqqinda}</p>
                <span>${array[i].qiymet}</span>
                <button onclick=elave(${i})><i class="fa-solid fa-basket-shopping"></i>Əlavə Et</button>
                
                
                 </div>
 
 
             </div>
   
   `)

}

function iki(i) {
  $(".modal6").show()
  $(".modal6").html(`
    <div class="modalbox">
                 <div class="photo">
                     <img src="${array2[i].sekil}" alt="">
 
                 </div>
                 <div class="inspect">
                     <i class="fa-solid fa-xmark"></i>
                     <h1>${array2[i].ad}</h1>
                     
                     <p>${array2[i].haqqinda}</p>
                <span>${array2[i].qiymet}</span>
                
                <button onclick=elave2(${i})><i class="fa-solid fa-basket-shopping"></i>Əlavə Et</button>
                
                 </div>
 
 
             </div>
   
   `)

}

$(document).ready(function () {

  $("body").on("click", ".inspect > i", function () {
    $(".modal4").hide()
    $(".modal6").hide()

  })

})

$("header > i").click(function () {
  $(".modal7").animate({ top: 0 }, 50)
  $(".modal7box").animate({ top: 25 + "%" }, 100)
})
$(".modal7box>i").click(function () {
  $(".modal7").animate({ top: 100 + "%" }, 50)

})

function elave(i) {

  $(".modal7box").append(`
     <div class="modalitem">
                    <img src="${array[i].sekil}" alt="">
                    <h4>${array[i].ad}</h4>
                    <p>${array[i].qiymet}</p>
                    <div class="butongroup">
                        <button><i class="fa-solid fa-minus"></i></button>

                        <span>1</span>
                        <button><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <i onclick=sil(this) class="fa-solid fa-xmark"></i>

                </div>
    
    
    `)
    
    let qiymet = parseFloat(array[i].qiymet.replace("₼", "").replace(",", "."));
    total+=qiymet
  $(".netice span").text(total)
  document.querySelector("header span").innerHTML = document.querySelectorAll(".modal7box .modalitem ").length

}
var total = 0
let say=0
function elave2(i) {
  $(".modal7box").append(`
    
     <div class="modalitem">
     
                    <img src="${array2[i].sekil}" alt="">
                    <h4>${array2[i].ad}</h4>
                    <p>${array2[i].qiymet}</p>

                    <div class="butongroup">
                        <button><i class="fa-solid fa-minus"></i></button>

                        <span>1</span>
                        <button><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <i onclick=sil(this) class="fa-solid fa-xmark"></i>

                </div>
                
    
    
    `)
    let qiymet = parseFloat(array2[i].qiymet.replace("₼", "").replace(",", "."));
    total+=qiymet
    
  $(".netice span").text(total.toFixed(2))
    

  document.querySelector("header span").innerHTML = document.querySelectorAll(".modal7box .modalitem ").length

}

function sil(x) {
  x.parentElement.remove()

  document.querySelector("header span").innerHTML = document.querySelectorAll(".modal7box .modalitem ").length
console.log( Number( x.parentElement.children[2].innerText.replace("₼", "").replace(",", ".")))
total-=Number( x.parentElement.children[2].innerText.replace("₼", "").replace(",", "."))
document.querySelector(".netice span").innerHTML=total.toFixed(2)
}

function love(i) {
  $(this).toggleClass("ok")
}
}
$("input").keyup(function () {
  document.querySelectorAll(".item").forEach(x => {
    if (x.innerHTML.toLowerCase().includes(document.querySelector("input").value.toLowerCase())) {
      x.style.display="block"
    } else {
      x.style.display="none"

    }
  });
})
document.addEventListener('contextmenu', event => event.preventDefault());
