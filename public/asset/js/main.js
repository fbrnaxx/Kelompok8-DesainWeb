/**
* Template Name: Presento - v1.0.0
* Template URL: https://bootstrapmade.com/presento-bootstrap-corporate-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  


  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });


       
})(jQuery);