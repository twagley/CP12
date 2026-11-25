//OUTPUT: this puts the grid information inside the div called #outputId
var outputGridCode = function ( htmlCode ) {  
	console.log( "in outputGridCode. htmlCode = " + htmlCode );
	
	document.querySelector( "#outputId" ).innerHTML = htmlCode;
}

//PROCESS: 	This uses a nested loop to create the HTML code 
//			to place the <div>s in the correct row and column
var createGridCode = function ( gridArr ) { 
	console.log("in createGridCode. gridArr = ", gridArr);

	const IMAGE_SIZE	= 30; 	//set up the size of each image
	var gridCode 		= ""; 	//define a string to hold the HTML for the grid

	// loop through each ROW of the array...
	for ( row in gridArr ) {
		// loop through each COLUMN of this array row
		for ( column in gridArr [ row ] ) {		
		
			var backgroundColor = "";	// define an empty string for the background colour
			
			// if the array holds 0, then use a black background
			if ( gridArr[ row ][ column ] == 0 ) {		
				backgroundColor = "black"
			// if the array holds 1, then use a white background
			} else {									
				backgroundColor = "white;"
			}
			
			// calculate the location of this cell
			var topLocation		= ( row * IMAGE_SIZE ) + "px";
			var leftLocation	= ( column * IMAGE_SIZE ) + "px";
			
			// combine the elements to create HTML code. EXAMPLE: 
			// 	
			//	<div style='background-color: black; top: 30px; left: 30px;'></div>
			gridCode = gridCode 
				+ "<div style='background-color: "	+ backgroundColor 	+ "; " 
					+ "top: " 						+ topLocation 		+ "; " 	
					+ "left: " 						+ leftLocation		+ ";'>" 
				+ "</div>"
		}
	}

	return gridCode;	// return the HTML grid code from this function
}

// INIT: initialize the array that holds the grid pattern
// Complex data structures combine arrays and objects 
// This one is an array of arrays -- a two-dimensional array
// In this example, the array holds a bitmap smiley face
var initImageGridArr = function () {
	console.log( 'in initImageGridArr...' );
	
	var imageGridArr	=[	// rows 0-7, columns 0-8
		[0,1,1,1,1, 1,1,1,0], // row 0 = mazeArr [ 0 ]
		[1,0,0,0,0, 0,0,0,1], // row 1 = mazeArr [ 1 ]
		[1,0,1,0,0, 0,1,0,1], // row 2 = mazeArr [ 2 ]
		[1,0,0,0,0, 0,0,0,1], // row 3 = mazeArr [ 3 ]
		[1,0,1,0,0, 0,1,0,1], // row 4 = mazeArr [ 4 ]
		
		[1,0,0,1,1, 1,0,0,1], // row 5 = mazeArr [ 5 ]
		[1,0,0,0,0, 0,0,0,1], // row 6 = mazeArr [ 6 ]
		[0,1,1,1,1, 1,1,1,0]  // row 7 = mazeArr [ 7 ]
	];
	
	return imageGridArr
}

//INPUT EVENT: make the grid with #buttonId is clicked
document.querySelector( '#buttonId' ).onclick = function () {	
	console.log("in mainProcedure...");
	
	var imageGridArr	= initImageGridArr();
	var gridCode		= createGridCode( imageGridArr );
	outputGridCode( gridCode );
}
