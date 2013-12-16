$(document).ready(function() {

	var paragraph = randParagraph();

	$('#quote').append('<p>' + paragraph + '</p>');
  $('#timer').html('<p>60 seconds</p>');
  $('#typefield').html('');

 	var myCounter = new CountdownTimer({
		seconds: 5,
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

		}
	});

	detectStart(myCounter);
});