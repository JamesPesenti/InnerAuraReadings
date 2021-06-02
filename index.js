// Color Transition

$(window).scroll(function() {

    var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');
 
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $panel.each(function () {
      var $this = $(this);
      
     
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
        
        $body.addClass('color-' + $(this).data('color'));
      }
    });    
    
  }).scroll();




// Testimonails


(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();


  // About Me Slider //

// var swiper = new Swiper('.owl-carousel1', {
//     spaceBetween: 30,
//     effect: 'fade',
//     loop: true,
//     mousewheel: {
//       invert: false,
//     },
//     autoHeight: true,
//     pagination: {
//       el: '.owlCarousel',
//       clickable: true,
//     }
//   });
