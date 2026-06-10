// ExampleObj object constructor
// 		properties:
//			exampleObj.exampleProperty1
//			exampleObj.exampleProperty2
// 		methods:
//			exampleObj.exampleMethod()
//
var ExampleObj = function ( exampleValue1, exampleValue2 ) {
	this.exampleProperty1	= exampleValue1;
	this.exampleProperty2	= exampleValue2;
};

// Use .prototype to add methods (functions) to your object constructor
	
ExampleObj.prototype.exampleMethod = function () {
		// function instructions go here
		return this.exampleProperty1 + this.exampleProperty2;
};

// Use new to construct a new version of this object:
var thisObj = new ExampleObj( "Parameter #1", "Parameter #2" );