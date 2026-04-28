(function ($) {
  "use strict";

  //  Configuration: List your image paths here
  const images = [
    "img/css.png",
    "img/javascript.jpg",
    "img/course-1.jpg",
    "img/course-2.jpg",
    "img/course-3.jpg",
    "img/cat-1.jpg",
    "img/cat-2.jpg",
    "img/cat-4.jpg",
    "img/html.jpg",
  ];

  let currentIndex = 0;
  const galleryImg = document.getElementById("gallery-img");

  //  Function to change the image with a fade effect
  function changeGalleryImage() {
    // Apply a quick fade out
    galleryImg.style.opacity = "0";
    galleryImg.style.transition = "opacity 0.5s ease-in-out";

    setTimeout(() => {
      // Change the source
      currentIndex = (currentIndex + 1) % images.length;
      galleryImg.src = images[currentIndex];

      // Fade back in
      galleryImg.style.opacity = "1";
    }, 500); // Wait for fade out to finish
  }

  // Start the auto-cycle every 2 seconds
  setInterval(changeGalleryImage, 2000);

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").css("top", "0px");
    } else {
      $(".sticky-top").css("top", "-100px");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        },
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);
