var myPhone = (function() {

var value;


$('button').on('click', function(){
	
	var value = $(this).val();
	
	console.log(value);

	$('#display').append(value);


})





})();