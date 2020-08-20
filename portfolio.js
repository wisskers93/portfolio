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


function changeImg(imgs) {
  var imgCaption = document.getElementById('imgCaption');
  var image = document.getElementById('largeImg');
  var link = document.getElementById('imgLink');

  link.href = imgs.getAttribute('link');
  image.src = imgs.src;
  imgCaption.innerHTML = imgs.alt;
}