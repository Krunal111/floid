AOS.init({
	duration: 1200,
  disable: 'mobile'
});

// Header Fixed JS
jQuery(document).ready(function()
{
    jQuery(window).scroll(function() {    
        var scroll = jQuery(window).scrollTop();
    
        if (scroll >= 100) {
            jQuery("header").addClass("fixed-header");
        } else {
            jQuery("header").removeClass("fixed-header");
        }
    });
});
// Header Fixed JS

// Menu JS
$(document).ready(function(){
  $(".mobile__toggle").click(function(){
    $(this).toggleClass("show");
    $(".mobile__menu").toggleClass("show");
  });
});
// Menu JS

// Mobile View Submenu JS
jQuery(document).ready(function()
{
    $('.nav-item.has-child').click(function () {
        if ($(window).width() < 991) {
            $('.megamenu__wrappper').slideToggle();
        }
    });
});
// Mobile View Submenu JS

// Section Smooth Scroll JS
$("#bottomScroll").bind('click',function() {
  $('html, body').animate({
      scrollTop: $("#best-seller").offset().top - 100
  }, 2000);
});
// Section Smooth Scroll JS

// Best Slider JS Start
var bestSellerSlider = new Swiper(".best__sellers__slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.8,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3.5
      },
      1024: {
        slidesPerView: 4.3
      },
    },
  });
// Best Slider JS End

// Instagram Slider JS Start
var instagramSlider = new Swiper(".instagram__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4.5
    },
    1024: {
      slidesPerView: 5.4
    },
  },
});
// Instagram Slider JS End

// SVG file to SVG code convert JS Start
function img2svg() {
  jQuery('.in-svg').each(function (i, e) {
      var $img = jQuery(e);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');
      jQuery.get(imgURL, function (data) {
          // Get the SVG tag, ignore the rest
          var $svg = jQuery(data).find('svg');
          // Add replaced image's ID to the new SVG
          if (typeof imgID !== 'undefined') {
              $svg = $svg.attr('id', imgID);
          }
          // Add replaced image's classes to the new SVG
          if (typeof imgClass !== 'undefined') {
              $svg = $svg.attr('class', ' ' + imgClass + ' replaced-svg');
          }
          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr('xmlns:a');
          // Replace image with new SVG
          $img.replaceWith($svg);
      }, 'xml');
  });
}
img2svg();
// SVG file to SVG code convert JS End