<?php
header("Access-Control-Allow-Origin: *");
//this generates a miserable message for the user
//
// created:	20. November 2018	- allowing cross-platform requests

//INIT: make sure that everything is utf-8
header('Content-Type: text/html; charset=utf-8');
//mb_internal_encoding("utf8mb4");


//INIT: find out which student we are retrieving transcripts for 
$message	= $_POST["message"];
if ($message == '') {
	$message	= $_GET["message"];
}

//INIT: set up the array of possible messages
$messageArr = array(
	"Nice to see you!", 
	"You're the best!", 
	"Your hair is awesome!", 
	"You are great - inside AND out!",
	"Your family is grateful for you.", 
	
	"Drapak is glad you took the class!", 
	"You are as tough as Sam Legere in full hockey gear!", 
	"You are as friendly as Cullen O'Connell!", 
	"You are as independent as Zoe!", 
	"You are as creative as Onyeka!",
	
	"You are as helpful as Michael!", 
	"You are as hard working as Layla!", 
);

echo $messageArr[ $message % 12 ];

?>