$(document).ready(function(){

	// Manipula o Submenu
	$('.menu-link').on('click', function(){
		let id = $(this).attr('data-target')
		$('.sub-item').removeClass('show')

		$('#'+id).addClass('show')
	})
})