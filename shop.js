var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}



    const swiper = new Swiper('.swiper', {
        autoplay:{
            delay:3000,
            disableOnInteraction:false,
        },
loop: true,


pagination: {
el: '.swiper-pagination',
clickable: true,
},


navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},


});
  
