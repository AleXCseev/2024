var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.time()
		// this.modal()
	}, 

	initLibraris: function() {
		
		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 0;
			// var cardHeight = $($(this).attr("href")).outerHeight(false)
			// var windowHeight = $(window).height()

			$('html, body')
				.stop()
				// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		})

		$(".owl-dots").off()

		function galarySlider (selector) {
			var owl = $(selector + " .galary__slider").owlCarousel({
				items: 1,
				margin: 20,
				dots: false,
				nav: false,
				loop: true,
				mouseDrag: false,
				touchDrag: false,
				animateOut: 'fadeOut',
				smartSpeed: 100,
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: false,
				responsive:{
					0:{
						mouseDrag: true,
						touchDrag: true,
					},
					541:{
						mouseDrag: false,
						touchDrag: false,
					}
				}
			});

			var owl2 = $(selector + " .galary__slider-decor").owlCarousel({
				items: 3,
				margin: 10,
				dots: false,
				nav: false,
				loop: true,
				mouseDrag: false,
				touchDrag: false,
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: false,
				// animateOut: 'fadeOut',
			});

			if($(window).width() > 541) {
				owl.on('changed.owl.carousel', function(event) {
					var item = event.item.index - 2; 
					owl2.trigger('to.owl.carousel', [item, 300]);
				})
			}

			$(selector + ' .prev__btn').click(function() {
				owl.trigger('prev.owl.carousel');
				owl2.trigger('prev.owl.carousel');
			})
	
			$(selector + ' .next__btn').click(function() {
				owl.trigger('next.owl.carousel');
				owl2.trigger('next.owl.carousel');
			})
		}
	
		galarySlider(".galary__section")

		// function priceWithDiscount (price, discount, currency) {
		// 	const priceArray = price.toString().split(".")

		// 	if(priceArray.length === 1) {
		// 		let priceNormal = price * 100 / (100 - discount)
		// 		priceNormal = Math.ceil(priceNormal);

		// 		if(currency) {
		// 			return String(priceNormal) + " " + currency;
		// 		}

		// 		return priceNormal
		// 	}

		// 	let priceDots = priceArray.join("")
		// 	priceDots = priceDots * 100 / (100 - discount)
		// 	priceDots = Math.ceil(priceDots);

		// 	if(currency) {
		// 		return priceDots.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " " + currency;
		// 	}

		// 	return priceDots.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		// }

		function priceWithDiscount (targetPrice, discount) {
			let re = new RegExp("[0-9\.]+");
			let result = targetPrice.match(re);
			if (result.length > 0) {
				let hasDots = result[0].indexOf(".") > -1;
				let priceNumber = result[0].replace(/\./g, "");
				let discountPrice = Math.ceil(priceNumber * 100 / (100 - discount));
				let newPrice = hasDots
					? ("" + discountPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ".")
					: discountPrice;
				return targetPrice.replace(re, newPrice);
			}
			return targetPrice;
		}


		$(".card__male-btn").click(function() {
			$(".card__male-btn").removeClass("active")
			$(this).addClass("active")

			var male = $(this).data("male")
			var price = $(this).data("price")
			// var currency = $(this).data("currency")
			var id = $(this).data("id")

			$(".card__select").removeClass("active")
			$(".table__size").removeClass("active")

			if(male === "man") {
				$(".select-man").addClass("active")
			} else {
				$(".select-woman").addClass("active")
			}

			$(this).closest(".card").find(".new__price").text(price)
			$(this).closest(".card").find(".old__price").text(priceWithDiscount(price, 50))
		})


		var owlReview = $(".review__slider").owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			dotsEach: true,
			items: 3,
			margin: 30,
			autoHeight: true,
			responsive:{
				0:{
					items: 1,
				},
				1081:{
					items: 3,
				}
			}
		});

		$('.review__btns .prev__btn').click(function() {
			owlReview.trigger('prev.owl.carousel');
		})

		$('.review__btns .next__btn').click(function() {
			owlReview.trigger('next.owl.carousel');
		})

		$.raty.path = $("body").data("path") +  '/img/raty';

		$('.modal__raiting').raty({
			half: true,
			space: false,
			number: 5,
		});
	
		// AOS.init({
		// 	disable : 'mobile',
		// 	once: true,
		// 	duration: 1000,
		// 	offset : 0,
		// });
	
		// $(window).resize(function() {
		// 	AOS.refresh();
		// })

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
    	// $(".date__2").text(getDate(2));

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

