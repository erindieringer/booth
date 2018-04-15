$(function() {
	var answer = false;
	var transition = false

	$( document).ready(function(){
		$("#ticket-info").css("visibility","hidden");
		$("#ticket-next").css("visibility","collapse");
	});
	
	$("#ticket-button").click(function(e){
		checkBoxes();
		changeScreen();
	});

	$("#ticket-next").click(function(e){
		if (transition === false) {
			transition = true;
			$("#ticket-info").empty()
			addTransition();
		} else {
			window.location.replace('/ballroom');
		}
	});


	function checkBoxes(){
		if ($("#answer1").is(":checked") || $("#answer2").is(":checked")){ 
			answer = true;
		}
	}

	function changeScreen(){
		if (answer === true) {
			deleteBoxes();
			$("#ticket-info").css("visibility","visible");
			$("#ticket-next").css("visibility","visible");
			$("#ticket-button").css("visibility","collapse");

		}
		else {
			console.log("try again bitch")
		}

	}

	function deleteBoxes(){
		$("h2").remove();
		$("#form-row").remove();
		$("#form-question").remove();
		$("ticket-button").remove();
	}

	function addTransition(){
		$("#ticket-info").append("<h4> It is now 11:40pm and you’ve just felt a large jolt! You hear someone say you’ve struck an iceberg, but you’re not worried. The Titanic is unsinkable, after all.</h4>");

	}

});