
$(document).ready(function(){
	
	var count = 0;
	var toguess = random(1,101);
	$('#guessList').append('<li>' + toguess + '</li>');
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	

  	$('form').submit(function() {
  		count++;
  		$('#count').text(count);
  		var userguess = $('#userGuess').val();
  		$('#guessList').append('<li>' + userguess + '</li>');
  		if (userguess > 100 || userguess < 1) {
  			$('#feedback').text('It\'s between 1 and 100');
  		}
  		else if (userguess == toguess) {
  			$('#feedback').text('Good Job!  Play again!');
  		}
  		else if (userguess < toguess) {
  			$('#feedback').text('Higher!');
  		}
  		else if (userguess > toguess) {
  			$('#feedback').text('Lower!');
  		}


  		return false;
  	});

  	$(".new").click(function() {
  		count = 0;
  		toguess = newGame(toguess);
  		$('#guessList').append('<li>' + toguess + '</li>');
  	});

});

function newGame(toGuess) {
	count = 0;
	$('#count').text(count);
	$('#guessList').empty();
	toGuess = random(1,101);
	return toGuess;
}

function random(min, max) {
	var toguess = Math.floor(Math.random() * (max - min) + min);
	return toguess;
}


