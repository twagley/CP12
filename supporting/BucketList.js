//INIT: create my bucket list array
var bucketArr = [
	"learn auto repair",
	"overcome my fear of heights",
	"build a deck with my son",
	"help people in trouble with the law find good work",
	"build a 3D or CNC printer",
	
	"build a shed with my son",
	"make a sculpture showing the friendships between students",
	"take the Foundation Year Programme at King's for fun",
	"visit the Prado museum in Spain",
	"make an encoded LED clock"
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