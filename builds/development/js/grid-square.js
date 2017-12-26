$('.tile').on('click', function(){
	$('.tile').removeClass('expanded-square')
	$(this).addClass('expanded-square')
})

$('img').on('click', function(elem){
	// if ($(this).parents('.expanded-square').length) {
	// 	console.log('this: ', $(this).parent().parent())
	// 	var something = $(this).parent().parent()
		
	// }
	

	$( ".tile" ).each(function( index, b ) {
		if ($(this).parents('.expanded-square').length) {
			$(this).removeClass('tile')
		}
		console.log($(this));
	});
})
