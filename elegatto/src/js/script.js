var cards = {
	'helix': [
		{
			name: 'helix black',
			color: 'Чорний',
			id: 1,
			price: 1234,
			imgs: ['helix/black/1-1000.jpg', 'helix/black/2-1000.jpg', 'helix/black/3-1000.jpg'],
			isNew: true,
			sizes: ['5.9”', '6,3”', '7.1”', '7,67”', '8,3”']
		},
		{
			name: 'helix navy blue',
			color: 'Темно-синій',
			id: 2,
			price: 4321,
			imgs: ['helix/navy-blue/1-1000.jpg', 'helix/navy-blue/2-1000.jpg', 'helix/navy-blue/3-1000.jpg'],
			isNew: false,
			sizes: ['5.9”', '6,3”', '7.1”', '7,67”', '8,3”']
		},
		{
			name: 'helix vintage',
			color: 'Вінтаж',
			id: 3,
			price: 1234,
			imgs: ['helix/vintage/1-1000.jpg', 'helix/vintage/2-1000.jpg', 'helix/vintage/3-1000.jpg'],
			isNew: true,
			sizes: ['5.9”', '6,3”', '7.1”', '7,67”', '8,3”']
		},
		{
			name: 'helix all black',
			color: 'Весь чорний',
			id: 4,
			price: 4321,
			imgs: ['helix/all-black/1-1000.jpg', 'helix/all-black/2-1000.jpg', 'helix/all-black/3-1000.jpg'],
			isNew: false,
			sizes: ['5.9”', '6,3”', '7.1”', '7,67”', '8,3”']
		},
	],
	'orion-gray': [
		{
			name: 'orion gray',
			color: 'Сірий',
			id: 5,
			price: 1234,
			imgs: ['orion-gray/1-1000.jpg', 'orion-gray/2-1000.jpg', 'orion-gray/3-1000.jpg'],
			isNew: true,
			sizes: ['5.9”', '6,3”', '7.1”', '7,67”', '8,3”']
		},
	],
	'anchor-platinum': [
		{
			name: 'anchor platinum black',
			color: 'Чорний',
			id: 6,
			price: 4321,
			imgs: ['anchor-platinum/black/1-1000.jpg', 'anchor-platinum/black/3-1000.jpg'],
			isNew: false,
			sizes: ['5.9”', '6,3”', '7.1”', '7,67”', '8,3”']
		},
		{
			name: 'anchor platinum gray',
			color: 'Сірий',
			id: 7,
			price: 1234,
			imgs: ['anchor-platinum/gray/1-1000.jpg', 'anchor-platinum/gray/2-1000.jpg', 'anchor-platinum/gray/3-1000.jpg'],
			isNew: true,
			sizes: ['5.9”', '6,3”', '7.1”', '7,67”', '8,3”']
		},
		{
			name: 'anchor platinum navy',
			color: 'Tемно-синій',
			id: 8,
			price: 4321,
			imgs: ['anchor-platinum/navy/1-1000.jpg', 'anchor-platinum/navy/2-1000.jpg', 'anchor-platinum/navy/3-1000.jpg'],
			isNew: false,
			sizes: ['5.9”', '6,3”', '7.1”', '7,67”', '8,3”']
		},
		{
			name: 'anchor platinum red',
			color: 'Червоний',
			id: 9,
			price: 1234,
			imgs: ['anchor-platinum/red/1-1000.jpg', 'anchor-platinum/red/2-1000.jpg', 'anchor-platinum/red/3-1000.jpg'],
			isNew: true,
			sizes: ['5.9”', '6,3”', '7.1”', '7,67”', '8,3”']
		},
	],
	'anchor-leather': [
		{
			name: 'anchor leather black',
			color: 'Чорний',
			id: 10,
			price: 1234,
			imgs: ['anchor-leather/black/1-1000.jpg', 'anchor-leather/black/2-1000.jpg', 'anchor-leather/black/3-1000.jpg'],
			isNew: true,
			sizes: ['5.9”', '6,3”', '7.1”', '7,67”', '8,3”']
		},
		{
			name: 'anchor leather silver',
			color: 'Срібний',
			id: 11,
			price: 4321,
			imgs: ['anchor-leather/silver/1-1000.jpg', 'anchor-leather/silver/2-1000.jpg', 'anchor-leather/silver/3-1000.jpg'],
			isNew: false,
			sizes: ['5.9”', '6,3”', '7.1”', '7,67”', '8,3”']
		},
	],
	'kellmore': [
		{
			name: 'kellmore red',
			color: 'Червоний',
			id: 12,
			price: 1234,
			imgs: ['kellmore/red/1-1000.jpg', 'kellmore/red/2-1000.jpg', 'kellmore/red/3-1000.jpg'],
			isNew: true,
			sizes: ['5.9”', '6,3”', '7.1”', '7,67”', '8,3”']
		},
	]
}



