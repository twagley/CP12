//PROCESS: this function takes the results of the request and processes them
var processWebsiteData = function ( data, status ) {
	console.log( 'in processWebsiteData...' );
	console.log( '   data=' + data );
	console.log( '   status=' + status );
	
	//IF: this was successful, display the results
	if ( status == 'success' ) {										
		alert( data );
	}
	
	//IF: the transfer was not successful, show an error message
	else {
		console.log( 'WARNING: data downloaded unsuccessfully' );
	}
}


//INPUT: get the message from the web server 
$.get( 
	'https://drapak.ca/cpg/getSunnyMessage.php', 	// URL to contact
	{ message: 42 }, 								// information about the request
	processWebsiteData 								// function to process the results
);	
