let swiper = new Swiper('.blog-slider', {
	spaceBetween: 30,
	effect: 'fade',
	loop: true,
	autoplay: true,
	delay:3000,
	mousewheel: {
		invert: false,
	},
	// autoHeight: true,
	pagination: {
		el: '.blog-slider__pagination',
		clickable: true,
	}
});


