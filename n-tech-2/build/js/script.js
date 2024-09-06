var landingFunctions = {
	init: function() {
		this.initLibraris();
		this.getPrice();
		this.bar();
		// this.time();
		this.modal();
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
			// var cardHeight = $("#order").outerHeight(false)
			// var windowHeight = $(window).height()

			$('html, body')
			.stop()
			// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
			.animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		})

		$('.review__slider').owlCarousel({
			items: 4,
			margin: 0,
			dots: false,
			dotsEach: true,
			nav: true,
			loop: true,
			autoHeight: false,
			// responsive:{
			// 	0:{
			// 		items:1,
			// 	},
			// 	1081:{
			// 		items:2,
			// 	},
			// 	1281:{
			// 		items:3,
			// 	}
			// }
		});


		$('.galary__slider').owlCarousel({
			items: 1,
			margin: 30,
			dots: true,
			dotsEach: true,
			nav: false,
			loop: true,
			autoHeight: false,
		});


		setInterval(changeAnimationInfoEffect, 5000)

		let count = 1;

		function changeAnimationInfoEffect() {
			$(".info__item").removeClass("active");
			$(".info__item-" + count).addClass("active")
			if(count > 3) {
				count = 1
			} else {
				count++
			}
		}

		var show = true;
		var countbox = ".about__section";
		$(window).on("scroll load resize", function () {
			if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
			var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
			var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
			var w_height = $(window).height(); // Высота окна браузера
			var d_height = $(document).height(); // Высота всего документа
			var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
			if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
				$('.about__number').css('opacity', '1');
				$('.about__number').spincrement({
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

		$('[data-fancybox]').fancybox({
			loop: true,
			infobar: false,
			animationEffect: false,
			backFocus: false,
			hash: false,
		});
	},

	bar: function() {
		var start = $(".start")
		var status = false;

		function barActive() {
			$(".bar__section-wrapper").hide()
			$('[href*="#bar"]').attr("href", "#card");
			$('.order__btn-1').attr("href", "#card-1");
			$('.order__btn-2').attr("href", "#card-2");
			$(".site__block-bg").fadeIn(1000)
			$(".bar__result").fadeIn(1000)
		}

		if(localStorage.getItem("rotate")) {
			$(".bar").css("transition", "none")
			$(".bar").css("transform", "rotate(-55deg)")
			barActive()
		}


		start.click(function() {
			if(status) {
				return;
			}

			$([document.documentElement, document.body]).animate({
				scrollTop: $(".bar").offset().top
			}, 1200);

			if(localStorage.getItem("rotate")) {
				return false;
			}
			localStorage.setItem("rotate", "true");
			$(".bar").addClass("active")

			setTimeout(function() {
				// $(".bar__light").addClass("active");
				barActive()
			}, 4000)

			setTimeout(function() {
				$([document.documentElement, document.body]).animate({
					scrollTop: $(".bar__result").offset().top
				}, 1200);
			}, 5000)

			status = true;
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
			
			// return dayNum + "." + monthNum + "." + now.getFullYear();
			return dayNum + "." + monthNum + "." + String(now.getFullYear()).substr(String(now.getFullYear()).length - 2);
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

