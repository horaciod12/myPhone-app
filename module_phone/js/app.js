var myPhone = (function() {


$('button').on('click', function(){
	
	var value = $(this).val();

	var anime = document.createElement('span');

	anime.append(value);

	$('#display').append(anime);

	//$(anime).delay().fadeOut(500, function(){
	//	$(this).delay().fadeIn(500);
	//});

	$(anime).fadeOut(8000).delay(800);
});



})();