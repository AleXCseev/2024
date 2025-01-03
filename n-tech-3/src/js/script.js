var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.card()
		this.time()
		this.modal()
	}, 

	initLibraris: function() {
		
		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 0;
			var cardHeight = $(".card").outerHeight(false)
			var windowHeight = $(window).height()

			$('html, body')
			.stop()
			.animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
			// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		})

		$('.review__slider').owlCarousel({
			items: 1,
			margin: 40,
			dots: false,
			dotsEach: true,
			nav: true,
			loop: true,
			autoHeight: true,
			responsive:{
				0:{
					dots: true,
				},
				1080:{
					dots: false,
				}
			}
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
		function cardSlider (selector) {
			var owl = $(selector + " .card__main-foto").owlCarousel({
				items: 1,
				margin: 100,
				dots: false,
				nav: false,
				loop: true,
				mouseDrag: false,
				touchDrag: false,
				animateOut: 'fadeOut',
			});
	
			$(selector + " .card__foto").each(function() {
				$(this).click(function() {
					$(this).closest(".card").find(".card__foto").removeClass("active")
					var position = $(this).data("slide") - 1
					owl.trigger("to.owl.carousel", [position, 300])
					$(this).closest(".card").find(`[data-slide='${Number(position) + 1}']`).addClass("active")
				})
			})

			$(selector + " .card__nav-prev").click(function() {
				var position = $(this).closest(".card__other-foto").find(".card__foto.active").data("slide")
				$(this).closest(".card__other-foto").find(".card__foto.active").removeClass("active")
				if (Number(position) - 1 !== 0) {
					$(this).closest(".card__other-foto").find(`[data-slide='${Number(position) - 1 }']`).addClass("active")
				} else {
					$(this).closest(".card__other-foto").find("[data-slide='6']").addClass("active")
				}
				owl.trigger('prev.owl.carousel');
			})

			$(selector + " .card__nav-next").click(function() {
				var position = $(this).closest(".card__other-foto").find(".card__foto.active").data("slide")
				$(this).closest(".card__other-foto").find(".card__foto.active").removeClass("active")
				if (Number(position) + 1 > 6) {
					$(this).closest(".card__other-foto").find(`[data-slide='1']`).addClass("active")
				} else {
					$(this).closest(".card__other-foto").find(`[data-slide='${Number(position) + 1 }']`).addClass("active")
				}
				owl.trigger('next.owl.carousel');
			})
		}
	
		cardSlider(".card__1")
		cardSlider(".card__2")
		cardSlider(".card__3")
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
	
		timer()

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

