  // Counter Setup
	function CountdownTimer(options) {
		var timer;
	  var that = this;
	  var timerUpdate = options.onTimerUpdate;
	  var counterEnd = options.onCounterEnd;
	  var seconds = options.seconds;

	  function counterDecrement() {
	    timerUpdate(seconds);
	    if (seconds === 0) {
	      counterEnd();
	      that.stop();
	    }
	    seconds--;
	  }

	  this.start = function () {
	    clearInterval(timer);
	    seconds = options.seconds;
	    timer = setInterval(counterDecrement, 1000);
	  };

	  this.stop = function () {
	    clearInterval(timer);
	  };
	}
