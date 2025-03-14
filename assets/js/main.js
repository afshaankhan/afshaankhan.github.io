!(function($) {
  "use strict";

  // Typed.js animation for hero section
  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items').split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1700
    });
  }

  // Smooth scrolling for navigation
  $(document).on('click', '.nav-menu a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, 1000, 'easeInOutExpo');
        $('.nav-menu .active, .mobile-nav .active').removeClass('active');
        $(this).closest('li').addClass('active');
        return false;
      }
    }
  });

  // Mobile menu toggle effect
  $(document).on('click', '.mobile-nav-toggle', function() {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  });

  // Back to top button behavior
  $(window).scroll(function() {
    $('.back-to-top').toggle($(this).scrollTop() > 100);
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
    return false;
  });

  // Skills progress animation
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, { offset: '70%' });

  // Portfolio filtering
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'masonry'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
      portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });
  });

  // Testimonials carousel
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 2,
    margin: 10
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    items: 1,
    animateOut: 'fadeOut'
  });

  // Initialize AOS animation
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: "ease-out-back",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);
