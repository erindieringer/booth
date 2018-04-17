$(function() {
	var answer = false;
	var transition = false;

	$(document).ready(function(){
		$("#artifact-info").css("visibility","hidden");
		$("#artifact-next").css("visibility","collapse");
		$("#error-msg").css("visibility","collapse");

	});
	
	$("#artifact-button").click(function(e){
		checkBoxes();
		changeScreen();
	});

	$("#artifact-next").click(function(e){
		window.location.replace('/end');
	});


	function checkBoxes(){
		if ($("#answer").is(":checked")) { 
			answer = true;
		} else {
			$("#error-msg").css("visibility","visible");
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



});