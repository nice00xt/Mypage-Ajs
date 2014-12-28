$(document).ready(function(){
	$('.btn-vr').click(function(){
		$('.overlay-box').fadeIn('fast');
	});

	$('.closeup').click(function(){
		$('.overlay-box').fadeOut('fast');
	});
});