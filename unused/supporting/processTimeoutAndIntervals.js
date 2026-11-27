//INIT: start the countdown from 10
var count2 = 0;

//PROCESS: assign timer to an interval that triggers countDown() every 1 second
var startCountdown = function () {
	var timer = setInterval( function () {	// declare timer to hold an interval with an anonymous function
		count2 = count2 - 1;				// reduce the count
		
		if ( count2 == 0 ) {				// if the countdown is finished
			clearTimeout( timer );			// stop the setInterval timer
			displayMessage( 'Boom!' );	
		} else {							// otherwise display the countdown
			displayMessage( count2 + ' seconds left...' );
		}
	}, 1000 );								// trigger the interval every 1 second
}

//OUTPUT: display the message inside the button label
var displayMessage = function ( message ) {
	document.getElementById( 'button3ID' ).innerHTML = message;
}