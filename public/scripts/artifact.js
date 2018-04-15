$(function() {
	var answer = false;
	var transition = false;

	$(document).ready(function(){
		$("#artifact-info").css("visibility","hidden");
		$("#artifact-next").css("visibility","collapse");
	});
	
	$("#artifact-button").click(function(e){
		checkBoxes();
		changeScreen();
	});

	$("#artifact-next").click(function(e){
		if (transition === false) {
			transition = true;
			$("#artifact-info").empty()
			// addTransition();
		} else {
			window.location.replace('/end');
		}
	});


	function checkBoxes(){
		if ($("#answer").is(":checked")) { 
			answer = true;
			console.log('true');
		}
	}

	function changeScreen(){
		if (answer === true) {
			deleteBoxes();
			$("#artifact-info").css("visibility","visible");
			$("#artifact-next").css("visibility","visible");
			$("#artifact-button").css("visibility","collapse");

		}
		else {
			console.log("try again bitch")
		}

	}

	function deleteBoxes(){
		$("h2").remove();
		$("#form-row").remove();
		$("#form-question").remove();
		$("artifact-button").remove();
	}

	// function addTransition(){
	// 	$("#artifact-info").append("<h4> 12:05AM - The call is given to start loading the lifeboats. You need to find the rest of your family and you’re starting to panic! </h4>");
	// }

});