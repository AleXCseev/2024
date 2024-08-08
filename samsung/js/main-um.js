var landing = {
	init: function() {
		this.formSubmit();
	},
	formSubmit: function () {
		$(".card__form").submit(function(event) {
			var color = $(this).closest(".card").find('.card__color.active').data("color");

			console.log(color);

			if ( color !== undefined ) {
				$(this).find('input[name=comment]').val('color: ' + color);
			}
		});
	}
}

$(document).ready(function() {
	landing.init();

	function priceWithDiscount (targetPrice, discount) {
		let re = /[0-9\s.,]+/g;
		let result = targetPrice.match(re);

		if (result.length > 0) {
			let hasDots = result[0].indexOf(".") > -1;
			let priceNumber = result[0].replace(/(\.|,|\s)/g, "");

			let discountPrice = Math.ceil(priceNumber * 100 / (100 - discount));
			let newPrice = hasDots
				? ("" + discountPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ".")
				: discountPrice;

			return targetPrice.replace(re, newPrice);
		}

		return targetPrice;
	}

	$(".new__price").each(function (_, item) {
		$(".old__price", $(item).parent()).text(priceWithDiscount($(item).text(), 70))
	})
});