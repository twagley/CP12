//OUTPUT: this puts the table information inside the table labelled "tableId"
function outputMazeCode ( htmlCode ) {  
	console.log( "in outputMazeCode. mazeCode=" + htmlCode );
	
	document.querySelector( "#outputId" ).innerHTML	= htmlCode;
}

//PROCESS: This uses a nested loop through each elements of the mazeArr 
function createMazeCode( mazeArr ) { 
	console.log("in createMazeCode. mazeArr = ", mazeArr);

	var mazeCode = "";

	//LOOP: through each ROW of the two-dimensional array...
	for (row in mazeArr) {
		console.log( 'row=' + row );
		var rowArr = mazeArr[ row ];
		
		//LOOP: through each COLUMN of this row
		for (column in mazeArr[ row ]) {
			var imgCode ="";
			
			//IF: this row and column of the mazeArr contains a 0, then use a stone image
			if ( mazeArr[ row ][ column ] == 0 ) {
				imgCode = "https://www.kasandbox.org/programming-images/cute/StoneBlock.png";

			//ELSE: this row and column of the mazeArr contains a 0, then use a grass image
			} else {
				imgCode = "https://www.kasandbox.org/programming-images/cute/GrassBlock.png";
			}

		//create the image code
		mazeCode = mazeCode
			+ "<img "
			+ " src='"
			+ imgCode
			+ "'"
			+ " style='top: "
			+ row * 25
			+ "px; left: "
			+ column * 30
			+ "px;' "
			+ ">"
		}
	}
	return mazeCode;
}

// INIT: initialize the array that holds the map pattern
// in mazeCell, 0=wall, 1=corridor
// SMALL version
var initSmallMaze = function () {
	console.log( 'in initSmallMaze...' );
	
	var mazeArr	= [	// rows 0-3, columns 0-3
		[0,1,0,0], // row 0
		[0,1,1,0], // row 1
		[0,0,1,0], // row 2
		[0,0,1,0]  // row 3
	];

	return mazeArr
}

// INIT: initialize the array that holds the map pattern
// in mazeCell, 0=wall, 1=corridor
// MEDIUM version
var initMediumMaze = function () {
	console.log( 'in initMediumMaze...' );
	
	var mazeArr	= [	// rows 0-20, columns 0-20
		[0,1,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0], // row 0
		[0,1,1,1,0, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 0], // row 1
		[0,1,0,1,0, 1,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1, 0], // row 2
		[0,1,0,1,0, 1,0,1,0,1, 1,1,1,1,1, 1,1,1,1,1, 0], // row 3
		[0,1,0,1,0, 1,0,1,0,1, 0,0,0,0,0, 1,0,1,0,1, 0], // row 4
		
		[0,1,0,1,1, 1,0,1,0,1, 0,1,1,1,0, 1,0,1,0,1, 0], // row 5
		[0,1,0,0,0, 0,0,1,0,1, 0,0,0,1,0, 1,0,0,0,1, 0], // row 6
		[0,1,0,1,1, 1,1,1,0,1, 1,1,0,1,0, 1,1,1,0,1, 0], // row 7
		[0,1,0,0,0, 1,0,1,0,0, 0,1,0,1,0, 0,0,1,0,1, 0], // row 8
		[0,1,1,1,0, 1,0,1,1,1, 1,1,0,1,0, 1,1,1,0,1, 0], // row 9
		
		[0,0,0,1,0, 1,0,0,0,0, 0,0,0,1,0, 1,0,0,0,1, 0], // row 10
		[0,1,1,1,0, 1,0,1,1,1, 1,1,1,1,0, 1,0,1,1,1, 0], // row 11
		[0,1,0,0,0, 1,0,0,0,1, 0,0,0,0,0, 1,0,1,0,1, 0], // row 12
		[0,1,0,1,1, 1,1,1,1,1, 0,1,1,1,1, 1,0,1,0,1, 0], // row 13
		[0,1,0,1,0, 0,0,0,0,0, 0,1,0,0,0, 1,0,1,0,0, 0], // row 14
		
		[0,1,0,1,0, 1,0,0,0,1, 0,1,1,1,0, 1,0,1,1,1, 0], // row 15
		[0,1,0,0,0, 1,0,0,0,1, 0,1,0,1,0, 0,0,0,0,1, 0], // row 16
		[0,1,1,1,1, 1,0,1,1,1, 0,1,0,1,1, 1,0,1,1,1, 0], // row 17
		[0,0,0,0,0, 0,0,1,0,0, 0,0,0,0,0, 1,0,1,0,0, 0], // row 18
		[0,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,0,1,1,1, 0], // row 19
		
		[0,0,0,1,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0] // row 20
	];

	return mazeArr
}

