// animationObj - displays and animates an image
//
// properties:	
//		.id
//		.src
//		.width
//
// methods:
//		.outputImage()
//		.animateUp()

var animationObj = {
	id:			"animateId",
	src:		"MsPacMan.png",
	width:		"100px",
	DISTANCE:	24,
	DURATION:	100
};

//OUTPUT: method to display the image and prepare for animation
animationObj.outputImage = function() {
	console.log( 'in animationObj.outputImage...' );
	
	document.querySelector( "#" + this.id ).src				= this.src;
		
	document.querySelector( "#" + this.id ).style.width		= this.width;
		
	document.querySelector( "#" + this.id ).style.position	= "relative"; 
};
	
//OUTPUT: method to animate up
animationObj.animateUp = function() {
	console.log( 'in animationObj.animateUp...' );
	
	$( "#" + this.id ).animate(
		{ top: 		'-=' + this.DISTANCE + 'px' }, 
		{ duration:	this.DURATION }
	);
};