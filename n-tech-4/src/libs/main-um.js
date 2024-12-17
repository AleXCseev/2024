var landing = {
	init: function() {
		// this.getPrice();
		this.formSubmit();
	}, 
	getPrice: function() {
		$('.new__price').each(function () {
			var p = parseInt($(this).text());
	        var currency = $(this).text().replace(/[0-9]/g, '');
			p = p * 100 / 40;
			p2 = Math.ceil(p);
			$(this).closest('.price').find('.old__price').text(p2 + ' ' + currency);
		});

	},
	formSubmit: function () {
		$(".card__form").submit(function(event) {
			const size = $(this).find('.size').val();
            const gender = $(this).find('.gender').val();
            const id = $(this).find('.gender').attr('data-' + gender + '-id');
            
            let res = ""

            if( id !== undefined ) {
                $(this).find('input[name=products]').val(id);
            }

			if ( size !== undefined ) {
                res += 'Size: ' + size
				$(this).find('input[name=comment]').val(res);
			}
		});
		$(".gender").on("change", function() {
			const gender = $(this).val();
			const price = $(this).attr('data-' + gender + '-price');
            const currency = $(this).data('currency');
			$(this).closest('.card').find(".new__price").text(price + " " + currency)
            $(this).closest('.card').find(".old__price").text((+price * 2) + " " + currency)
		})
	}
}

$(document).ready(function() {
	landing.init();
});