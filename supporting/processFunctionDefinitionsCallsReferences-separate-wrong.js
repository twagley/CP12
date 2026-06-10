var mainProcedure = function () {
	var input 	= getInput();
	var results	= calculateResults( input );
	outputResults( results );
	
	var inputResults = function () {
		//...grab the input
		return input
	}

	var calculateResults = function ( input ) {
		//...make a calculation
		return results
	}

	var outputResults = function ( results ) {
		document.getElementById('outputID').innerHTML = results;
	}	
}