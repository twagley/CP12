//INIT: create my bucket list array
var bucketArr = [
	"raise my daughters to be great people",
	"build the ultimate home theatre",
	"learn to play more instruments",
	"create music that many people love",
	"help grow my community",
	
	"go see Hobbiton in NZ",
	"travel around Japan and South Korea",
	"visit more places in India",
	"go on a river cruise in Europe",
	"go on a biking tour through Denmark and/or Italy"
];

var mainProcedure = function () {
	console.log( 'in mainProcedure' );
	var listString = makeList( bucketArr );
	outputList( listString );	
}

//PROCESS: create HTML code for a list from the array
var makeList = function ( thisArr ) {
	console.log( 'in makeList, thisArr:' + thisArr );
	
	var outputString = "";
	
	outputString = outputString + "<ol><li>";
	outputString = outputString + thisArr.join( '</li><li>' );
	outputString = outputString + "</li></ol>";
	
	return outputString;
}

//OUTPUT: display the list inside the div #outputID
var outputList = function ( listString ) {
	console.log( 'in outputList, listString:' + listString );
	document.getElementById('outputID').innerHTML = listString;
}