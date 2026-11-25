//OUTPUT: display the results inside the #outputId div
var outputList = function ( outputCode ) {
	console.log( 'in outputList. outputCode=' + outputCode );
	
    document.querySelector( '#outputId' ).innerHTML = outputCode;
}

//PROCESS: create the HTML code for a list from an array
var createWideRainbowList = function ( wordArr ) {
    console.log( 'in createWideRainbowList, wordArr: ' + wordArr );
    
    // initialize the output string and start the list code
    var outputString = "<ul>";
    
    // loop through each index of the word array ( 0 -> length - 1 )
    for ( i in wordArr ) {
        console.log( 'in wordArr loop, i, outputString: ' + i + "," + outputString );
        
        //add this array value to the outputString 
        outputString	= outputString 
						+ "<li style='color: grey; background-color: " 
						+ wordArr[ i ] 
						+ "'>" 
						+ wordArr[ i ] 
						+ "</li>";
    }
    
    // end the list code
    outputString = outputString + "</ul>";
	
    console.log( 'final value of outputString: ' + outputString );
    
    // remember to return the result
    return outputString;
}

//PROCESS: create the HTML code for a list from an array
var createThinRainbowList = function ( wordArr ) {
    console.log( 'in createThinRainbowList, wordArr: ' + wordArr );
    
    // initialize the output string and start the list code
    var outputString = "<p>";
    
    // loop through each index of the word array ( 0 -> length - 1 )
    for ( i in wordArr ) {
        console.log( 'in wordArr loop, i, outputString: ' + i + "," + outputString );
        
        //add this array value to the outputString 
        outputString	= outputString 
						+ "<span style='color: grey; background-color: " 
						+ wordArr[ i ] 
						+ "'>&nbsp;" 
						+ wordArr[ i ] 
						+ "&nbsp;</span>";
    }
    
    // end the list code
    outputString = outputString + "</ul>";
	
    console.log( 'final value of outputString: ' + outputString );
    
    // remember to return the result
    return outputString;
}

//PROCESS: create the HTML code for a list from an array
var createRainbowStairList = function ( wordArr ) {
    console.log( 'in createRainbowStairList, wordArr: ' + wordArr );
    
    // initialize the output string and start the list code
    var outputString = "<p>";
    
    // loop through each index of the word array ( 0 -> length - 1 )
    for ( i in wordArr ) {
        console.log( 'in wordArr loop, i, outputString: ' + i + "," + outputString );
        
        //add this array value to the outputString 
        outputString	= outputString 
						+ "<span style='position: relative; color: grey; background-color: " 
						+ wordArr[ i ] 
						+ "; top: " 
						+ ( i * 5 ) 
						+ "px'>&nbsp;" 
						+ wordArr[ i ] 
						+ "&nbsp;</span>";
    }
    
    // end the list code
    outputString = outputString + "</ul>";
	
    console.log( 'final value of outputString: ' + outputString );
    
    // remember to return the result
    return outputString;
}

//INIT: set up the rainbow array
var initRainbowArr = function () {
	console.log( 'in initRainbowArr...' );

	var rainbowArr = [ "Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet" ];
	return rainbowArr;
}

//INPUT EVENT: trigger the wide rainbow from the button
document.querySelector( '#wideRainbowButtonId' ).onclick	= function () {
    console.log( 'clicked #wideRainbowButtonId' );
	
    var rainbowArr	= initRainbowArr();
    var rainbowList = createWideRainbowList( rainbowArr );
    outputList( rainbowList );
}

//INPUT EVENT: trigger the thin rainbow from the button
document.querySelector( '#thinRainbowButtonId' ).onclick	= function () {
    console.log( 'clicked #thinRainbowButtonId' );

    var rainbowArr	= initRainbowArr();    
    var rainbowList = createThinRainbowList( rainbowArr );
    outputList( rainbowList );
}

//INPUT EVENT: trigger the rainbow stairs from the button
document.querySelector( '#rainbowStairButtonId' ).onclick	= function () {
    console.log( 'clicked #rainbowStairButtonId' );
    
    var rainbowArr	= initRainbowArr();
    var rainbowList = createRainbowStairList( rainbowArr );
    outputList( rainbowList );
}
