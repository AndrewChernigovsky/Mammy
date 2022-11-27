const swiperMain = (() => {
	const accountantInit = new Swiper('.swiper-main', {
		slidesPerView: 1,
		spaceBetween: 10,
		speed: 800,
		centeredSlides: true,
		grabCursor: true,
		loop: true,
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},
		centerInsufficientSlides: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		breakpoints: {
			768: {
				spaceBetween: 40,
				slidesPerView: 2,
			},
			1024: {
				spaceBetween: 40,
				slidesPerView: 3,
			},
			1200: {
				spaceBetween: 80,
				slidesPerView: 4,
			},
		},
	});
	const init = () => {};

	return {
		init,
	};
})();

export default swiperMain;
