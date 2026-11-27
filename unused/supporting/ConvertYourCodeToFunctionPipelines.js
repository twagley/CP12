var mainProcedure 	= function ( keyEvent ) {
	console.log('in mainProcedure...');
	var keyCode	= readKeypress( keyEvent );
	getBiggerOrSmaller( keyCode );
}

//INPUT: read which key was pressed
var readKeypress = function ( keyEvent ) {
	console.log('in readKeypress... keyEvent:' + keyEvent);
	return keyEvent.which || keyEvent.keyCode;
}

//PROCESS: fork the code if they pressed the up button
var getBiggerOrSmaller = function ( keyCode ) {
	console.log('in getBiggerOrSmaller... keyCode:' + keyCode);
	if ( keyCode == 85 ) { 			// U button
		makeStarBigger();
	} else if ( keyCode == 68 ) { 	// D button
		makeStarSmaller();
	}	
}

//OUTPUT: make the star bigger
var makeStarBigger = function () {
	console.log('in makeStarBigger...');
	$('#imageID').animate({width: "+=40px"});	
}

//OUTPUT: make the star smaller
var makeStarSmaller = function () {
	console.log('in makeStarSmaller...');
	$('#imageID').animate({width: "-=40px"});
}

//INPUT: run mainProcedure when someone presses a key
window.onkeydown	= mainProcedure;