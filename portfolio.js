//sticky navbar

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop +5;

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