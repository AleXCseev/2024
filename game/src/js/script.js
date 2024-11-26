var landingFunctions = {
	init: function() {
		this.initLibraries();
		this.animations();
	}, 

	initLibraries: function() {
		
		const owl = $('.modal__avatar-slider').owlCarousel({
			items: 1,
			margin: 0,
			dots: false,
			dotsEach: false,
			nav: true,
			loop: true,
			mouseDrag: false,
			touchDrag: false,
			animateOut: 'fadeOut'
		});

		const owlInfo = $('.modal__info-slider').owlCarousel({
			items: 1,
			margin: 0,
			dots: false,
			dotsEach: false,
			nav: false,
			loop: true,
			mouseDrag: false,
			touchDrag: false,
			animateOut: 'fadeOut'
		});

		owl.on('changed.owl.carousel', function(event) {
			const index = event.relatedTarget.relative(event.item.index);
			owlInfo.trigger("to.owl.carousel", [index, 300])

			const color = $(".avatar__slide-" + (+index + 1)).data("color");

			$(".modal__wrapper-shadow").removeClass().addClass("modal__wrapper-shadow")
			$(".modal__wrapper-shadow").hide().addClass(color).fadeIn(300)
		})

		$(".modal-open-triggle").click(function() {
			$(".modal__wrapper-shadow").hide()
			$(".main__page").hide();
			$(".main__page").addClass("hide");

			const id = $(this).data("modal");
			$(`#${id}`).addClass("active");	
			$(".modal__wrapper-shadow").removeClass().addClass("modal__wrapper-shadow main")
			$(".modal__wrapper-shadow").delay(500).fadeIn(1000)
		})	

		$(".btn__back").click(function() {
			$(".main__page").show();
			$(".main__page").removeClass("hide");
			
			$(this).closest(".modal__section").removeClass("active");
		})

		function range() {
			const value = $(this).val();
			$(this).closest(".settings__range").find(".range__track").css("width", value + "%");
			$(this).closest(".settings__range").find(".range__value").text(value + "%");
		}

		$(".input__range").on("input", range);

		$(".input__range").each(range)
	},

	animations: function() {
		function moveRandomlyWithTransform(element) {
			const $element = $(element);
		
			const distance = Math.floor(Math.random() * 51) + 100;
		
			const angle = Math.random() * 360;
		
			const deltaX = Math.cos(angle * Math.PI / 180) * distance;
			const deltaY = Math.sin(angle * Math.PI / 180) * distance;
		
			// var transform = $element.css("transform");
		
			// var matrix = transform === "none" ? [0, 0, 0, 0, 0, 0] : transform.match(/matrix.*\((.+)\)/)[1].split(', ').map(parseFloat);
		
			// var currentX = matrix[4] || 0;
			// var currentY = matrix[5] || 0;

			// var currentX = 0;
			// var currentY = 0;
		
			// var newX = currentX + deltaX;
			// var newY = currentY + deltaY;
		
			$element.css({
				transform: `translate(${deltaX}px, ${deltaY}px)`
			});
		}

		setInterval(function() {
			$(".bg__light").each(function() {
				moveRandomlyWithTransform($(this));
			})
		}, 2000);
	}
}

$(document).ready(function() {
	landingFunctions.init();
});

