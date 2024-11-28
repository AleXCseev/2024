var landingFunctions = {
	init: function() {
		this.carousel();
		this.animations();
		this.modals();
		this.play();
		this.range();
	}, 

	carousel: function() {
		
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
		
		$(document).on("keydown", function(e) {
			if($("#profile").hasClass("active") || $("#shop").hasClass("active")) {
				if(e.keyCode == 37) {
					owl.trigger('prev.owl.carousel');
				};
				if(e.keyCode == 39) {
					owl.trigger('next.owl.carousel');
				};
			}
		});
	},

	animations: function() {
		function moveRandomlyWithTransform(element) {
			const $element = $(element);
		
			const distance = Math.floor(Math.random() * 51) + 100;
		
			const angle = Math.random() * 360;
		
			const deltaX = Math.cos(angle * Math.PI / 180) * distance;
			const deltaY = Math.sin(angle * Math.PI / 180) * distance;
		
			$element.css({
				transform: `translate(${deltaX}px, ${deltaY}px)`
			});
		}

		setInterval(function() {
			$(".bg__light").each(function() {
				moveRandomlyWithTransform($(this));
			})
		}, 2000);
	},

	modals: function() {

		const timer = this.timer

		$(".modal-open-triggle").click(function() {
			$(".modal__wrapper-shadow").hide()
			$(".main__page").hide();
			$(".main").addClass("hide");

			const id = $(this).data("modal");
			$(`#${id}`).addClass("active");	
			$(".modal__wrapper-shadow").removeClass().addClass("modal__wrapper-shadow main")
			$(".modal__wrapper-shadow").delay(500).fadeIn(1000)


			if(id == "exit") {
				timer();
			}
		})	

		$(".btn__back").click(function() {
			$(".main__page").show();
			$(".main").removeClass("hide");
			
			$(this).closest(".modal__section").removeClass("active");
		})

		document.addEventListener("keydown", function(e) {
			if(e.key === "Escape" || e.code === "Escape") {
				$(".modal__section").removeClass("active");
				$(".main__page").show();
				$(".main").removeClass("hide");
			}
		})
	},

	play: function() {
		$(".btn__mode").hover(
			function() {
				const mode = $(this).data("mode");
				$(".play__info-item").hide().removeClass("active");
				$(`.play__info-item[data-mode="${mode}"]`).fadeIn(300).addClass("active");
				$(`.play__info-item[data-mode="${mode}"]`).find(".play__info-text").show()
				$(`.play__info-item[data-mode="${mode}"]`).find(".play__info-btns").hide(300)
			}, 
			function() {

			}
		)

		$(".btn__mode").click(function() {
			const mode = $(this).data("mode");
			$(`.play__info-item[data-mode="${mode}"]`).find(".play__info-text").hide()
			$(`.play__info-item[data-mode="${mode}"]`).find(".play__info-btns").fadeIn(300)
		})

		$(".play__info-btn").click(function() {
			$(".play__info-btn").removeClass("active");
			$(this).addClass("active");
		})
	},

	range: function() {
		function rangeCallback() {
			const value = $(this).val();
			$(this).closest(".settings__range").find(".range__track").css("width", value + "%");
			$(this).closest(".settings__range").find(".range__value").text(value + "%");
		}

		$(".input__range").on("input", rangeCallback);

		$(".input__range").each(rangeCallback);
	},

	timer: function() {

		$(".exit__timer-block").show();
		$(".exit__timer").text(10);
		$(".exit__block-btns").removeClass("active");

		const time = $(".exit__timer");
		const intervalId = setInterval(timerDecrement, 1000);
	  
		function timerDecrement() {
			const newTime = time.text() - 1;
		
			time.text(newTime);
		
			if(newTime === 0) {

				$(".exit__timer-block").hide();
				$(".exit__block-btns").addClass("active");

				clearInterval(intervalId);
			} 

		}

		document.addEventListener("keydown", function(e) {
			if(e.key === "Escape" || e.code === "Escape") {
				clearInterval(intervalId);
			}
		})
	}
}

$(document).ready(function() {
	landingFunctions.init();
});

