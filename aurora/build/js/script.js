var landingFunctions = {
	init: function() {
		this.initLibraris();
		// this.getPrice();
		this.time()
		this.modal()
	}, 

	getPrice: function() {
		$('.new__price').each(function () {
			var p = parseInt($(this).text());
	        var currency = $(this).text().replace(/[0-9]/g, '');
			p = p * 100 / 30;
			p2 = Math.ceil(p);
			$(this).closest('.price').find('.old__price').text(p2 + ' ' + currency);
		});
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

		$(".info__btn").click(function(e) {
			if($(e.target).hasClass("active")) return

			$(".info__btn").removeClass("active")
			$(this).addClass("active")

			const item = $(this).data("info")

			$(".info__box-item").hide()
			$(".info__box-" + item).fadeIn(300)
		})

		// let owl = $('.info__slider').owlCarousel({
		// 	items: 5,
		// 	margin: 0,
		// 	center: true,
		// 	dots: false,
		// 	dotsEach: true,
		// 	nav: true,
		// 	loop: true,
		// 	autoplay: true,
		// 	mouseDrag: false,
		// 	touchDrag: false,
		// 	autoplayTimeout: 3000,
		// 	autoplayHoverPause: true,
		// });

		// $('.info__next-btn').click(function() {
		// 	owl.trigger('prev.owl.carousel');
		// })

		// $('.info__prev-btn').click(function() {
		// 	owl.trigger('next.owl.carousel');
		// })

		// $('.info__slide').click(function() {
		// 	const position = $(this).data("slide") - 1
		// 	owl.trigger("to.owl.carousel", [position, 300])
		// })

		$('.gallery__slider').owlCarousel({
			items: 1,
			margin: 0,
			dots: true,
			dotsEach: true,
			nav: false,
			loop: true,
		});

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
					items:1,
				},
				1081:{
					items:3,
				}
			}
		});

		// if($(window).width() <= 1080) {
		// 	$('.galary').addClass('owl-carousel').owlCarousel({
		// 		items: 2,
		// 		margin: 45,
		// 		dots: false,
		// 		dotsEach: true,
		// 		nav: true,
		// 		loop: true,
		// 	});
		// }

		// $(window).on("resize", function() {
		// 	if($(window).width() <= 1080) {
		// 		$('.galary').addClass('owl-carousel').owlCarousel({
		// 			items: 2,
		// 			margin: 45,
		// 			dots: false,
		// 			dotsEach: true,
		// 			nav: true,
		// 			loop: true,
		// 		});
		// 	} else {
		// 		$('.galary.owl-carousel').owlCarousel('destroy');
		// 		$('.galary').removeClass('owl-carousel');
		// 	}
		// });

		// AOS.init({
		// 	disable : function() {
		// 		if( $(window).width() <= 1080) {
		// 			return true;
		// 		}
		// 		return false
		// 	},
		// 	once: true,
		// 	duration: 1000,
		// 	offset : 0,
		// });

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
    	$(".date").text(getDate(10));
	},

	modal: function() {
		function modal() {
			$(".add__review").click(function () {
				$(".modal__review").addClass("active")
			})
	
			function close() {
				$(".modal__review").removeClass("active")
			}
	
			$(".modal__review").click( function(e) {
				var target = e.target;
				if(target.classList.contains("modal__close")) {
					close()
				}
				if(target.classList.contains("modal")) {
					close()
				}
			})
	
			function readURL(input) {
				if (input.files && input.files[0]) {
					var reader = new FileReader();
					console.log(reader)
					reader.onload = function (e) {
						$('.file img').attr('src', e.target.result).css("display", "block");
					};
					reader.readAsDataURL(input.files[0]);
				}
			}
	
			$(".modal__review .input__file").on("change", function () {
				readURL(this);
			});
	
			$(".modal__review form").submit(function (e) {
				e.preventDefault()
				$(this).removeClass("active");
				$(".send__window").addClass("active");
				$(".modal__review .name__input").val("")
				$(".modal__review .modal__area").val("")
				$(".modal__review .file img").attr("src", "").css("display", "none")
				delayClose()
			})
			function delayClose() {
				setTimeout(function () {
					$(".modal__review form").addClass("active");
					$(".send__window").removeClass("active");
					close();
				}, 5000);
			}
		}
	
		modal()
	},
}

$(document).ready(function() {
	landingFunctions.init();
});

