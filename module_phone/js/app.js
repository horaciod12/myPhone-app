var myPhone = (function() {


$('button').on('click', function(){
	
	var value = $(this).val();

	$('#display').append(value);


});



})();