var landingFunctions = {

	init: function() {
		this.initLibraris()
		this.time()
		this.card()
		this.modal()
	}, 

	initLibraris: function() {
		
		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 0;
			// var cardHeight = $(".card").outerHeight(false)
			// var windowHeight = $(window).height()

			$('html, body')
				.stop()
				// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		})

		$(".review__slider").owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			dotsEach: true,
			items: 3,
			margin: 20,
			autoHeight: true,
			// responsive:{
			// 	0:{
			// 		items: 1,
			// 		nav: true,
			// 		dots: true,
			// 	},
			// 	541:{
			// 		items: 2,
			// 		nav: false,
			// 		dots: false,
			// 	},
			// 	1081:{
			// 		items: 3,
			// 		nav: false,
			// 		dots: false,
			// 	}

			// }
		});

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

		function timer () {
			function runMultiple(hoursSelector, minutesSelector, secondsSelector, milisecondsSelector) {
				var d = new Date();
				var h = String(23 - d.getHours()).padStart(2, "0");
				var m = String(59 - d.getMinutes()).padStart(2, "0");
				var s = String(59 - d.getSeconds()).padStart(2, "0");
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
			
			return dayNum + "." + monthNum + "." + now.getFullYear();
			// return dayNum + "." + monthNum + "." + String(now.getFullYear()).substr(String(now.getFullYear()).length - 2);
		}

		// $(".date__1").text(getDate(-5));
    	// $(".date__2").text(getDate(2));

		$(".date").text(getDate(7))
		
		// $(".year").text(new Date().getFullYear())
	},

	card: function() {
		var currency = $('body').data('currency')
		var path = $('body').data('path')

		function generateCard(item, product) {
			var cloneCard = $('.card__none').clone().removeClass('card__none')

			if(item.isNew) {
				cloneCard.find('.card__new').addClass('active');
			}
			
			cloneCard.find('.card__name').text(item.name)
			cloneCard.find('.card__img-1').attr('src', path + '/img/card/' + item.imgs[0])
			cloneCard.find('.card__img-2').attr('src', path + '/img/card/' + item.imgs[1])
			cloneCard.find('.new__price').text(item.price + " " + currency)
			cloneCard.find('.old__price').text(item.price * 2 + " " + currency)
			cloneCard.find('.card__btn').attr('data-info', product)
			cloneCard.find('.card__btn').attr('data-id', item.id)

			$('.cards').append(cloneCard)
		}

		for(brend in cards) {
			cards[brend].forEach(bracelet => {
				generateCard(bracelet, brend)
			})
		}

		function generateModal(brend, id) {
			var modalClone = $('.card__modal-overlay').clone().removeClass('card__modal-none');

			var el = cards[brend].find(item => item.id === id);

			modalClone.find('.card__name').text(el.name)
			modalClone.find('.new__price').text(el.price + " " + currency)
			modalClone.find('.old__price').text(el.price * 2 + " " + currency)

			el.imgs.forEach(img => {
				var imgItem = `
					<a href="${path + '/img/card/' + img}" data-fancybox="card">
						<img src="${path + '/img/card/' + img}" alt="" />
					</a>
				`
				modalClone.find('.card__slider').append(imgItem)
			})

			var owl = modalClone.find(".card__slider").owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				dotsEach: true,
				items: 1,
				margin: 0,
				autoHeight: true,
			});

			cards[brend].forEach(item => {
				var colorBtn = `
					<button type="button" data-id="${item.id}" data-color="${item.color}" class="card__color-btn">
						${item.color}
					</button>
				`
				if(item.id === id) {
					colorBtn = `
						<button type="button" data-id="${item.id}" data-color="${item.color}" class="card__color-btn active">
							${item.color}
						</button>
					`
				}

				$(modalClone).find('.card__color-btns').append(colorBtn)
			})

			el.sizes.forEach(item => {

				var sizeBtn = `
					<button type="button" class="card__size-btn">
						${item}
					</button>
				`

				modalClone.find('.card__size-btns').append(sizeBtn)
			})

			modalClone.find('.card__size-btns button').eq(0).addClass('active')

			$('body').append(modalClone)

			$('.card__color-btn').click(function() {
				if($(this).hasClass('active')) {
					return
				}
				var id = $(this).data('id')
				modalClone.remove()
				owl.on("destroy.owl.carousel")

				generateModal(brend, id)
			})

			modalClone.click(function(e) {
				var target = e.target;
				if(target.classList.contains("card__modal-overlay")) {
					$(this).remove()
					owl.on("destroy.owl.carousel")
				}
			})

			$('.card__size-btn').click(function() {
				$('.card__size-btn').removeClass('active')
				$(this).addClass("active")
			})
		}

		$('.card__btn').click(function() {
			var brend = $(this).data('info')
			var id = $(this).data('id')

			generateModal(brend, id)
		})
		
		
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

