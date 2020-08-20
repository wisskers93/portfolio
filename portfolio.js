// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// skill scroll

          
$(function () {
    $('.autoplay').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// gallery selection

function changeImg1() {
  var imgCaption = document.getElementById('imgCaption');
  var image = document.getElementById('largeImg');
  image.src = "/Images/theptcenter.png";
  imgCaption.innerHTML = "<a href='https://www.physicaltherapycenter.org/' target='_blank'> Wordpress Website for The Physical Therapy Center </a>";
}

function changeImg2() {
  var image = document.getElementById('largeImg');
  image.src = "/Images/publicpolicy.png";
}

function changeImg3() {
  var image = document.getElementById('largeImg');
  image.src = "/Images/southerncharm.png";
}

function changeImg4() {
  var image = document.getElementById('largeImg');
  image.src = "/images/triangleface copy2.jpg";
}

function changeImg5() {
  var image = document.getElementById('largeImg');
  image.src = "/Images/BFBS Logo Splatters (Large).jpg";
}

function changeImg6() {
  var image = document.getElementById('largeImg');
  image.src = "/Images/CWG Web Designs.png";
}