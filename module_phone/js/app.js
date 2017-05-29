var myPhone = (function() {


$('.call').prop('disabled', true);



$('.buttons').on('click', function(){
	
	$('.call').prop('disabled', false);
	var value = $(this).val();
	var anime = document.createElement('span');
	anime.append(value);
	$('#display').append(anime);

});



	$('.call').on('click', function(){

		if($('.call i').hasClass('ion-android-call')) {

			$(this).addClass("btn btn-danger");
			$('.call i').removeClass('ion-android-call').addClass('ion-ios-close-outline');
			$('#display span').remove();
			$("<span>Calling number ....</span>").hide().appendTo('#display').fadeIn(2000);
			$('.buttons').prop('disabled', true);
			$('#display button').prop('disabled', true);

		} else {

			$(this).removeClass("btn btn-danger").addClass("btn btn-success");
			$('.call i').removeClass('ion-ios-close-outline').addClass('ion-android-call');
			$('#display span').remove();
			$('.buttons').prop('disabled', false);
			$('#display button').prop('disabled', false);
			$('.call').prop('disabled', true);

		}

	})



function controlBtn() {

	if ($("#display").has('span').length) {	
		
		$('.call').prop('disabled', false);

	} else {
		
		$('.call').prop('disabled', true);
	}

}



$('#display button').on('click', function(){

	$('span').last().remove();
	controlBtn();

})



})();