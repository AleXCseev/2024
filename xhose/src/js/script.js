var landingFunctions = {
	init: function() {
		this.initLibraris()
		// this.time()
	}, 

	initLibraris: function() {
		
		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 0;

			if($(window).width() <= 1080) {
				var cardHeight = $(".card").outerHeight(false)
				var windowHeight = $(window).height()

				$('html, body')
					.stop()
					.animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
					// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
				e.preventDefault();
			} else {
				$('html, body')
					.stop()
					// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
					.animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
				e.preventDefault();
			}
		})


		$('.review__slider').owlCarousel({
			items: 3,
			margin: 20,
			dots: true,
			dotsEach: true,
			nav: false,
			loop: true,
			autoHeight: true,
			responsive:{
				0:{
					items: 1,
					// autoHeight: true,
				},
				1081: {
					items: 2,
					// autoHeight: true,
				},
				1281:{
					items: 3,
					// autoHeight: false,
				}
			}
		});

		if($(window).width() <= 1080) {
			$('.galary__items').addClass("owl-carousel").owlCarousel({
				items: 3,
				margin: 70,
				dots: true,
				dotsEach: true,
				nav: false,
				loop: true,
				autoHeight: false,
			});
		}

		$('[data-fancybox]').fancybox({
			loop: true,
			infobar: false,
			animationEffect: false,
			backFocus: false,
			hash: false,
		});
	},

	time: function() {
		Date.prototype.daysInMonth = function () {
			return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
		};
		
		if (!String.prototype.padStart) {
			String.prototype.padStart = function padStart(targetLength, padString) {
				targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
				padString = String((typeof padString !== 'undefined' ? padString : ' '));
				if (this.length > targetLength) {
					return String(this);
				}
				else {
					targetLength = targetLength - this.length;
					if (targetLength > padString.length) {
						padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
					}
					return padString.slice(0, targetLength) + String(this);
				}
			};
		}

		function getDate(plusDays) {
			var now = new Date;
			now.setDate(now.getDate() + plusDays);
			var dayNum = "";
			if (now.getDate() < 10) {
				dayNum = "0"
			}
			dayNum += now.getDate();
			var monthNum = "";
			if (now.getMonth() + 1 < 10) {
				monthNum = "0"
			}
			monthNum += now.getMonth() + 1;
			
			return dayNum + "." + monthNum + "." + now.getFullYear();
			// return dayNum + "." + monthNum + "." + String(now.getFullYear()).substr(String(now.getFullYear()).length - 2);
		}

		// $(".date__1").text(getDate(-5));
    	$(".date").text(getDate(2));

	},

}

$(document).ready(function() {
	landingFunctions.init();
});

