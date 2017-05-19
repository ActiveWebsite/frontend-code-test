$(document).ready(function() {

	var sally = $('li:contains("Sally")');
	var dropDown = $('select')

	// challenge 1
	$("#content li:nth-last-of-type(1)").css("color", "red");

	// challenge 2
	sally.children().css( "color", "orange" );

	// challenge 3
	$("select").on("change", appendSelected)

	function appendSelected() {
		var targetText = $( "option:selected" ).text()
		var $newDiv = $(`<div class = "new-div">${targetText}</div>`)
		$(".new-div").remove()
		if(targetText !=='Choose') {
			$('fieldset').append($newDiv)
		}
	}

})