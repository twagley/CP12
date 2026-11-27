var exampleObj = {
	//INIT: set up the image variables
	// top coordinate of the image
	this.top:	35,
	
	// left coordinate of the image
	this.left: 	65,	

	// source link to image file
	this.src = "http://drapak.ca/cpg/img/link-up.png",

	//combine the data all together into an image element similar to:
	// <img 
	//		src='http://drapak.ca/cpg/img/link-up.png'
	//		style='position: absolute; top: 35px; left: 65px;' />
	createAndOutputImage: function () {
		//create an empty variable to hold the HTML code of the image
		var outputHTML = "";

		outputHTML 
			= "<img src='"
			+ this.src
			+ "' style='position: absolute; top: "
			+ this.top
			+ "px; left: "
			+ this.left
			+ "px;' />";
	
		//put the resulting HTML code inside a div called #outputID
		document.getElementById('outputID').innerHTML = outputHTML;
	}
}