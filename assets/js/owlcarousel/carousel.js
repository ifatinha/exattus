export function carouselTestimonial() {
  $(document).ready(function () {
    $("#testimonialCarousel").owlCarousel({
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      center: true,
      dots: false,
      items: 2,
      margin: 40,
      nav: false,
      loop: true,
      smartSpeed: 800,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        992: {
          items: 1,
        },
        1200: {
          items: 2,
        },
        1600: {
          items: 3,
        },
      },
    });
  });
}
