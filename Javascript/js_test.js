jQuery(document).ready(function($) {

	var sally = $('li:contains("Sally")');
	var dropDown = $('select')

	// challenge 1
	$("#content li:nth-last-of-type(1)").css("color", "red");

	// challenge 2
	sally.children().css("color", "orange");

	// challenge 3
	$("select").on("change", appendSelected)

	function appendSelected() {
		var targetText = $("option:selected").text()
		var $newDiv = $(`<div class = "new-div">${targetText}</div>`)
		$(".new-div").remove()
		if (targetText !== 'Choose') {
			$('fieldset').append($newDiv)
		}
	}

	// challenge 4
	(function runner() {
		var targetHeight = $("#setDims").outerHeight();
		var targetWidth = $("#setDims").outerWidth();
		$("#setDims").after(" I have a height of " + targetHeight + " and a width of " + targetWidth + "!")
	})();


	// challenge 5
	$("#clickEventLink").on('click', toggleLinkClassName)

	function toggleLinkClassName() {
		if ($(this).hasClass('not-clicked')) {
			$(this).removeClass('not-clicked')
			$(this).addClass('clicked')
		} else {
			$(this).removeClass('clicked')
			$(this).addClass('not-clicked')
		}
	}

	// challenge 6
	$.get("ajax_return.html").then(function(data){
		console.log(data)
		$("#jsonResponse").append(data)
});





})