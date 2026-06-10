//OUTPUT: display the results inside #outputTraditionalLoopId
var outputPasswordList = function ( outputCode ) {
	console.log( 'in outputPasswordList. outputCode=' + outputCode );
	
    document.getElementById('outputTraditionalLoopId').innerHTML = outputCode;
}

//PROCESS: create the HTML code for a list from an array
var createPasswordList = function ( wordArr ) {
    console.log( 'in createPasswordList, wordArr: ' + wordArr );
    
    // initialize the output string and start the list code
    var outputString = "<ol>";
    
    // loop through each index of the word array ( 0 -> length - 1 )
    for ( i = 0; i < wordArr.length; i = i + 1 ) {
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

//INIT: create the array of passwords
var initPasswordArr = function () {
	console.log( 'in initPasswordArr...' );
	
	//INIT: create an array of the top 25 most used passwords in 2017
	//	from https://en.wikipedia.org/wiki/List_of_the_most_common_passwords
	var passwordArr = [
		"123456",
		"password",
		"12345678",
		"qwerty",
		"12345",

		"123456789",		
		"letmein",
		"1234567",
		"football",
		"dragon",
		
		"admin",
		"welcome",
		"monkey",
		"login",
		"abc123",
		
		"starwars",
		"123123",
		"dragon",
		"passw0rd",
		"master",
		
		"hello",
		"freedom",
		"whatever",
		"qazwsx",
		"trustno1"
	];
	
	return passwordArr;
}

//MAIN
var mainTraditionalLoopProcedure = function () {
    console.log( 'in mainTraditionalLoopProcedure' );
    var passwordArr 	= initPasswordArr();
    var passwordList 	= createPasswordList( passwordArr );
    outputPasswordList( passwordList );
}

//INPUT EVENT: trigger the main procedure when the button is pressed
document.querySelector( '#traditionalLoopButtonId' ).onclick = mainTraditionalLoopProcedure;