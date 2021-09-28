$(document).ready(function(){
    $('.boxbox').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: true,
    });
  });

//and a thing to make the contact form fuck off

var button = document.getElementById('contact'); // Assumes element with id='button'

button.onclick = function() {
    var div = document.getElementById('contact-form');
    if (div.style.display !== 'block') {
        div.style.display = 'block';
    }
    else {
        div.style.display = 'none';
    }
};