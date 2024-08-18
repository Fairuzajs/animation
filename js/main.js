

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		640: {
		  slidesPerView: 1,
		  spaceBetween: 20,
		},
		768: {
		  slidesPerView: 1,
		  spaceBetween: 20,
		},
		1024: {
		  slidesPerView: 2,
		  spaceBetween: 30,
		},
	  },
    mousewheel: true,
    keyboard: true,
  });


  AOS.init();


