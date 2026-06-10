//OUTPUT: display the results inside the output div
var outputList = function ( outputCode ) {
	console.log( 'in outputList. outputCode = ' + outputCode );
	document.getElementById('outputJobsListId').innerHTML = outputCode;
}

//PROCESS: create the HTML code for a list from an array
var createJobsList = function ( jobsArr ) {
	console.log( 'in createJobsList, jobsArr: ', jobsArr );
	
	// initialize the output string and start the list code
	var outputString = "<ul>";
	
	// loop through each index of the word array ( 0 -> length - 1 )
	for ( i in jobsArr ) {
		console.log( 'in jobsArr loop, i, outputString: ' + i + "," + outputString );
		
		//add this array value to the outputString 
		outputString = outputString + "<li>" + jobsArr[ i ] + "</li>";
	}
	
	// end the list code
	outputString = outputString + "</ul>";
	console.log( 'final value of outputString: ' + outputString );
	
	// remember to return the result
	return outputString;
}

//INIT: set up the information inside the jobs array
var initJobsArr = function ( ) {
	console.log( 'in initJobsArr...' );
	//INIT: create an array of IT job most in demand in 2019
	//	from https://www.cio.com/article/3235944/hiring-and-staffing/hiring-the-most-in-demand-tech-jobs-for-2018.html
	//	Sorry about the long line - didn't want to break the link)
	var jobsArr = [
		"Data scientist $121,500",
		"Security professionals (information, data, network, systems) $120,000",
		"Database developer $118,000",
		"DevOps engineer $110,500",
		"Business intelligence analyst $106,000",
		"Cloud systems engineer $103,000",
		"Developer (web, software, mobile) $100,000",
		"Cloud architect $94,500",
		"Network administrators $89,000",
		"Systems administrators $81,750",
		"Full-stack developers $79,250",
		"IoT specialists $71,500",
		"Help desk and desktop support specialists $45,740",

	];
	
	return jobsArr
}

//MAIN
var mainJobsListProcedure = function () {
	console.log( 'in mainJobsListProcedure' );
	
	var jobsArr		= initJobsArr();
	var jobsList	= createJobsList( jobsArr );
	outputList( jobsList );
}

//INPUT EVENT: trigger mainJobsListProcedure when #jobsListButtonId is clicked
document.querySelector( '#jobsListButtonId' ).onclick = mainJobsListProcedure;