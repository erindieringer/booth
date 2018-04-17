$(function() {
	var answer = false;
	var transition = false;

	$( document).ready(function(){
		$("#water-info").css("visibility","hidden");
		$("#water-next").css("visibility","collapse");
		$("#error-msg").css("visibility","collapse");
	});
	
	$("#water-button").click(function(e){
		checkBoxes();
		changeScreen();
	});

	$("#water-next").click(function(e){
		if (transition === false) {
			transition = true;
			$("#water-info").empty()
			addTransition();
		} else {
			window.location.replace('/artifact');
		}
	});


	function checkBoxes(){
		if ($("#answer1").is(":checked") || $("#answer2").is(":checked")){ 
			answer = true;
		}
		else {
			$("#error-msg").css("visibility","visible");
		}
	}

	function changeScreen(){
		if (answer === true) {
			deleteBoxes();
			$("#water-info").css("visibility","visible");
			$("#water-next").css("visibility","visible");
			$("#water-button").css("visibility","collapse");

		}
		else {
			console.log("try again bitch")
		}

	}

	function deleteBoxes(){
		$("h2").remove();
		$("#form-row").remove();
		$("#form-question").remove();
		$("water-button").remove();
	}

	function addTransition(){
		$("#water-info").append("<h4>2:17 AM <br><br> The final SOS is sent. <br><br> Captain Edward J. Smith announces 'Every man for themselves'. </h4>");

	}

});