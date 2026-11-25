//PROCESS: create the HTML code for a list from an array
var createBadPasswordList = function ( wordArr ) {
	console.log( 'in createPasswordList, wordArr: ' + wordArr );
	
	// initialize the output string and start the list code
	var outputString = "<ol>";
	
	// loop through each index of the word array ( 0 -> length - 1 )
	for ( i = 0; 0 < 1; i = i + 1 ) {
		console.log( 'in wordArr loop, i, outputString: ' + i + "," + outputString );
		
		//add this array value to the outputString 
		outputString = outputString + "<li>" + wordArr[ i ] + "</li>";
	}
	
	// end the list code
	outputString = outputString + "</ol>";
	
	console.log( 'final value of outputString: ' + outputString );
	
	// remember to return the result
	return outputString;
}

//MAIN
var mainInfiniteLoopProcedure = function () {
	console.log( 'in mainInfiniteLoopProcedure...' );
	
	var passwordArr = initPasswordArr();
	var passwordList = createBadPasswordList( passwordArr );
	outputList( passwordList );
}

//INPUT EVENT: trigger mainInfiniteLoopProcedure when #infiniteLoopButtonId is clicked
document.querySelector( '#infiniteLoopButtonId' ).onclick = mainInfiniteLoopProcedure; 