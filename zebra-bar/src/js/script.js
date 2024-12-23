var landingFunctions = {
	init: function() {
		this.initLibraries();
	}, 

	initLibraries: function() {

		
		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 0;

			$('html, body')
				.stop()
				// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		})

		$('.header__slider').owlCarousel({
			items: 1,
			margin: 0,
			dots: true,
			dotsEach: true,
			nav: false,
			loop: true,
			mouseDrag: false,
			touchDrag: false,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
		});


		AOS.init({
			disable : function() {
				if( $(window).width() <= 1080) {
					return true;
				}
				return false
			},
			once: true,
			duration: 1000,
			offset : 0,
		});

		$('[data-fancybox]').fancybox({
			loop: true,
			infobar: false,
			animationEffect: false,
			backFocus: false,
			hash: false,
		});
	},
}

$(document).ready(function() {
	landingFunctions.init();
});

