$ = require('jquery');
var lazysizes = require('lazysizes');

$('figure img').on('click', function(){
	$('.lightbox figure img').attr('src', $(this).attr('src'))
	$('.lightbox').addClass('open')
})

$('.lightbox-close').on('click', function(){
	$('.lightbox').removeClass('open');
})