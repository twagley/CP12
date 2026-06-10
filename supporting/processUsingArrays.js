//INIT: create the string array
var stringArr = [
	"Red",
	"Orange",
	"Yellow",
	"Green",
	"Blue",
	
	"Indigo", 
	"Violet"
];

var mainProcedure = function () {
	var listHTML = createList( stringArr );
	outputList( listHTML );	
}

//PROCESS: join together the elements of stringArr into an HTML list
var createList = function ( stringArr ) {
	var outputString = ""; // define an empty string to code the HTML code
	
	outputString = outputString + "<ol><li>";						// add the beginning of the list code
	outputString = outputString + stringArr.join( "</li><li>" );	// join together with more list code
	outputString = outputString + "</li></ol>";						// add the end of the list code 
	
	// This could be done all in one step as:
	// var outputString = "<ol><li>" + stringArr.join( "</li><li>" ) + "</li></ol>";
	
	return outputString;
}

//OUTPUT: display the list inside the div called #outputID
var outputList = function ( outputString ) {
	document.getElementById('outputID').innerHTML = outputString;
}