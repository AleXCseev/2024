var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.card()
		this.time()
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

		var show = true;
		var countbox = ".info__section";
		$(window).on("scroll load resize", function () {
			if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
			var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
			var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
			var w_height = $(window).height(); // Высота окна браузера
			var d_height = $(document).height(); // Высота всего документа
			var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
			if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
				$('.info__item-number').css('opacity', '1');
				$('.info__item-number').spincrement({
					thousandSeparator: "",
					duration: 2000
				});
				 
				show = false;
			}
		});

		$('.galary__slider').owlCarousel({
			items: 3,
			margin: 20,
			dots: true,
			dotsEach: true,
			nav: false,
			loop: true,
			stagePadding: 0,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			responsive:{
				0:{
					items: 1,
					margin: 25,
					stagePadding: 33,
				},
				700: {
					items: 2,
					margin: 20,
					stagePadding: 0,
				},
				1081:{
					items: 3,
					margin: 20,
					stagePadding: 0,
				}
			}
		});


		$(".advantage__btn").click(function() {
			$(".advantage__btn").removeClass("active")
			$(".advantage__text").removeClass("active").hide()
			$(this).addClass("active")
			$(this).closest(".advantage__item").find(".advantage__text").fadeIn(600)
		})


		$('.review__slider').owlCarousel({
			items: 3,
			margin: 20,
			dots: true,
			dotsEach: true,
			nav: false,
			loop: true,
			autoHeight: false,
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
	
		$(window).resize(function() {
			AOS.refresh();
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
		$(".card__size").click(function() {
			var size = $(this).data('size');
			var size_2 = $(this).data("size-2");
			$(this).closest(".card").find(".size").text(size)
			$(this).closest(".card").find(".size__2").text(size_2)
			$(this).closest(".card").find(".card__size").removeClass("active");
			$(this).addClass("active");
		})
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

