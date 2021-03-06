$(function() {
	var answer = false;
	var transition = false;
	var tries = 0;

	$(document).ready(function(){
		$("#panic-info").css("visibility","hidden");
		$("#panic-next").css("visibility","collapse");
		$("#error-msg").css("visibility","collapse");

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
		}else {
			$("#error-msg").css("visibility","visible");
			tries += 1;
			if (tries === 2) {
				$("#error-msg").text("Hint: It's in the morning");
			}
		}
		
	}

	function changeScreen(){
		if (answer === true) {
			deleteBoxes();
			$("#panic-info").css("visibility","visible");
			$("#panic-next").css("visibility","visible");
			$("#panic-button").css("visibility","collapse");

		}
	}

	function deleteBoxes(){
		$("h2").remove();
		$("#form-row").remove();
		$("#form-question").remove();
		$("panic-button").remove();
	}

	function addTransition(){
		$("#panic-info").append("<h4>2:05 AM <br><br> The last lifeboat leaves without you, now you only have your life jacket. </h4>");
	}

});