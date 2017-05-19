$(document).ready(function() {

	var sally = $('li:contains("Sally")');


	$("#content li:nth-last-of-type(1)").css("color", "red");


	sally.children().css( "color", "orange" );



})