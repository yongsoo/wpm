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
		seconds: 9,
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
			}

			else {
				$('#stats').append('<li><br>Please play this game responsibly!</li>');
			}

			$('#stats').append('<li><br><button class="letter" id="playAgainButton">Try Again</button></li><br>');
			$('#stats').fadeIn();

			$('#playAgainButton').on('click', function() {
	      document.location.href = 'index.html';
			});
		}
	});
  
	startTimer(myCounter);
});