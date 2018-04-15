$(function() {
	var answer = false;
	var transition = false;

	$(document).ready(function(){
		$("#ballroom-info").css("visibility","hidden");
		$("#ballroom-next").css("visibility","collapse");
	});
	
	$("#ballroom-button").click(function(e){
		checkBoxes();
		changeScreen();
	});

	$("#ballroom-next").click(function(e){
		if (transition === false) {
			transition = true;
			$("#ballroom-info").empty()
			addTransition();
		} else {
			window.location.replace('/deck');
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
			$("#ballroom-info").css("visibility","visible");
			$("#ballroom-next").css("visibility","visible");
			$("#ballroom-button").css("visibility","collapse");

		}
		else {
			console.log("try again bitch")
		}

	}

	function deleteBoxes(){
		$("h2").remove();
		$("#form-row").remove();
		$("#form-question").remove();
		$("ballroom-button").remove();
	}

	function addTransition(){
		$("#ballroom-info").append("<h4> It is now 11:50pm - 14 ft of water has poured into the front part of the ship and you’re starting to get a little worried. You should see if you can see anything from the deck!</h4>");

	}

});