var landingFunctions = {
	init: function() {
		this.initLibraris()
		// this.card()
		this.time()
		// this.modal()
	}, 

	initLibraris: function() {
		
		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 0;
			var cardHeight = $(".card").outerHeight(false)
			var windowHeight = $(window).height()

			if($(window).width() < 1080) {
				fixedOffset = 20
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

		$('.new__price').each(function () {
			var p = parseInt($(this).text());
	        var currency = $(this).text().replace(/[0-9]/g, '');
			var oldPrice = Math.ceil(p * 100 / 40);
			$(this).closest('.price').find('.old__price').text(oldPrice + ' ' + currency);
			$(this).closest(".card").find(".result").text(oldPrice - p + " " + currency)
		});

		const owl = $('.galary__slider').owlCarousel({
			items: 2,
			margin: 20,
			dots: false,
			dotsEach: true,
			nav: false,
			loop: true,
			autoHeight: false,
			// autoplay: true,
			// autoplayTimeout: 3000,
			// autoplayHoverPause: true,
		});

		$(".galary__section .galary__btn-prev").click(function() {
			owl.trigger('prev.owl.carousel');
		})

		$(".galary__section .galary__btn-next").click(function() {
			owl.trigger('next.owl.carousel');
		})

		const owlReview = $('.review__slider').owlCarousel({
			items: 1,
			margin: 20,
			dots: false,
			dotsEach: true,
			nav: false,
			loop: true,
			autoHeight: true,
			// autoplay: true,
			// autoplayTimeout: 3000,
			// autoplayHoverPause: true,
		});

		$(".review__section .galary__btn-prev").click(function() {
			owlReview.trigger('prev.owl.carousel');
		})

		$(".review__section .galary__btn-next").click(function() {
			owlReview.trigger('next.owl.carousel');
		})

		

		
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
	
		// $(window).resize(function() {
		// 	AOS.refresh();
		// })

		if($(window).width() >= 1080) {
			$(".header__galary-item").hover(
				function() {
					$(this).addClass('active')
				},
				function() {
					$(this).removeClass('active')
					$(".header__galary-item").eq(2).addClass('active')
				}
			)
		} else {
			$('.header__galary').addClass("owl-carousel").owlCarousel({
				items: 3,
				margin: 10,
				dots: true,
				dotsEach: true,
				nav: false,
				loop: true,
				center: true,
				autoHeight: false,
				// autoplay: true,
				// autoplayTimeout: 3000,
				// autoplayHoverPause: true,
			})
		}

		

		$(".advantage__nav-item").click(function() {
			$(".advantage__nav-item").removeClass('active')
			$(this).addClass('active')

			const id = $(this).data('nav')

			$(".advantage__title span").hide().removeClass("active")
			$(".advantage__title-" + id).fadeIn(300)
		})

		$('[data-fancybox]').fancybox({
			loop: true,
			infobar: false,
			animationEffect: false,
			backFocus: false,
			hash: false,
		});
	},

	card: function() {
		
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
						padString += padString.repeat(targetLength / padString.length);
					}
					return padString.slice(0, targetLength) + String(this);
				}
			};
		}

		function timer () {
			function runMultiple(hoursSelector, minutesSelector, secondsSelector, milisecondsSelector) {
				var d = new Date();
				var h = String(23 - d.getHours()).padStart(2, "0");
				var m = String(59 - d.getMinutes()).padStart(2, "0");
				var s = String(60 - d.getSeconds()).padStart(2, "0");
				// var ms = String(1000 - d.getMilliseconds()).padStart(3, "0");
				$(hoursSelector).text(h)
				$(minutesSelector).text(m)
				$(secondsSelector).text(s)
				// $(milisecondsSelector).text(ms)
			}
			setInterval(function () {
				runMultiple(".hours", ".minutes", ".seconds")
			}, 1000);
		}
	
		// timer()

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
			
			// return dayNum + "." + monthNum + "." + now.getFullYear();
			return dayNum + "." + monthNum + "." + String(now.getFullYear()).substr(String(now.getFullYear()).length - 2);
		}

		// $(".date__1").text(getDate(-5));
    	$(".date").text(getDate(2));

	},

	modal: function() {
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
	},

	
}

$(document).ready(function() {
	landingFunctions.init();
});

