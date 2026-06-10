//OUTPUT: display the result in #buttonID
var outputAnswer = function ( answer ) {
	console.log( 'in outputAnswer. answer=' + answer );
	
	document.querySelector( '#forLoopButtonId' ).innerHTML = answer;
}

//PROCESS: loop from 1 to 10, and add to sum each time...
var getSumFromOneToTen = function () {
	console.log( 'in getSumFromOneToTen...' );
	
	//INIT: start sum as zero			
	var sum = 0;
	
	for ( i = 1; i < 11; i = i + 1 ) {
		sum = sum + i;
		
		// show what is happening inside the loop...
		console.log( 'in loop! i=' + i + ' sum=' + sum ); 
	}
	
	// show the final results
	console.log( 'finished loop! i=' + i + ' sum=' + sum );
	
	return sum // don't forget to return the answer!
}

//MAIN
var mainForLoopProcedure = function () {
	console.log( 'in mainForLoopProcedure...' );
	
	sum = getSumFromOneToTen();
	outputAnswer( sum );
}

//INPUT EVENT:
document.querySelector( '#forLoopButtonId' ).onclick = mainForLoopProcedure;