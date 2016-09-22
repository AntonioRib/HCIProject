$(document).ready(function(){

	$('.iframeLink').click(function(){
		if(!$(this).parent().hasClass('disabled')){
			$('.actualPage').removeClass('actualPage');
			$(this).addClass('actualPage');
			$('.iframe').attr('src', $(this).attr('href'));
			return false;
		}
	});

})
