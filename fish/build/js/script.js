var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.time()
		this.modal()
	}, 

	initLibraris: function() {

		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 0;
			var cardHeight = $("#card").outerHeight(false)
			var windowHeight = $(window).height()

			$('html, body')
				.stop()
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
				// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		});

		// function priceWithDiscount (targetPrice, discount) {
		// 	let re = /[0-9\s.,]+/g;
		// 	let result = targetPrice.match(re);
		// 	if (result.length > 0) {
		// 		let hasDots = result[0].indexOf(".") > -1;
		// 		let priceNumber = result[0].replace(/(\.|,|\s)/g, "");
		// 		console.log(priceNumber)
		// 		let discountPrice = Math.ceil(priceNumber * 100 / (100 - discount));
		// 		let newPrice = hasDots
		// 			? ("" + discountPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ".")
		// 			: discountPrice;
		// 		return targetPrice.replace(re, newPrice);
		// 	}
		// 	return targetPrice;
		// }
		
		// $(".new__price").each(function() {
		// 	var price = $(this).text().trim()
		// 	$(this).closest(".price").find(".old__price").text(priceWithDiscount(price, 80))
		// 	$(this).text(priceWithDiscount(price, 0))
		// })

		$(".review__slider").owlCarousel({
			loop: true,
			margin: 10,
			nav: true,
			items: 1,
			dots: true,
			dotsEach: true,
			autoHeight: true,
		})


		anime.timeline({loop: true})
			.add({
				targets: '.header__title-1 .word',
				scale: [3,1],
				opacity: [0,1],
				easing: "easeOutCirc",
				duration: 800,
				delay: (el, i) => 800 * i
			}).add({
				targets: '.header__title-1',
				opacity: 0,
				duration: 1000,
				easing: "easeOutExpo",
				delay: 200
			});

		anime.timeline({loop: true})
			.add({
				targets: '.header__title-2 .word',
				scale: [3,1],
				opacity: [0,1],
				easing: "easeOutCirc",
				duration: 800,
				delay: (el, i) => 800 * i
			}).add({
				targets: '.header__title-2',
				opacity: 0,
				duration: 1000,
				easing: "easeOutExpo",
				delay: 200
			});

			anime.timeline({loop: true})
				.add({
					targets: '.header__title-3 .word',
					scale: [3,1],
					opacity: [0,1],
					easing: "easeOutCirc",
					duration: 800,
					delay: (el, i) => 800 * i
				}).add({
					targets: '.header__title-3',
					opacity: 0,
					duration: 1000,
					easing: "easeOutExpo",
					delay: 200
				});

		$.raty.path = $("body").data("path") +  '/img/raty';

		$('.modal__raiting').raty({
			half: true,
			space: false,
			number: 5,
		});

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

		// function timer () {
		// 	function runMultiple(hoursSelector, minutesSelector, secondsSelector, milisecondsSelector) {
		// 		var d = new Date();
		// 		var h = String(23 - d.getHours()).padStart(2, "0");
		// 		var m = String(59 - d.getMinutes()).padStart(2, "0");
		// 		var s = String(60 - d.getSeconds()).padStart(2, "0");
		// 		// var ms = String(1000 - d.getMilliseconds()).padStart(3, "0");
		// 		$(hoursSelector).text(h)
		// 		$(minutesSelector).text(m)
		// 		$(secondsSelector).text(s)
		// 		// $(milisecondsSelector).text(ms)
		// 	}
		// 	setInterval(function () {
		// 		runMultiple(".hours", ".minutes", ".seconds")
		// 	}, 1000);
		// }
	
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

		$(".date").text(getDate(7))
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

