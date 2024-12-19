var landingFunctions = {
	init: function() {
		this.initLibraries()
		this.time()
		this.bar()
	}, 

	initLibraries: function() {
		
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

		$(".gallery__slider").owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			dotsEach: true,
			items: 5,
			margin: 10,
			autoWidth:true,
			autoHeight: false,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			responsive:{
				0: {
					items: 1,
					autoWidth: false,
					autoHeight: true,
					autoplay: false,
				},
				540: {
					items: 2,
					autoWidth: false,
					autoHeight: false,
					autoplay: true,
				},
				1080: {
					items: 4,
					autoWidth: true,
					autoHeight: false,
					autoplay: true,
				},
				1480: {
					items: 5,
					autoWidth: true,
					autoHeight: false,
					autoplay: true,
				},
			}
		});

		function initialize(){
			if($(window).width() <= 700) {
			  	$(".card__photos").addClass("owl-carousel").owlCarousel({
					items: 4,
					margin: 10,
					dots: true,
					dotsEach: true,
					nav: false,
					loop: true,
				});
			} else {
				$(".card__photos").removeClass("owl-carousel").owlCarousel('destroy');
			}
			if($(window).width() <= 1080) {
				$(".review__slider").addClass("owl-carousel").owlCarousel({
				  items: 1,
				  margin: 60,
				  dots: true,
				  dotsEach: true,
				  nav: false,
				  loop: true,
				  autoHeight: true,
				  stagePadding: 20,
			  });
		  } else {
			  $(".card__photos").removeClass("owl-carousel").owlCarousel('destroy');
			  $(".review__slider").removeClass("owl-carousel").owlCarousel('destroy');
		  }
		}

		var id;

		$(window).resize( function() {
			clearTimeout(id);
			id = setTimeout(initialize, 500);
		});

		initialize();

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
			
			// return dayNum + "." + monthNum + "." + now.getFullYear();
			return dayNum + "." + monthNum + "." + String(now.getFullYear()).substr(String(now.getFullYear()).length - 2);
		}

		// $(".date__1").text(getDate(-5));
    	// $(".date__2").text(getDate(2));

		// $(".date").text(getDate(2))
		// $(".card__date .date").text(getDate(2))
		
		// $(".year").text(new Date().getFullYear())
	},

	bar: function() {
		function scrollBar(selector, center) {
			$(selector + " .bar__item").each(function(item) {
				if($(this).hasClass("bar__item-top-opacity")) {
					$(this).removeClass("bar__item-top-opacity")
					$(this).addClass("bar__item-top")
				} else if($(this).hasClass("bar__item-top")) {
					$(this).removeClass("bar__item-top")
					$(this).addClass("bar__item-center")
				} else if($(this).hasClass("bar__item-center")) {
					$(this).removeClass("bar__item-center")
					$(this).addClass("bar__item-bottom")
				} else if($(this).hasClass("bar__item-bottom")) {
					$(this).removeClass("bar__item-bottom")
					$(this).addClass("bar__item-bottom-opacity")
				} else if($(this).hasClass("bar__item-bottom-opacity")) {
					$(this).removeClass("bar__item-bottom-opacity")
					$(this).addClass("bar__item-top-opacity")
				}
			}) 
		}

		function scrollStop(selector) {
			setTimeout(function() {
				var el = $(".bar__column__1 .bar__item-active span").text()
				$(".bar__item-center span").addClass("bar__item-logos").text(el)
				$(".bar__item-center").addClass("scale");
			}, 20)
		}
		
		var interval = 0
		var active = false

		if(localStorage.getItem("rotate")) {
			$(".bar__section-wrapper").hide()
			$(".gallery__section").addClass('hide__bar')
			$(".card__section").show()
			$(".review__section").show()
			$(".footer__section").show()
			$('[href="#order"]').attr('href', '#card')
		}

		$(".order__btn-start").click(function() {
			if ( active ) {
				clearInterval(interval);
				scrollStop()
				openClose()
				localStorage.setItem("rotate", true)
			} else {
				interval = setInterval(function() {
					scrollBar(".bar__column")
				}, 100)

				$(this).find(".stop").show()
				$(this).find(".start").hide()

				active = true
				setTimeout(function() {
					clearInterval(interval);
					scrollStop()
					openClose()
					localStorage.setItem("rotate", true)
				}, 5000)
			}
			

		})

		function openClose() {
			setTimeout(function() {
				$(".bar__section-wrapper").hide(0)
				$(".gallery__section").addClass('hide__bar')
				$(".review__section").fadeIn(1000)
				$(".footer__section").fadeIn(1000)
				$(".card__section").fadeIn(1000)
				$('[href="#order"]').attr('href', '#card')

				// $([document.documentElement, document.body]).animate(
				// 	{
				// 		scrollTop: $(".card__section-wrapper").offset().top,
				// 	},
				// 	1000
				// );

			}, 3000)
		}
	},

}

$(document).ready(function() {
	landingFunctions.init();
});

