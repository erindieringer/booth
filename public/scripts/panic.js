$(function() {
	var answer = false;
	var transition = false;

	$(document).ready(function(){
		$("#panic-info").css("visibility","hidden");
		$("#panic-next").css("visibility","collapse");
	});
	
	$("#panic-button").click(function(e){
		checkBoxes();
		changeScreen();
	});

	$("#panic-next").click(function(e){
		if (transition === false) {
			transition = true;
			$("#panic-info").empty()
			addTransition();
		} else {
			window.location.replace('/underwater');
		}
	});


	function checkBoxes(){
		if ($("#answer").val() === '02:20') {
			answer = true;
		}
		console.log($("#answer").val());
	}

	function changeScreen(){
		if (answer === true) {
			deleteBoxes();
			$("#panic-info").css("visibility","visible");
			$("#panic-next").css("visibility","visible");
			$("#panic-button").css("visibility","collapse");

		}
		else {
			console.log("try again bitch")
		}

	}

	function deleteBoxes(){
		$("h2").remove();
		$("#form-row").remove();
		$("#form-question").remove();
		$("panic-button").remove();
	}

	function addTransition(){
		$("#panic-info").append("<h4>Somehow its 2:05AM - the last lifeboat is dispatched without you, leaving you with only your life jacket. </h4>");
	}

});