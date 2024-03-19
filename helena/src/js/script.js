var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.card()
		this.time()
		this.modal()
	}, 

	initLibraris: function() {
		
		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 50;

			if($(window).width() <= 540) {
				var cardHeight = $(".card__section").outerHeight(false)
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

		var owl = $('.galary__slider').owlCarousel({
			items: 1,
			margin: 0,
			dots: true,
			nav: true,
			loop: true,
			// autoplay: true,
			// autoplayHoverPause: true,
			// autoplayTimeout: 3000,
			// mouseDrag: false,
			// touchDrag: false,
			// animateOut: 'fadeOut',
			// responsive:{
			// 	0:{
			// 		mouseDrag: true,
			// 		touchDrag: true,
			// 		animateOut: 'fadeOut',
			// 	},
			// 	700:{
			// 		mouseDrag: false,
			// 		touchDrag: false,
			// 		animateOut: 'fadeOut',
			// 	}
			// }
		});

		owl.on("changed.owl.carousel", function(e) {
			var index = e.relatedTarget.relative(e.item.index);
			$(this).closest(".galary__slider-wrapper").find(".slider__number-current span").html(String(index + 1));
		});

		$('.review__slider').owlCarousel({
			items: 2,
			margin: 40,
			dots: true,
			dotsEach: true,
			nav: false,
			loop: true,
			// autoHeight: true,
			// responsive:{
			// 	0:{
			// 		items: 1,
			// 	},
			// 	701:{
			// 		items: 2,
			// 	},
			// 	1281: {
			// 		items: 3,
			// 	}
			// }
		});


		$.raty.path = $("body").data("path") +  '/img/raty';

		$('.modal__raiting').raty({
			half: true,
			space: false,
			number: 5,
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
		function cardImg(selector) {
			function toggleDataSrcAtribute(string) {
				$(selector + " .card__photos img").each(function() {
					$(this).parent().attr("href",  $(this).attr("data-" + string))
					$(this)
						.hide()
						.attr("src",  $(this).attr("data-" + string))
						.fadeIn(1000)
				})
			}
	
			$(selector + " .card__color").click(function () {

				$(selector + " .card__color").removeClass("active")
				$(this).addClass("active")

				var color = $(this).data("color")
				toggleDataSrcAtribute(color)
	
				var price = $(this).data("price")
				var currency = $(this).data("currency");
				$(selector + " .new__price").text(price + " " + currency)

				var pricePlusSale = Math.floor(price * 100 / 50); 
				$(selector + " .old__price").text(pricePlusSale + " " + currency)
	
				var id = $(this).data("id")
	
				if ( id !== undefined ) {
					$(this).closest(".card").find('input[name=products]').val(id);
				}
			})
		}
		
		// cardImg(".card__1")
		cardImg(".card__2")
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
    	// $(".date__2").text(getDate(2));

		$(".review__date-1").text(getDate(0))
		$(".review__date-2").text(getDate(-1))
		$(".review__date-3").text(getDate(-1))
		$(".review__date-4").text(getDate(-2))
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

