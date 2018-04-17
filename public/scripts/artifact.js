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
		var num = getRandomInt(3);
		if (num === 0){
			window.location.replace('/end');
		} else if (num === 1){
			window.location.replace('/end2');
		} else if (num === 2){
			window.location.replace('/end3');
		}
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

	function getRandomInt(max) {
  		return Math.floor(Math.random() * Math.floor(max));
	}



});