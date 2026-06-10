var readKeypress = function (keyEvent) {
	console.log("in readKeypress...");
	
	var keyNumber 	= keyEvent.which || keyEvent.keyCode;	
}

window.onkeydown	= readKeypress;



//-OR-, for a functional programming style...
//INPUT: this listens to the keyboard, and returns the number of the key that was pressed
window.onkeydown	= function ( keyEvent ) {
	console.log("in .onkeydown...");
	
	//decode the number of the key that was pressed
	var keyNumber 	= keyEvent.which || keyEvent.keyCode;

	//trigger mainProcedure, sending the key number
	mainProcedure( keyNumber );
}



//-OR-, to TURN OFF the keyboard reader...
window.onkeydown = "";