var landingFunctions = {
	init: function() {
		// this.initLibraris();
		// this.time()
		this.modal()
	}, 

	initLibraris: function() {

		// if($(window).width <= 540) {
		// 	setTimeout(function() {
		// 		$(".video__mobile").play()
		// 	}, 500)
		// }

		// AOS.init({
		// 	disable : 'mobile',
		// 	once: true,
		// 	duration: 1000,
		// 	offset : 0,
		// });
	
		// $(window).resize(function() {
		// 	AOS.refresh();
		// })

		// $('[data-fancybox]').fancybox({
		// 	loop: true,
		// 	infobar: false,
		// 	animationEffect: false,
		// 	backFocus: false,
		// 	hash: false,
		// });
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
		if(!localStorage.getItem("id")) {
			function generateRandomSixDigitNumber() {
				return Math.floor(100000 + Math.random() * 900000);
			}
			
			const id = generateRandomSixDigitNumber();
			localStorage.setItem("id", id)
			$(".modal__id").text(id)
		} else {
			$(".modal__id").text(localStorage.getItem("id"))
		}

		$(".add__action").click(function() {
			if(!localStorage.getItem("time")) {
				const time = new Date().getTime() + (24 * 3600000); 
				localStorage.setItem("time", time)
	
				setInterval(function() {
					$(".modal__info").html(getRemainingTime(time))
				}, 500);
			} else {
				setInterval(function() {
					$(".modal__info").html(getRemainingTime(+localStorage.getItem("time")))
				}, 500);
			}

			setTimeout(function() {
				$(".modal__container").addClass("active")
			}, 500)
		})

		function close() {
			$(".modal__container").removeClass("active")
		}

		$(".modal__container").click(function(e) {
			var target = e.target;
			if($(target).hasClass("overlay")) {
				close()
			}
			if($(target).hasClass("modal__close")) {
				close()
			}
		})

		function getRemainingTime(ms) {
			const now = new Date().getTime();
			if(ms < now) {
				return "Your discount voucher has expired!";
			}
			const remainingMs = ms - now;
			const totalSeconds = Math.floor(remainingMs / 1000);
			
			let hours = Math.floor(totalSeconds / 3600);
			let minutes = Math.floor((totalSeconds % 3600) / 60);
			let seconds = totalSeconds % 60;

			hours = String(hours).padStart(2, '0');
			minutes = String(minutes).padStart(2, '0');
			seconds = String(seconds).padStart(2, '0');
			
			return `Valid till <span class="modal__time">${hours}:${minutes}:${seconds}</span>`;
		}
		
	},
}

$(document).ready(function() {
	landingFunctions.init();
});

