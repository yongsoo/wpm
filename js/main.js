$(document).ready(function() {

	var paragraph = randParagraph();

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

			var wpm = input.length; // Calculates WPM for user

			paragraph = paragraph.split(" ");
			paragraph = paragraph.slice(0, input.length);

			input = wordsToObj(input); // Parses user input into object
			paragraph = wordsToObj(paragraph); // Parses actual paragraph into object

			var mistypedWordsArr = computeMistypedWords(input, paragraph);
			var accuracyPercentage = Math.round((1 - (mistypedWordsArr.length / Object.keys(paragraph).length)) * 100);

			if (mistypedWordsArr.length === 0) {
				mistypedWordsArr = ["None - nice work!"];
			}

			$('#stats').append('<li><br>Words Per Minute: ' + wpm + '</li><br>');
			$('#stats').append('<li>Accuracy: ' + accuracyPercentage + '%</li><br>');
			$('#stats').append('<li>Your Mistyped Words:</li></br>');

			mistypedWordsArr.forEach(function(word) {
				$('#stats').append('<li>' + word + '</li>');
			});

			$('#stats').append('<li><br><a href="index.html">Play Again</a></li><br>');

			$('#stats').fadeIn();

		}
	});

	detectStart(myCounter);
});