// INIT: initialize the array that holds the map pattern
// in mazeCell, 0=wall, 1=corridor
// LARGE version
var initLargeMaze = function () {
	console.log( 'in initLargeMaze...' );
	
	var mazeArr	= [	
	// 	1=hallway (black), 0=wall (blue)    rows: 0-30, columns: 0-27
	//	index of column numbers to help with data entry:
	//	[0,1,2,3,4, 5,6,7,8,9, 0,1,2,3,4, 5,6,7,8,9, 0,1,2,3,4, 5,6,7],
		[0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0], // row 0
		[1,1,1,1,1, 1,1,0,0,1, 1,1,1,1,1, 1,1,1,1,0, 0,1,1,1,1, 1,1,1], // row 1
		[0,0,0,0,0, 0,1,0,0,1, 0,0,0,0,0, 0,0,0,1,0, 0,1,0,0,0, 0,0,0], // row 2
		[0,0,0,0,0, 0,1,0,0,1, 0,0,0,0,0, 0,0,0,1,0, 0,1,0,0,0, 0,0,0], // row 3
		[0,1,1,1,1, 1,1,1,1,1, 1,1,1,0,0, 1,1,1,1,1, 1,1,1,1,1, 1,1,0], // row 4
		
		[0,1,0,0,0, 0,0,0,0,1, 0,0,1,0,0, 1,0,0,1,0, 0,0,0,0,0, 0,1,0], // row 5
		[0,1,0,0,0, 0,0,0,0,1, 0,0,1,0,0, 1,0,0,1,0, 0,0,0,0,0, 0,1,0], // row 6
		[0,1,0,0,1, 1,1,1,1,1, 0,0,1,0,0, 1,0,0,1,1, 1,1,1,1,0, 0,1,0], // row 7
		[0,1,0,0,1, 0,0,0,0,1, 0,0,1,1,1, 1,0,0,1,0, 0,0,0,1,0, 0,1,0], // row 8
		[0,1,0,0,1, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,1,0, 0,0,0,1,0, 0,1,0], // row 9
		
		[0,1,1,1,1, 1,1,0,0,1, 0,0,0,0,0, 0,0,0,1,0, 0,1,1,1,1, 1,1,0], // row 10
		[0,0,0,0,0, 0,1,0,0,1, 1,1,1,1,1, 1,1,1,1,0, 0,1,0,0,0, 0,0,0], // row 11
		[0,0,0,0,0, 0,1,0,0,1, 0,0,0,0,0, 0,0,0,1,0, 0,1,0,0,0, 0,0,0], // row 12
		[0,1,1,1,1, 1,1,1,1,1, 0,0,0,0,0, 0,0,0,1,1, 1,1,1,1,1, 1,1,0], // row 13
		[0,1,0,0,0, 0,1,0,0,1, 0,0,0,0,0, 0,0,0,1,0, 0,1,0,0,0, 0,1,0], // row 14
		
		[0,1,0,0,0, 0,1,0,0,1, 0,0,0,0,0, 0,0,0,1,0, 0,1,0,0,0, 0,1,0], // row 15
		[0,1,1,1,0, 0,1,0,0,1, 0,0,0,0,0, 0,0,0,1,0, 0,1,0,0,1, 1,1,0], // row 16
		[0,0,0,1,0, 0,1,0,0,1, 1,1,1,1,1, 1,1,1,1,0, 0,1,0,0,1, 0,0,0], // row 17
		[0,0,0,1,0, 0,1,0,0,0, 0,1,0,0,0, 0,1,0,0,0, 0,1,0,0,1, 0,0,0], // row 18
		[0,0,0,1,0, 0,1,0,0,0, 0,1,0,0,0, 0,1,0,0,0, 0,1,0,0,1, 0,0,0], // row 19
		
		[0,0,0,1,1, 1,1,1,1,1, 1,1,0,0,0, 0,1,1,1,1, 1,1,1,1,1, 0,0,0], // row 20
		[0,0,0,1,0, 0,0,0,0,0, 0,1,0,0,0, 0,1,0,0,0, 0,0,0,0,1, 0,0,0], // row 21
		[0,0,0,1,0, 0,0,0,0,0, 0,1,0,0,0, 0,1,0,0,0, 0,0,0,0,1, 0,0,0], // row 22
		[1,1,1,1,1, 1,1,0,0,1, 1,1,1,1,1, 1,1,1,1,0, 0,0,1,1,1, 1,1,1], // row 23
		[0,0,0,1,0, 0,1,0,0,1, 0,0,0,0,0, 0,0,0,1,0, 0,0,1,0,1, 0,0,0], // row 24
		
		[0,0,0,1,0, 0,1,0,0,1, 0,0,0,0,0, 0,0,0,1,0, 0,0,1,0,1, 0,0,0], // row 25
		[0,1,1,1,0, 0,1,1,1,1, 1,1,1,0,0, 1,1,1,1,1, 1,1,1,0,1, 1,1,0], // row 26
		[0,1,0,0,0, 0,1,0,0,0, 0,0,1,0,0, 1,0,0,0,0, 0,0,1,0,0, 0,1,0], // row 27
		[0,1,0,0,0, 0,1,0,0,0, 0,0,1,0,0, 1,0,0,0,0, 0,0,1,0,0, 0,1,0], // row 28
		[0,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,0], // row 29
		
		[0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0]  // row 30
	];

	return mazeArr
}

//INPUT-EVENT: create a small maze when #smallMazeButtonId is clicked
document.querySelector( '#smallMazeButtonId' ).onclick = function () {
	console.log( 'clicked on #smallMazeButtonId...' );
	
	var mazeArr 	= initSmallMaze(); 
	var mazeCode	= createMazeCode( mazeArr );
	outputMazeCode( mazeCode );
}

//INPUT-EVENT: create a medium maze when #mediumMazeButtonId is clicked
document.querySelector( '#mediumMazeButtonId' ).onclick = function () {
	console.log( 'clicked on #mediumMazeButtonId...' );
	
	var mazeArr 	= initMediumMaze(); 
	var mazeCode	= createMazeCode( mazeArr );
	outputMazeCode( mazeCode );
}

//INPUT-EVENT: create a large maze when #largeMazeButtonId is clicked
document.querySelector( '#largeMazeButtonId' ).onclick = function () {
	console.log( 'clicked on #largeMazeButtonId...' );
	
	var mazeArr 	= initLargeMaze(); 
	var mazeCode	= createMazeCode( mazeArr );
	outputMazeCode( mazeCode );
}