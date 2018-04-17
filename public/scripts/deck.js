$(function() {
	var answer = false;
	var transition = false;

	$(document).ready(function(){
		$("#deck-info").css("visibility","hidden");
		$("#deck-next").css("visibility","collapse");
		$("#error-msg").css("visibility","collapse");

	});
	
	$("#deck-button").click(function(e){
		checkBoxes();
		changeScreen();
	});

	$("#deck-next").click(function(e){
		if (transition === false) {
			transition = true;
			$("#deck-info").empty()
			addTransition();
		} else {
			window.location.replace('/panic');
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
			$("#deck-info").css("visibility","visible");
			$("#deck-next").css("visibility","visible");
			$("#deck-button").css("visibility","collapse");

		}
		else {
			console.log("try again bitch")
		}

	}

	function deleteBoxes(){
		$("h2").remove();
		$("#form-row").remove();
		$("#form-question").remove();
		$("deck-button").remove();
	}

	function addTransition(){
		$("#deck-info").append("<h4> 12:05 AM <br><br> The call is given to start loading the lifeboats. You need to find the rest of your family and you’re starting to panic! </h4>");
	}

});