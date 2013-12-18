$(document).ready(function() {

	var paragraph = randParagraph();
	var count = 0;

	document.onkeydown = function() {
	  count++;
  }

	$('#quote').append('<p>' + paragraph + '</p>');
  $('#timer').html('<p>60 seconds</p>');
  $('#typefield').html('');

 	var myCounter = new CountdownTimer({
		seconds: 59,
		onTimerUpdate: function(sec) {
			$('#timer').html('');
			$('#timer').append('<p>' + sec + ' seconds</p>');
		},
		onCounterEnd: function() {
			var input = $('#typefield').val();
			input = input.split(" ");
			input = input.slice(0, input.length-1);

      var keyPresses = count;
      count = 0;

			var wpm = input.length; // Calculates WPM for user

			if ((keyPresses / wpm) > 4 && (keyPresses / wpm) < 9) {
	      paragraph = paragraph.split(" ");
				paragraph = paragraph.slice(0, input.length);

				input = wordsToObj(input); // Parses user input into object
				paragraph = wordsToObj(paragraph); // Parses actual paragraph into object

				var mistypedWordsArr = computeMistypedWords(input, paragraph);
				var accuracyPercentage = Math.round((1 - (mistypedWordsArr.length / Object.keys(paragraph).length)) * 100);
				var score = Math.round(computeScore(accuracyPercentage, wpm));

				if (mistypedWordsArr.length === 0) {
					mistypedWordsArr = ["None - nice work!"];
				}

				$('#stats').append('<li><br>Words Per Minute: ' + wpm + '</li><br>');
				$('#stats').append('<li>Accuracy: ' + accuracyPercentage + '%</li><br>');
				$('#stats').append('<li>Score: ' + score + '</li><br>');
				$('#stats').append('<li>Your Mistyped Words:</li></br>');

				mistypedWordsArr.forEach(function(word) {
					$('#stats').append('<li>' + word + '</li>');
				});

				$('#stats').append('<li><br><br><input id="user" type="text" placeholder="Your name"></input></li>');
				$('#stats').append('<li><br><button class="playButton" id="postScorePlayAgain">Post Score & Play Again</button></li><br>');

			}

			else {
				$('#stats').append('<li><br>Please play this game responsibly!</li>');
				$('#stats').append('<li><br><button class="playButton" id="playAgainButton">Play Again</button></li><br>');

			}
			$('#stats').fadeIn();

			$('.playButton').on('click', function() {
				var name = $('#user').val();
				console.log(name);
				console.log(score);

	  		$.ajax({
			    url: 'http://127.0.0.1:8080',
			    type: 'POST',
			    contentType: 'application/json',
			    data: JSON.stringify({
			      name: name,
			      score: score
			    }),
			    success: function() {
			      console.log('it sent');
			    },
			    error: function() {
			      console.log('failed to send message');
			    }
			  });

	      setTimeout(function() {
	      	document.location.href = 'http://127.0.0.1:8080';
			  }, 100);
	    });
		}
	});
  
	startTimer(myCounter);
});