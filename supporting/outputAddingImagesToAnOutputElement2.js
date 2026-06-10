

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
		// create a new empty image element
		var newImage 			= document.createElement("img");

		// add properties to this new empty image element
		newImage.src 			= this.src;
		newImage.style.position	= 'absolute';
		newImage.style.top 		= this.top + 'px';
		newImage.style.left		= this.left + 'px';
			
		//put the resulting element inside a div called #outputID 
		document.getElementById('outputID').appendChild( newImage );
	}
}