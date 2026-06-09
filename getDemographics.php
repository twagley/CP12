<?php
header("Access-Control-Allow-Origin: *");
//this gets all the demographic entries for a particular student
//
// created:	10. July 2018	- drapak
// updated:	20. November 2018	- allowing cross-platform requests

//INIT: set up the mySQL database info
$servername	= "mysql.drapak.ca";
$username 	= "chscoursesuser";
$password 	= "!b3h0a4@!sok4t0@";
$dbname 	= "student_info";

//INIT: make sure that everything is utf-8
header('Content-Type: text/html; charset=utf-8');
mb_internal_encoding("utf8mb4");

//INIT: set the debug flag
$debug 		= false;

//INIT: find out which student we are retrieving transcripts for 
$token	= $_POST["token"];
if ($token == '') {
	$token	= $_GET["token"];
}
$email	= $_POST["email"];
if ($email == '') {
	$email	= $_GET["email"];
}

// Create connection
try {
    $conn 	= new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
	$sql 	= 	"SELECT 
					*,
					FLOOR( DATEDIFF( CURDATE(), birth )/365.25 ) AS years_old, 
					ROUND( MOD( DATEDIFF( CURDATE(), birth ), 365.25 ) ) AS days_old
				FROM 
					`demographics` 
				WHERE
					email = ".
					$conn->quote( $email )."
				AND token = ".
					$conn->quote( $token )."
				AND token IS NOT NULL";
				
	//IF: we are debugging, print the sql query
	if ( $debug ) {
		//print $sql."\n";
	}
	
	//INIT: set up the array of row to store the results
	$SQLrows = array();
	
	//LOOP: through each row of the results to store in the array
    foreach ($conn->query($sql) as $row) {
		$SQLrows[]	=$row;
    }

	//print sizeOf( $SQLrows );
	print json_encode( $SQLrows[0] );
	
	/*
	switch (json_last_error()) {
        case JSON_ERROR_NONE:
            print ' - No errors';
        break;
        case JSON_ERROR_DEPTH:
            print ' - Maximum stack depth exceeded';
        break;
        case JSON_ERROR_STATE_MISMATCH:
            print ' - Underflow or the modes mismatch';
        break;
        case JSON_ERROR_CTRL_CHAR:
            print ' - Unexpected control character found';
        break;
        case JSON_ERROR_SYNTAX:
            print ' - Syntax error, malformed JSON';
        break;
        case JSON_ERROR_UTF8:
            print ' - Malformed UTF-8 characters, possibly incorrectly encoded';
        break;
        default:
            print ' - Unknown error';
        break;
    }
	*/
	
	// check if there are any results
	// if so, slurp them in and then output them as JSON
}
catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
$conn = null;
?>