//
// change log:	16. September 2018	- moved to separate file						- Drapak
//				17. September 2018	- adding evaluation criteria to the projects	- Drapak
//									- added the reference page obj					- Drapak
//				18. September 2018 	- added more code examples 						- Drapak
//				20. September 2018	- fixed some searching and removed some code examples
//				23.&24. September	- fixed regexes and clarified descriptions		- Drapak
//									- added INPUT_OBJ and OUTPUT_OBJ				- Drapak
//									- added 2.01, 2.02, 2.03						- Drapak
//				27. September 2018	- fixed colour and opacity						- Drapak
//				30. September 2018	- added criteria codes							- Drapak
//				9. October 2018		- added 2.05-7 assignments						- Drapak
//				10. October 2018	- added 2.08									- Drapak
//				12. October 2018	- added 2.09									- Drapak
//				13. October 2018	- split into criteria and assignment fileSize	- Drapak
//				6. Jan 2019			- fixed 3.09 and added 4.02						- Drapak
//				29. January 2019	- change loopComment							- Drapak
//				2. February 2019	- fixed rounding search 						- Drapak
//				Sept 6 2026			- Changed drapak.ca/cpg links to twagley.github.io/CP12	- Wagley
//				Se[t 6 2026 - Broked! Reverted changes - Wagley



//INIT: this is the object for all of the reference page info
const REFERENCE_OBJ = {
	
	//HTML reference pages
	HTMLBasics: {
		pageURL:	"http://twagley.github.io/CP12/htmlBasic.shtml",
		pageName:	"//HTML: Basics",
	},
	HTMLFilenameHelp: {
		pageURL:	"http://twagley.github.io/CP12/htmlBasic.shtml",
		pageName:	"//HTML: Basics",
	},
	HTMLContainers: {
		pageURL:	"http://twagley.github.io/CP12/cssStyleContainers.shtml",
		pageName:	"//HTML: Style containers — &lt;div> and &lt;span>",
	},
	HTMLLists: {
		pageURL:	"http://twagley.github.io/CP12/htmlLists.shtml",
		pageName:	"//HTML: Lists",
	},
	HTMLTables: {
		pageURL:	"http://twagley.github.io/CP12/htmlTables.shtml",
		pageName:	"//HTML: Tables",
	},
	HTMLunicode: {
		pageURL:	"http://twagley.github.io/CP12/htmlConvertUnicode.shtml",
		pageName:	"//HTML: Converting to Unicode characters",
	},
	
	//CSS references
	CSSTextFormatting: {
		pageURL:	"http://twagley.github.io/CP12/cssTextFormatting.shtml",
		pageName:	"//CSS: Text formatting",
	},
	CSSIds:	{
		pageURL:	"http://twagley.github.io/CP12/cssUsingIDs.shtml",
		pageName:	"//CSS: Applying styles using Ids",
	},
	CSSPositioning: {
		pageURL:	"http://twagley.github.io/CP12/cssPositioning.shtml",
		pageName:	"//CSS: Positioning",
	}, 
	CSSAnimation: {
		pageURL:	"http://twagley.github.io/CP12/cssAnimation.shtml",
		pageName:	"//CSS: Animation",
	},
	CSSSelectors: {
		pageURL:	"http://twagley.github.io/CP12/cssSelectors.shtml",
		pageName:	"//CSS: Selectors: tags, Ids, and classes",
	},
	
	//STYLE references
	styleCapitalizingTags: {
		pageURL:	"http://twagley.github.io/CP12/styleTags.shtml",
		pageName:	"//STYLE: Capitalizing tags",
	},
	styleIndents: {
		pageURL:	"http://twagley.github.io/CP12/styleTabs.shtml",
		pageName:	"//STYLE: Formatting code with tabs",
	},
	styleLongLines: {
		pageURL:	"http://twagley.github.io/CP12/styleAvoidLongLines.shtml",
		pageName:	"//STYLE: Avoid long lines",
	},
	styleCSSInHead: {
		pageURL:	"http://twagley.github.io/CP12/styleKeepCSSInTheHead.shtml",
		pageName:	"//STYLE: Keep your CSS inside your &lt;head>",
	},
	styleSpaceOutMath: {
		pageURL:	"http://twagley.github.io/CP12/styleMath.shtml",
		pageName:	"//STYLE: Space out mathematical expressions",
	},
	styleUseDescriptiveVariables: {
		pageURL:	"http://twagley.github.io/CP12/styleUseDescriptiveVariables.shtml",
		pageName:	"//STYLE: Use descriptive variable names",
	},
	style: {
		pageURL:	"",
		pageName:	"",
	},
	
	//INIT references

	initArrays: {
		pageURL:	"http://twagley.github.io/CP12/initArrays.shtml",
		pageName:	"//INIT: Creating arrays",
	},
	initLibraries: {
		pageURL:	"http://twagley.github.io/CP12/initUsingLibraries.shtml",
		pageName:	"//INIT: Using libraries",
	},
	initObjects: {
		pageURL:	"http://twagley.github.io/CP12/initObjects.shtml",
		pageName:	"//INIT: Using objects",
	},		
	initObjectsWithMethods: {
		pageURL:	"http://twagley.github.io/CP12/initObjectsWithMethods.shtml",
		pageName:	"//INIT: Creating objects with methods",
	},
	initTwoDimensionalArrays: {
		pageURL:	"http://twagley.github.io/CP12/initTwoDimensionalArrays.shtml",
		pageName:	"//INIT: Creating two dimensional arrays",
	},
	initVar: {
		pageURL:	"http://twagley.github.io/CP12/initVariableAssignment.shtml",
		pageName:	"//INIT: Using variables",
	},
	initObjectConstructors: {
		pageURL:	"http://twagley.github.io/CP12/initObjectConstructors.shtml",
		pageName:	"//INIT: Creating objects using object constructors",
	},
	
	//INPUT references
	
	inputButtons: {
		pageURL:	"http://twagley.github.io/CP12/inputButtons.shtml",
		pageName:	"//INPUT: Buttons",
	},
	inputElementPositions: {
		pageURL:	"http://twagley.github.io/CP12/inputElementPositions.shtml",
		pageName:	"//INPUT: Read element positions",
	},	
	inputMouseovers: {
		pageURL:	"http://twagley.github.io/CP12/inputDetectingMouseovers.shtml",
		pageName:	"//INPUT: Detecting mouseovers",
	},
	inputReadingKeypresses: {
		pageURL:	"http://twagley.github.io/CP12/inputReadingKeypresses.shtml",
		pageName:	"//INPUT: Reading keypresses",
	},
	inputText: {
		pageURL:	"http://twagley.github.io/CP12/inputText.shtml",
		pageName:	"//INPUT: Text input",
	},
	inputGet: {
		pageURL:	"http://twagley.github.io/CP12/inputGet.shtml",
		pageName:	"//INPUT: Getting information from websites",
	},
	inputMouseMovementAndPosition: {
		pageURL:	"http://twagley.github.io/CP12/inputMouseMovementAndPosition.shtml",
		pageName:	"//INPUT: Read mouse movements and position",
	},
	inputScreenHeightAndWidth: {
		pageURL:	"http://twagley.github.io/CP12/inputScreenHeightAndWidth.shtml",
		pageName:	"//INPUT: Read the height and width of the screen",
	},
	input: {
		pageURL:	"",
		pageName:	"",
	},
	
	//PROCESS references
	processArrays: {
		pageURL:	"http://twagley.github.io/CP12/processUsingArrays.shtml",
		pageName:	"//PROCESS: Using arrays",
	},	
	processArraysOfObjectsToCreateTable: {
		pageURL:	"http://twagley.github.io/CP12/processUsingArraysOfObjectsToCreateATable.shtml",
		pageName:	"//PROCESS: Using arrays of objects to create a table",
	},	
	processBasicMath: {
		pageURL:	"http://twagley.github.io/CP12/processBasicMath.shtml",
		pageName:	"//PROCESS: Basic math",
	},
	processForLoops: {
		pageURL:	"http://twagley.github.io/CP12/processForLoops.shtml",
		pageName:	"//PROCESS: for loops",
	},
	processFunctionalProgramming: {
		pageURL:	"http://twagley.github.io/CP12/styleFunctionPipelines.shtml",
		pageName:	"//STYLE: Using functional programming",
	},
	processIfElseConditionals: {
		pageURL:	"http://twagley.github.io/CP12/processIfElseConditionals.shtml",
		pageName:	"//PROCESS: if...else conditionals",
	},
	processJSON: {
		pageURL:	"http://twagley.github.io/CP12/processJSON.shtml",
		pageName:	"//PROCESS: JSON — Bundling data for transfer",
	},	
	processRandomnessAndRounding: {
		pageURL:	"http://twagley.github.io/CP12/processRandomnessAndRounding.shtml",
		pageName:	"//PROCESS: Randomness and rounding",
	},
	processTimers: {
		pageURL:	"http://twagley.github.io/CP12/processTimeoutAndIntervals.shtml",
		pageName:	"//PROCESS: Timeout and intervals",
	},		
	processUsingTwoDimensionalArrays: {
		pageURL:	"http://twagley.github.io/CP12/processUsingTwoDimensionalArrays.shtml",
		pageName:	"//PROCESS: Using two dimensional arrays and nested loops",
	},		

	
	//OUTPUT references
	outputAlertInnerHtmlAndConsoleLog: {
		pageURL:	"http://twagley.github.io/CP12/outputAlertInnerHtmlAndConsoleLog.shtml",
		pageName:	"//OUTPUT: alert(), .innerHTML, and console.log()",
	},	
	outputChangeTextStyles: {
		pageURL:	"http://twagley.github.io/CP12/outputChangeTextStyles.shtml",
		pageName:	"//OUTPUT: Changing text styles",
	},	
	outputChangeElementPosition: {
		pageURL:	"http://twagley.github.io/CP12/outputChangePosition.shtml",
		pageName:	"//OUTPUT: Changing an element's position",
	},

	outputChangeAnImage: {
		pageURL:	"http://twagley.github.io/CP12/outputChangeAnImage.shtml",
		pageName:	"//OUTPUT: Changing an image",
	},	
	
	outputChangePosition: {
		pageURL:	"http://twagley.github.io/CP12/outputChangePosition.shtml",
		pageName:	"//OUTPUT: Changing an element's position",
	},
	outputAnimateJQuery: {
		pageURL:	"http://twagley.github.io/CP12/outputAnimatingMotion.shtml",
		pageName:	"//OUTPUT: Animating motion",
	},
	outputOtherJQuery: {
		pageURL:	"http://twagley.github.io/CP12/outputAnimatingCSSProperties.shtml",
		pageName:	"//OUTPUT: Animating other CSS properties with jQuery",
	},
	outputAddingElements: {
		pageURL:	"http://twagley.github.io/CP12/outputAddingElements.shtml",
		pageName:	"//OUTPUT: Adding elements directly to an output HTML element",
	},	
	outputAnimationCallbacks: {
		pageURL:	"http://twagley.github.io/CP12/outputAnimationCallbacks.shtml",
		pageName:	"//OUTPUT: Animation callbacks",
	},	
	outputAddingAndPlayingAudio: {
		pageURL:	"http://twagley.github.io/CP12/outputAddingAndPlayingAudio.shtml",
		pageName:	"//OUTPUT: Adding and playing audio",
	},	
	output: {
		pageURL:	"",
		pageName:	"",
	},	
	none: {
		pageURL:	"https://twagley.github.io/CP12/",
		pageName:	"There is no reference page for this skill",
	},	
	
	
};


//INIT: this is the object that contains all the options 
//		for htmlCSSArr evaluation criteria

const HTML_CSS_OBJ = {
	//HTML PROPERTIES IN ALPHABETICAL ORDER
	audio: {
		criteria:	"audio",
		question: 	"Have you added an audio link?",
		example:	"<audio controls>\n" +
					'	<source src="horse.mp3" type="audio/mpeg">\n' +
					"</audio>",
		reference:	REFERENCE_OBJ.outputAddingAndPlayingAudio,
		begin:		"<audio",
		end:		"</button>"
	},
	approvedHTML: {
		criteria:	"apprvdHTML",
		question: 	"Have you added additional HTML code with the approval of your teacher?",
		example:	"//HTML approved by...",
		reference:	REFERENCE_OBJ.none,
		begin:		"//HTML approved by",
		//end:		""
	},
	button: {
		criteria:	"button",
		question: 	"Have you created a button?",
		example:	"<button id='buttonId'>the text on the button</button>",
		reference:	REFERENCE_OBJ.inputButtons,
		begin:		"<button",
		end:		"</button>"
	},
	canvas: {
		criteria:	"canvas",
		question: 	"Have you used an HTML canvas?",
		example:	'<canvas id="myCanvas" width="200" height="100"></canvas>',
		reference:	REFERENCE_OBJ.none,
		begin:		"<canvas",
		end:		"</canvas>"
	},
	div: {
		criteria:	"div",
		question: 	"Have you used a &lt;div> container?",
		example:	"<div id='exampleId'>\n" +
					"	<h2>The purpose of divs</h2>\n" +
					"	<p>\n" +
					"		Divs are used to apply ids to larger blocks of code\n" +
					"	</p>\n" +
					"</div>",
		reference:	REFERENCE_OBJ.HTMLContainers,
		begin:		"<div",
		end:		"</div>"
	},
	heading: {
		criteria:	"heading",
		question: 	"Have you used a heading?",
		example:	"<h1>This is a level one heading.</h1>",
		reference:	REFERENCE_OBJ.HTMLBasics,
		begin:		"<h1|<h2|<h3|<h4|<h5|<h6",
		end:		"</h1>|</h2>|</h3>|</h4>|</h5>|</h6>"
	},
	lineBreak: {
		criteria:	"lineBreak",
		question: 	"Have you used a line break to format your HTML?",
		example:	"<p>This text is broken<br>into two lines</p>",
		reference:	REFERENCE_OBJ.HTMLTables,
		begin:		"<br",
	},
	link: {
		criteria:	"link",
		question: 	"Have you used a link to another page?",
		example:	"<a href='https://cbc.ca'>Link to cbc.</a>",
		reference:	REFERENCE_OBJ.HTMLBasics,
		begin:		"<a.*href",
		end:		"</a>"
	},
	image: {
		criteria:	"image",
		question: 	"Have you added an image?",
		example:	"<img src='http://https://www.kasandbox.org/programming-images/cute/"
					+ "BrownBlock.png'>",
		reference:	REFERENCE_OBJ.HTMLBasics,
		begin:		"<img",
	},
	inputText: {
		criteria:	"inputLine",
		question: 	"Have you added an input line?",
		example:	"<input id='inputId' type='text' value='default text'>",
		reference:	REFERENCE_OBJ.inputText,
		begin:		"<input",
	},
	listItem: {
		criteria:	"item",
		question: 	"Have you included list items?",
		example:	"<li>This is a single list item.</li>",
		reference:	REFERENCE_OBJ.HTMLLists,
		begin:		"<li",
		end:		"</li"
	},
	listItemParagraph: {
		criteria:	"liOrP",
		question: 	"Have you made a paragraph or a list?",
		example:	"<p>This is a very short paragraph.</p>\n\n" + 
					"<li>This is a list item</li>",
		reference:	REFERENCE_OBJ.HTMLLists,
		begin:		"<p|<li",
		end:		"</p|</li"
	},
	paragraph: {
		criteria:	"p",
		question: 	"Have you made a paragraph?",
		example:	"<p>This is a very short paragraph.</p>",
		reference:	REFERENCE_OBJ.HTMLBasics,
		begin:		"<p",
		end:		"</p>"
	},
	span: {
		criteria:	"span",
		question: 	"Have you used a &lt;span> container?",
		example:	"<p>\n" + 
					"	Spans insert styles <span id='emphasisId'>inside</span>\n" +
					"	other HTML elements\n" + 
					"</p>",
		reference:	REFERENCE_OBJ.HTMLContainers,
		begin:		"<span",
		end:		"</span>"
	},
	spanDiv: {
		criteria:	"spanOrDiv",
		question: 	"Have you used a &lt;span> or &lt;div> container?",
		example:	"<p>\n" + 
					"	Spans insert styles <span id='emphasisId'>inside</span>\n" +
					"	other HTML elements\n" + 
					"</p>\n\n" +
					"<div id='exampleId'>\n" +
					"	<h2>The purpose of divs</h2>\n" +
					"	<p>\n" +
					"		Divs are used to apply ids to larger blocks of code\n" +
					"	</p>\n" +
					"</div>",
		reference:	REFERENCE_OBJ.HTMLContainers,
		begin:		"<span|<div",
		end:		"</span>|</div>"
	},
	strong: {
		criteria:	"strong",
		question: 	"Have you made some text appear strong?",
		example:	"<p><strong>Strong text</strong> shows up bold in the browser.</p>",
		reference:	REFERENCE_OBJ.HTMLBasics,
		begin:		"<strong",
		end:		"</strong>"
	},
	strongOrEm: {
		criteria:	"strongOrEm",
		question: 	"Have you made some text appear strong or emphasized?",
		example:	"<p>\n" +
					"	<strong>Strong text</strong> shows up bold in the browser.<br>\n" +
					"	<em>Emphasized text</em> shows up italic in the browser.\n" +
					"</p>",
		reference:	REFERENCE_OBJ.HTMLBasics,
		begin:		"<strong",
		end:		"</strong>"
	},
	svg: {
		criteria:	"svg",
		question: 	"Have you included your own SVG code?",
		example:	'<svg width="100" height="100">\n' +
					'	<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />\n' +
					"</svg>",
		reference:	REFERENCE_OBJ.none,
		begin:		"<svg",
		end:		"</svg>"
	},
	table: {
		criteria:	"table",
		question: 	"Have you made a table?",
		example:	"<table><!-- the table info goes inside here --></table>",
		reference:	REFERENCE_OBJ.HTMLTables,
		begin:		"<table",
		end:		"</table>"
	},

	
	tableBody: {
		criteria:	"tbody",
		question: 	"Have you included a table body?",
		example:	"<tbody><!-- the table body contains the data cells --></tbody>",
		reference:	REFERENCE_OBJ.HTMLTables,
		begin:		"<tbody",
		end:		"</tbody>"
	},
	tableData: {
		criteria:	"td",
		question: 	"Have you included a table data cell?",
		example:	"<td>Table data cells store organized information.</td>",
		reference:	REFERENCE_OBJ.HTMLTables,
		begin:		"<td",
		end:		"</td>"
	},
	tableHead: {
		criteria:	"thead",
		question: 	"Have you included a table head?",
		reference:	REFERENCE_OBJ.HTMLTables,
		example:	"<thead><!-- the table head often rows a row of header cells --></thead>",
		begin:		"<thead",
		end:		"</thead>"
	},
	tableHeader: {
		criteria:	"th",
		question: 	"Have you included a table header cell?",
		example:	"<th>Table header cells are often used for categories</th>",
		reference:	REFERENCE_OBJ.HTMLTables,
		begin:		"<th",
		end:		"</th>"
	},
	tableRow: {
		criteria:	"tr",
		question: 	"Have you included a table row?",
		example:	"<tr><!-- table cells go inside here --></tr>",
		reference:	REFERENCE_OBJ.HTMLTables,
		begin:		"<tr",
		end:		"</tr>"
	},
	textarea: {
		criteria:	"textarea",
		question: 	"Have you included a text area?",
		example:	"<textarea id='textareaId'>default text</textarea>",
		reference:	REFERENCE_OBJ.inputText,
		begin:		"<textarea",
		end:		"</textarea>"
	},
	unicode: {
		criteria:	"unicode",
		question: 	"Have you coded a unicode symbol?",
		example:	"&amp;#72;",
		reference:	REFERENCE_OBJ.HTMLunicode,
		begin:		"[&][#]",
	},

	unorderedOrderedList: {
		criteria:	"olOrUl",
		question: 	"Have you included an ordered or unordered list?",
		example:	"<ol><!-- ordered list --></ol>\n" +
					"<!-- OR -->\n" +
					"<ul><!-- unordered list </ul>",
		reference:	REFERENCE_OBJ.HTMLLists,
		begin:		"<ul|<ol",
		end:		"</ul>|</ol>"
	},

	//
	//CSS PROPERTIES IN ALPHABETICAL ORDER
	//
	animationNameCSS: {
		criteria:	"anim",
		question: 	"Have you assigned a animation to an id?",
		example:	"@keyframes exampleAnimation { /* bounce up and down */\n" +
					"	0% {\n" +
					"		top: 0px;\n" +
					"	}\n" +
					"	50% {\n" +
					"		top: 100px;\n" +
					"	}\n" +
					"	100% {\n" +
					"		top: 0px;\n" +
					"	}\n" +
					"}\n" +
					"\n" +
					"#exampleId { /* this is the thing you want to animate */\n" +
					"	animation-name: 			exampleAnimation;\n" +
					"	animation-duration:			3s;\n" +
					"	animation-iteration-count:	infinite;\n" +
					"	animation-timing-function:	ease;\n" +
					"}",
		reference:	REFERENCE_OBJ.CSSAnimation,
		begin:		"animation-name:",
		},
	approvedCSS: {
		criteria:	"apprvdCSS",
		question: 	"Have you added additional CSS code with the approval of your teacher?",
		example:	"//CSS approved by...",
		reference:	REFERENCE_OBJ.none,
		begin:		"//CSS approved by|margin-left:|margin-right:",
		//end:		""
	},
	backgroundColorCSS: {
		criteria:	"bgColor",
		question: 	"Have you changed the background colour?",
		example:	"#exampleId {\n" +
					"	background-color:	lightBlue;\n" +
					"}",
		reference:	REFERENCE_OBJ.CSSTextFormatting,
		begin:		"background-color:",
		},
	borderCSS: {
		criteria:	"border",
		question: 	"Have you created a border?",
		example:	"#exampleId {\n" +
					"	border:	1px solid black;\n" +
					"}",
		reference:	REFERENCE_OBJ.CSSTextFormatting,
		begin:		"border:",
	},
	classCSS: {
		criteria:	"class",
		question: 	"Have you used a .class to apply something to more than one element?",
		example:	"<style>\n" +
					"	.exampleClass { /* turns every element with this class pink */\n" +
					"		color:	pink;\n" +
					"	}\n" +
					"</style>\n\n" +
					"<body>\n" +
					"	<h1 class='exampleClass'>A pink heading!</h1>\n" +
					"	<p class='exampleClass'>A pink sentence!</h1>\n" +
					"</body>",
		reference:	REFERENCE_OBJ.CSSSelectors,
		begin:		"class=",
	},
	colorCSS: {
		criteria:	"color",
		question: 	"Have you change the colour of something?",
		example:	"#exampleId {\n" +
					"	color:	orange;\n" +
					"}",
		reference:	REFERENCE_OBJ.CSSTextFormatting,
		begin:		"((?!background-).)*color:",
	},
	colorOpacityCSS: {
		criteria:	"colorOpcty",
		question: 	"Have you changed the colour or opacity of something?",
		example:	"#exampleId {\n" +
					"	color:		orange;\n" +
					"	opacity:	0.7; /* = 30% transparent */\n" +
					"}",
		reference:	REFERENCE_OBJ.CSSAnimation,
		begin:		"opacity:|((?!background-).)*color:",
	},	
	colorOpacityBackgroundCSS: {
		criteria:	"clrOpcyBk",
		question: 	"Have you changed the colour, opacity, " 
					+ "or background colour of something?",
		example:	"#exampleId {\n" +
					"	color:				orange;\n" +
					"	opacity:			0.7; /* = 30% transparent */\n" +
					"	background-color:	lightBlue;\n" +
					"}",
		reference:	REFERENCE_OBJ.CSSAnimation,
		begin:		"opacity:|color:",
	},
	fontFamilyCSS: {
		criteria:	"family",
		question: 	"Have you used a different font?",
		example:	"#exampleId {\n" +
					"	font-family:	'Times New Roman';\n" +
					"}",
		reference:	REFERENCE_OBJ.CSSTextFormatting,
		begin:		"font-family:",
	},	
	displayCSS: {
		criteria:	"display",
		question: 	"Have you set the display property of something?",
		example:	"#exampleId {\n" +
					"	display:	'none';\n" +
					"}",
		reference:	REFERENCE_OBJ.outputChangeTextStyles,
		begin:		"display:",
	},
	displayOrVisibilityCSS: {
		criteria:	"dsplyOrVis",
		question: 	"Have you set the display or visibility property of something?",
		example:	"#exampleId {\n" +
					"	display:	'none';\n" +
					"	visibility:	'hidden';\n" +
					"}",
		reference:	REFERENCE_OBJ.outputChangeTextStyles,
		begin:		"display:|visibility:",
	},
	fontFaceCSS: {
		criteria:	"fontFace",
		question: 	"Have you imported a web font?",
		example:	"@import url(https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300);",
		reference:	REFERENCE_OBJ.CSSTextFormatting,
		begin:		"[@]import.*url",
	},
	fontFamilyStyleWeightCSS: {
		criteria:	"famStlWt",
		question: 	"Have you used a different font, bold, or italic?",
		example:	"#exampleId {\n" +
					"	font-family:	'Times New Roman';\n" +
					"	font-style:		italic;\n" +
					"	font-weight:	bold;\n" +
					"}",
		reference:	REFERENCE_OBJ.CSSTextFormatting,
		begin:		"font-family:|font-style:|font-weight:",
	},
	fontSizeCSS: {
		criteria:	"size",
		question: 	"Have you changed the size of a font?",
		example:	"#exampleId {\n" +
					"	font-size:	18px;\n" +
					"}",
		reference:	REFERENCE_OBJ.CSSTextFormatting,
		begin:		"font-size:",
	},
	fontStyleCSS: {
		criteria:	"style",
		question: 	"Have you made something italic?",
		example:	"#exampleId {\n" +
					"	font-style:	italic;\n" +
					"}",
		reference:	REFERENCE_OBJ.CSSTextFormatting,
		begin:		"font-style:",
	},
	fontWeightCSS: {
		criteria:	"weight",
		question: 	"Have you made something bold?",
		example:	"#exampleId {\n" +
					"	font-weight:	bold;\n" +
					"}",
		reference:	REFERENCE_OBJ.CSSTextFormatting,
		begin:		"font-weight:",
	},
	idCSS: {
		criteria:	"id",
		question: 	"Have you assigned a style by using an #id?",
		example:	"<style>\n" +
					"	#exampleId { /* turns one thing pink */\n" +
					"		color:	pink;\n" +
					"	}\n" +
					"</style>\n" +
					"\n" +
					"<body>\n" +
					"	<h1 id='exampleId'>A pink heading!</h1>\n" +
					"</body>",
		reference:	REFERENCE_OBJ.CSSIds,
		begin:		"<style>",
		end:		"</style>"
	},
	idOrClassCSS: {
		criteria:	"idOrClass",
		question: 	"Have you assigned a style by using an #id or .class?",
		example:	"<style>\n" +
					"	#exampleId { /* turns one thing pink */\n" +
					"		color:	pink;\n" +
					"	}\n" +
					"	.exampleClass { /* turns every element with this class pink */\n" +
					"		color:	red;\n" +
					"	}\n" +
					"</style>\n" +
					"\n" +
					"<body>\n" +
					"	<h1 id='exampleId'>A pink heading!</h1>\n" +
					"	<h1 class='exampleClass'>A red heading!</h1>\n" +
					"	<p class='exampleClass'>A red sentence!</h1>\n" +
					"</body>",
		reference:	REFERENCE_OBJ.CSSIds,
		begin:		"<style>",
		end:		"</style>"
	},		
	keyframesCSS: {
		criteria:	"keyframes",
		question: 	"Have you defined animation keyframes?",
		example:	"@keyframes exampleAnimation { /* bounce up and down */\n" +
					"	0% {\n" +
					"		top: 0px;\n" +
					"	}\n" +
					"	50% {\n" +
					"		top: 100px;\n" +
					"	}\n" +
					"	100% {\n" +
					"		top: 0px;\n" +
					"	}\n" +
					"}\n" +
					"\n" +
					"#exampleId { /* this is the thing you want to animate */\n" +
					"	animation-name: 			exampleAnimation;\n" +
					"	animation-duration:			3s;\n" +
					"	animation-iteration-count:	infinite;\n" +
					"	animation-timing-function:	ease;\n" +
					"}",
		reference:	REFERENCE_OBJ.CSSAnimation,
		begin:		"@keyframes",
	},
	leftCSS: {
		criteria:	"left",
		question: 	"Have you set the left coordinate of something?",
		example:	"#exampleId {\n" +
					"	position:	absolute;\n" +
					"	left:		100px;\n" +
					"}",
		reference:	REFERENCE_OBJ.CSSPositioning,
		begin:		"left:",
	},	
	marginLeftOrRightCSS: {
		criteria:	"mrgnLtRt",
		question: 	"Have you set the left or right margin of something?",
		example:	"#exampleId {\n" +
					"	margin-left:	100px;\n" +
					"	margin-right:	100px;\n" +
					"}",
		reference:	REFERENCE_OBJ.CSSPositioning,
		begin:		"margin-left:|margin-right:",
	},
	opacityCSS: {
		criteria:	"opacity",
		question: 	"Have you changed the opacity of something?",
		example:	"#exampleId {\n" +
					"	opacity:	0.7; /* = 30% transparent */\n" +
					"}",
		reference:	REFERENCE_OBJ.CSSAnimation,
		begin:		"opacity:",
	},	
	positionCSS: {
		criteria:	"position",
		question: 	"Have you set the position mode of an element?",
		example:	"#exampleId {\n" +
					"	position:	absolute;\n" +
					"}",
		reference:	REFERENCE_OBJ.CSSPositioning,
		begin:		"position:",
	},
	tagCSS: {
		criteria:	"tag",
		question: 	"Have you set the style of all tags of a certain kind?",
		example:	"<style>\n" +
					"	p { /* turns all paragraphs pink */\n" +
					"		color:	pink;\n" +
					"	}\n" +
					"</style>\n" +
					"\n" +
					"<body>\n" +
					"	<p>A pink paragraph!</p>\n" +
					"	<p>And another one!</p>\n" +
					"	<p>Bonus paragraph: also pink!</p>\n" +
					"</body>\n\n\n" + 
					"Right now, the code cannot detect this in your CSS yet.\n" + 
					"Please look inside your <style> block to see if examples are there.",
		reference:	REFERENCE_OBJ.CSSTextFormatting,
		begin:		"<style>",
		end:		"</style>"

	},
	textOrVerticalAlignCSS: {
		criteria:	"txtVrtAlgn",
		question: 	"Have you set the text or vertical alignment of something?",
		example:	"#exampleId {\n" +
					"	text-align:			left;\n" +
					"	vertical-align:		top;\n" +
					"}",
		reference:	REFERENCE_OBJ.outputChangeTextStyles,
		begin:		"vertical-align:|text-align:",
	},	
	topCSS: {
		criteria:	"top",
		question: 	"Have you set the top coordinate of something?",
		example:	"#exampleId {\n" +
					"	position:	absolute;\n" +
					"	top:		200px;\n" +
					"}",
		reference:	REFERENCE_OBJ.CSSPositioning,
		begin:		"top:",
	},
	topLeftCSS: {
		criteria:	"topOrLeft",
		question: 	"Have you set the top or left coordinate of something?",
		example:	"#exampleId {\n" +
					"	position:	absolute;\n" +
					"	top:		200px;\n" +
					"	left:		100px;\n" +
					"}",
		reference:	REFERENCE_OBJ.CSSPositioning,
		begin:		"top:|left:",
	},
	visibilityCSS: {
		criteria:	"visibility",
		question: 	"Have you set the visibility property of something?",
		example:	"#exampleId {\n" +
					"	visibility:	'hidden';\n" +
					"}",
		reference:	REFERENCE_OBJ.outputChangeTextStyles,
		begin:		"visibility:",
	},
	visibilityOrDisplayCSS: {
		criteria:	"visOrDsply",
		question: 	"Have you set the visibility or display property of something?",
		example:	"#exampleId {\n" +
					"	visibility:	'hidden';\n" +
					"	display:	'none';\n" +
					"}",
		reference:	REFERENCE_OBJ.outputChangeTextStyles,
		begin:		"visibility:|display:",
	},
	widthCSS: {
		criteria:	"width",
		question: 	"Have you set the width of an element?",
		example:	"#exampleId {\n" +
					"	width:	70px;\n" +
					"}",
		reference:	REFERENCE_OBJ.CSSTextFormatting,
		begin:		"width:",
	},
	widthHeightCSS: {
		criteria:	"widthOrHt",
		question: 	"Have you set the width or height of an element?",
		example:	"#exampleId {\n" +
					"	width:	70px;\n" +
					"	height:	90px;\n" +
					"}",
		reference:	REFERENCE_OBJ.CSSPositioning,
		begin:		"width:|height:",
	},
	zIndexCSS: {
		criteria:	"zIndex",
		question: 	"Have you set the stacking index of something?",
		example:	"#example1Id {\n" +
					"	z-index: 1; /* This one goes underneath */\n" +
					"}\n" +
					"#example2Id {\n" +
					"	z-index: 2; /* This one goes on top */\n" +
					"}",
		reference:	REFERENCE_OBJ.CSSPositioning,
		begin:		"z-index:",
	},
};



//INIT: this is the object that contains all the options 
//		for styleArr evaluation criteria
const STYLE_OBJ = {
	author: {
		criteria:	"author",
		question: 	"Have you written your name as the author?",
		example:	"<meta name='author' content='Dave Drapak'>",
		reference:	REFERENCE_OBJ.HTMLBasics,
		negative:	false,
		begin:		"name.*=.*author",
		end:		"content="
	},
	changelog: {
		criteria:	"changelog",
		question: 	"Have you updated the change log?",
		example:	"<!--\n" +
					"	Change log:\n" +
					"		Created:	12. September 2018	- Drapak\n" +
					"		Modified:	16. September 2018	- moved emails and assignment to separate files\n" +
					"					17. September 2018	- adding sketches of server interaction - Drapak\n" +
					"		Finished:	18. September 2018	- Drapak\n" +
					"-->",

		reference:	REFERENCE_OBJ.HTMLBasics,
		negative:	false,
		begin:		"[<][!]--",
		end:		"--[>]"
	},
	CSSInHead: {
		criteria:	"cssInHead",
		question: 	"Have you restricted your style code to the head of your HTML file?",
		example:	"Avoid using styles inside HTML tags, like:\n\n" +
					"<p style='color: red;'>I am red now!</p>\n\n" +
					"Yes it works, but it violates the separation on content and design.\n" +
					"Put your CSS code inside the <style> block in the head instead.\n\n" +
					"If any lines appear below, they may have style outside the <head>.",
		reference:	REFERENCE_OBJ.styleCSSInHead,
		negative:	true,
		begin:		"<.*?style=.*?>",
	},
	descriptiveVars: {
		criteria:	"descrbVars",
		question: 	"Do all your variables have descriptive names?",
		example:	"var myPonysName = 'Herbert';\n" 
					+ "var characterSheetObj = {};\n" 
					+ "var labResultsArr = [];"
					+ "const ACCELERATION_DUE_TO_GRAVITY = 9.8;\n",
		reference:	REFERENCE_OBJ.styleUseDescriptiveVariables,
		negative:	true,
		begin:		"var|const|let",
	},
	descriptiveFunctions: {
		criteria:	"descrbFctn",
		question: 	"Do all your functions have descriptive names?",
		example:	"var displaySpeed = function ( speed ) {",
		reference:	REFERENCE_OBJ.styleUseDescriptiveVariables,
		negative:	true,
		begin:		"function",
	},
	filename: {
		criteria:	"filename",
		question: 	"Have you correctly added your name to the filename?",
		example:	"1.05S-HelloColor-Drapak.html",
		reference:	REFERENCE_OBJ.HTMLFilenameHelp,
		negative:	false,
		begin:		"FILENAME:",
	},
	idNamingStyle: {
		criteria:	"camelCase",
		question: 	"Have you used camelCase for all your ids and classes?",
		example:	"<p class='camelClass' id='camelCaseId'>\n" 
					+ "	camelCase starts small and capitalizes each new word." 
					+ "</p>\n\n"
					+ "Check the code below to make sure your ids and classes are camelCase:",
		reference:	REFERENCE_OBJ.CSSIds,
		negative:	true,
		begin:		"id.*=.*'|id.*=.*\"|class.*=.*'|class.*=.*\"",		
	},
	camelCaseVariablesAndFunctions: {
		criteria:	"camelVrFcn",
		question: 	"Have you used camelCase for all your variables and functions?",
		example:	"var exampleFunction = function () {\n" 
					+ "     var exampleArr = [];",
		reference:	REFERENCE_OBJ.CSSIds,
		negative:	true,
		begin:		"var.*=|function",		
	},
	ifComments: {
		criteria:	"ifComments",
		question: 	"Have you used a comment to describe each if statement?",
		example:	"//IF: the score is greater than 1000\n" 
					+ "if ( score > 100 ) { ..}",
		reference:	REFERENCE_OBJ.none,
		negative:	false,
		lookAbove:	true,
		begin:		"//.*if|//.*IF|//.*If|if",		
	},
	indentation: {
		criteria:	"indent",
		question: 	"Have you correctly indented everything?",
		example:	"Examine your code below to check your indentation.\n\n"
					+ "If you are using both tabs and the space bar to indent\n"
					+ "you will see inconsistencies.\n",
		reference:	REFERENCE_OBJ.styleIndents,
		negative:	true,
		begin:		"<html",
		end:		"</html>"
	},
	longLines: {
		criteria:	"longLine",
		name:		"longLines",
		question: 	"Have you avoided lines greater than 96 characters in length?\n",
		example:	"<p>\n" +
					"	Long lines of code make it hard to take in all your code at one glance. If you have a large\n" +
					"	block, it is better to break it into several shorter lines. The industry standard for\n" +
					"	maximum line length is 80 characters. We use 96 characters because that is the longest \n" +
					"	length that can be printed legibly from the <code>View source</code> command in Chrome.\n" +
					"</p>\n\n" +
					"Sometimes you get a really long URL in your HTML/CSS. This is hard to fix and is OK.\n\n" +
					"<img src='http://oxmg23usfvkkg5uy1jypi6w8-wpengine.netdna-ssl.com/wp-content/uploads/cats-animals-kittens-background.jpg'>\n\n" +
					"<script>\n" +
					"	var longStringExample	\n" +
					"		= 'In Javascript, long strings can be broken up using indentation and connection. '\n" +
					"		+ 'You indent the string and break it up into several parts. Then you can join the '\n" +
					"		+ 'string back together using the + operator';\n" +
					"</script>\n\n" +
					"I also make an exception for long lines in complex data structures such as arrays of objects.\n\n" +
					"IF NO LINES OF CODE DISPLAY BELOW THINGS ARE GREAT!",
		reference:	REFERENCE_OBJ.styleLongLines,
		negative:	true,
	},
	lowercaseHTMLTags: {
		criteria:	"lowercase",
		question: 	"Have you used lowercase for all your HTML tags?",
		example:	"<strong>bold text</strong> -NOT- <Strong>bold text</STRONG>\n\n"
					+ "Check your code below for uppercase HTML tags.\n"
					+ "Remember that using camelCase in Ids and classes is normal.\n\n"
					+ "NOTE: The code preview currently also captures camelCase ids. This is OK!",
		reference:	REFERENCE_OBJ.styleCapitalizingTags,
		negative:	true,
		begin:		"<\/*.*?[A-Z].*?>",
	},
	scriptBlock: {
		criteria:	"script",
		question: 	"Have you included a script block in your HTML page?",
		example:	"<script></script>",
		reference:	REFERENCE_OBJ.processFunctionalProgramming,
		negative:	false,
		begin:		"<script",
		end:		"</script>"
	},
	objectOrientedProgramming: {
		criteria:	"objOrtdPrg",
		question: 	"Have you used object oriented programming?",
		example:	"//OUTPUT: method to animate up\n" +
					"animationObj.animateUp = function() {\n" +
					"    console.log( 'in animationObj.animateUp...' );\n" +
					"    \n" +
					"    $( '#' + this.id ).animate(\n" +
					"        { top:      '-=' + this.DISTANCE + 'px' }, \n" +
					"        { duration: this.DURATION }\n" +
					"    );\n" +
					"};		\n",
		reference:	REFERENCE_OBJ.initObjectsWithMethods,
		negative:	false,
		begin:		"<script",
		end:		"</script>"
	},
	spaceOutMath: {
		criteria:	"operators",
		question: 	"Have you spaced out your mathematical operators?",
		example:	"var answer = 1 + 2 - 3 * 4 / 5;\n\n" + 
					"NOTE: Any POORLY spaceed math symbols will be matched below:",
		reference:	REFERENCE_OBJ.styleSpaceOutMath,
		negative:	true,
		mathy:		true,
	//	begin:		"[-]|[/]|[+]|[*]",
		begin:		"^((?![<][/]).)*[/].*$|[*+-]",
		//begin:		"[a-zA-Z0-9][-*+/]|[-*+/][a-zA-Z0-9]",
	},
	styleBlock: {
		criteria:	"style",
		question: 	"Have you included a style block in your HTML page?",
		example:	"<style></style>",
		reference:	REFERENCE_OBJ.HTMLBasics,
		negative:	false,
		begin:		"<style",
		end:		"</style>"
	},
	functionalProgramming: {
		criteria:	"functional",
		question: 	"Have you used a functional programming style?",
		example:	"--each function should be limited to INPUT, PROCESS, or OUTPUT--",
		reference:	REFERENCE_OBJ.processFunctionalProgramming,
		negative:	false,
		begin:		"[{]",
		end:		"[}]"
	},	
	useDescriptiveComments: {
		criteria:	"dscrbCmmnts",
		question: 	"Have you used descriptive comments to identify and describe each function?",
		example:	"//OUTPUT: this function accepts a distance and animates the image up that number of pixels",
		reference:	REFERENCE_OBJ.none,
		negative:	false,
		begin:		"[/][/]",
	},		
	
	loopComment: {
		criteria:	"loopComment",
		question: 	"Have you used descriptive comments to identify and describe each loop?",
		example:	"//LOOP: through each of the players names\n" +
					"for ( i in playerNameArr ) {",
		reference:	REFERENCE_OBJ.none,
		negative:	false,
		begin:		"for.*[(]|[/][/]",
	},		
	initComment: {
		criteria:	"initComment",
		question: 	"Have you used descriptive comments to identify and describe each INIT function?",
		example:	"//INIT: set up the city data object",
		reference:	REFERENCE_OBJ.none,
		negative:	false,
		begin:		"[/][/]",
	},		
	inputComment: {
		criteria:	"inputCmmnt",
		question: 	"Have you used descriptive comments to identify and describe each INPUT function?",
		example:	"//INPUT EVENT: start this when the button is clicked",
		reference:	REFERENCE_OBJ.none,
		negative:	false,
		begin:		"[/][/]",
	},		
	processComment: {
		criteria:	"prcssCmmnt",
		question: 	"Have you used descriptive comments to identify and describe each PROCESS function?",
		example:	"//PROCESS: create the HTML code for the product information",
		reference:	REFERENCE_OBJ.none,
		negative:	false,
		begin:		"[/][/]",
	},		
	outputComment: {
		criteria:	"outptCmmnt",
		question: 	"Have you used descriptive comments to identify and describe each OUTPUT function?",
		example:	"//OUTPUT: this displays the table inside #outputId",
		reference:	REFERENCE_OBJ.none,
		negative:	false,
		begin:		"[/][/]",
	},		
	
	
};



//INIT: this is the object that contains all the options 
//		for initArr evaluation criteria
const INIT_OBJ = {
	approvedINIT: {
		criteria:	"apprvdINIT",
		question: 	"Have you added additional INIT code with the approval of your teacher?",
		example:	"//INIT approved by...",
		reference:	REFERENCE_OBJ.none,
		begin:		"//INIT approved by",
		//end:		""
	},
	jQueryLibrary: {
		criteria:	"jQueryLib",
		question: 	"Did you link to the JQuery library in your &lt;head>?",
		example:	'<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>',
		reference:	REFERENCE_OBJ.initLibraries,
		begin:		"jquery.min.js",
	},
	initNumericalVar: {
		criteria:	"initNumrcl",
		question: 	"Did you initialize a numerical variable as zero in your code?",
		example:	"var exampleNum = 0;",
		reference:	REFERENCE_OBJ.initVar,
		begin:		"var.*[=].*0|[:].*0",
	},
	useNumericalVar: {
		criteria:	"useNumercl",
		question: 	"Did you use numerical variables in your code?",
		example:	"top = top + 1;",
		reference:	REFERENCE_OBJ.initVar,
		begin:		"\w.*[=].*\w",
	},
	initStringVar: {
		criteria:	"initString",
		question: 	"Did you initialize an empty string in your code?",
		example:	"var exampleStr = '';",
		reference:	REFERENCE_OBJ.initVar,
		begin:		"var.*[=].*''|var.*[=].*\"\"",
	},
	useStringVar: {
		criteria:	"useStringVar",
		question: 	"Did you use string variables in your code?",
		example:	"name = firstName + lastName;",
		reference:	REFERENCE_OBJ.initVar,
		begin:		"var.*[=]",
	},
	object: {
		criteria:	"initObject",
		question: 	"Did you initialize an empty object in your code?",
		example:	"var exampleObj = {};",
		reference:	REFERENCE_OBJ.initObjects,
		begin:		"[=].*[{]",
	},
	useObject: {
		criteria:	"useObject",
		question: 	"Did you use objects in your code?",
		example:	"var exampleObj = {};",
		reference:	REFERENCE_OBJ.initObjects,
		begin:		"\w[.]\w",
	},
	objectConstructors: {
		criteria:	"objCnstrct",
		question: 	"Did you create an object using your own object constructor?",
		example:	"// ExampleObj object constructor\n" +
					"//      properties:\n" +
					"//          exampleObj.exampleProperty1\n" +
					"//          exampleObj.exampleProperty2\n" +
					"//      methods:\n" +
					"//          exampleObj.exampleMethod()\n" +
					"var ExampleObj = function ( exampleValue1, exampleValue2 ) {\n" +
					"    this.exampleProperty1   = exampleValue1;\n" +
					"    this.exampleProperty2   = exampleValue2;\n" +
					"};\n" +
					"// Use .prototype to add methods (functions) to your object constructor\n" +
					"ExampleObj.prototype.exampleMethod = function () {\n" +
					"        // function instructions go here\n" +
					"        return this.exampleProperty1 + this.exampleProperty2;\n" +
					"};\n" +
					"// Use new to construct a new version of this object:\n" +
					"var thisObj = new ExampleObj( 'Parameter #1', 'Parameter #2' );",
		reference:	REFERENCE_OBJ.initObjectConstructors,
		begin:		"new",
		//end:		"[}]"
	},
	
	objectPrototypes: {
		criteria:	"objPrototp",
		question: 	"Did you create an object constructor using object prototypes?",
		example:	"// ExampleObj object constructor\n" +
					"//      properties:\n" +
					"//          exampleObj.exampleProperty1\n" +
					"//          exampleObj.exampleProperty2\n" +
					"//      methods:\n" +
					"//          exampleObj.exampleMethod()\n" +
					"var ExampleObj = function ( exampleValue1, exampleValue2 ) {\n" +
					"    this.exampleProperty1   = exampleValue1;\n" +
					"    this.exampleProperty2   = exampleValue2;\n" +
					"};\n" +
					"// Use .prototype to add methods (functions) to your object constructor\n" +
					"ExampleObj.prototype.exampleMethod = function () {\n" +
					"        // function instructions go here\n" +
					"        return this.exampleProperty1 + this.exampleProperty2;\n" +
					"};\n" +
					"// Use new to construct a new version of this object:\n" +
					"var thisObj = new ExampleObj( 'Parameter #1', 'Parameter #2' );",
		reference:	REFERENCE_OBJ.initObjectConstructors,
		begin:		"[.]prototype[.]",
		//end:		""
	},
	
	objectWithMethods: {
		criteria:	"objMethod",
		question: 	"Did you create an object that contains a method (built-in function)?",
		example:	"// exampleObj\n" +
					"// 		properties:\n" +
					"//			exampleObj.exampleProperty1\n" +
					"//			exampleObj.exampleProperty2\n" +
					"// 		methods:\n" +
					"//			exampleObj.exampleMethod()\n" +
					"//\n" +
					"var exampleObj = {\n" +
					"	exampleProperty1:	exampleValue1,\n" +
					"	exampleProperty2:	exampleValue2,\n" +
					"}	\n" +
					"// a method is an object property that contains a function definition\n" +
					"	\n" +
					"exampleObj.exampleMethod = function () {\n" +
					"	// function instructions go here\n" +
					"	return this.exampleProperty1 + this.exampleProperty2;\n" +
					"};",
		reference:	REFERENCE_OBJ.initObjectsWithMethods,
		begin:		"function",
		end:		"[}]"
	},
	
	propertyForDuration: {
		criteria:	"propForDur",
		question: 	"Did you use the value of an object's property to make a custom animation duration?",
		example:	"$( '#animateId' ).animate( { opacity: 0 }, { duration: exampleObj.duration } );",
		reference:	REFERENCE_OBJ.outputOtherJQuery,
		begin:		"[.]animate[(]",
		end:		"duration[:]"
	},
	propertyForWidth: {
		criteria:	"propForWth",
		question: 	"Did you use the value of an object's property to animate something's width?",
		example:	"$( '#animateId' ).animate( { width: exampleObj.width + 'px' } );",
		reference:	REFERENCE_OBJ.outputOtherJQuery,
		begin:		"[.]animate[(]",
		end:		"width[:]"
	},
	var: {
		criteria:	"var",
		question: 	"Do you set up a variable?",
		example:	"//INIT: set an example variable with a value of 3\n" + 
					"var exampleVariable = 3;",
		reference:	REFERENCE_OBJ.initVar,
		begin:		"var",
	},
	initializeArray: {
		criteria:	"initArray",
		question: 	"Do you set up an array with initial information?",
		example:	'var stringArr = [ "Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet" ];',
		reference:	REFERENCE_OBJ.initArrays,
		begin:		"var.*=.*[[]",
	//	end:		"[]]"
	},
	initArray: {
		criteria:	"initArray",
		question: 	"Did you initialize an empty array in your code?",
		example:	"var exampleArr = [];",
		reference:	REFERENCE_OBJ.initArrays,
		begin:		"[=].*[[].*[]]|[=].*[[][]]",
	},
	useArray: {
		criteria:	"useArray",
		question: 	"Did you use arrays in your code?",
		example:	"imageGridArr[ row ]",
		reference:	REFERENCE_OBJ.processArrays,
		begin:		"\w[[].*[]]\w",
	},
	initArrayOfArrays: {
		criteria:	"arrOfArrs",
		question: 	"Have your initialized an array of arrays? (A two-dimensional array)",
		example:	"// INIT: initialize the array that holds the grid pattern\n" + 
					"// This one is an array of arrays -- a two-dimensional array\n" + 
					"var imageGridArr    =[  // rows 0-7, columns 0-8\n" + 
					"	[0,1,1,1,1,1,1,1,0], // row 0 = mazeArr [ 0 ]\n" + 
					"	[1,0,0,0,0,0,0,0,1], // row 1 = mazeArr [ 1 ]\n" + 
					"	[1,0,1,0,0,0,1,0,1], // row 2 = mazeArr [ 2 ]\n" + 
					"	[1,0,0,0,0,0,0,0,1], // row 3 = mazeArr [ 3 ]\n" + 
					"	[1,0,1,0,0,0,1,0,1], // row 4 = mazeArr [ 4 ]\n" + 
					"	[1,0,0,1,1,1,0,0,1], // row 5 = mazeArr [ 5 ]\n" + 
					"	[1,0,0,0,0,0,0,0,1], // row 6 = mazeArr [ 6 ]\n" + 
					"	[0,1,1,1,1,1,1,1,0]  // row 7 = mazeArr [ 7 ]\n" + 
					"];",
		reference:	REFERENCE_OBJ.initTwoDimensionalArrays,
		begin:		"[[]",
		end:		"[]]"
	},
	init: {
		criteria:	"",
		question: 	"",
		example:	"",
		reference:	REFERENCE_OBJ.initVar,
		begin:		"var",
	},
	this: {
		criteria:	"this",
		question: 	"Did you use the special keyword this when creating your object methods?",
		example:	"this.outputHTML = 'Hello world!';",
		reference:	REFERENCE_OBJ.initObjectsWithMethods,
		begin:		"this[.]",
	},
	objectOrientedMaze: {
		criteria:	"objOrtMaze",
		question: 	"Do you create an object for the maze with properties and methods",
		example:	"// exampleObj\n" +
					"// 		properties:\n" +
					"//			exampleObj.exampleProperty1\n" +
					"//			exampleObj.exampleProperty2\n" +
					"// 		methods:\n" +
					"//			exampleObj.exampleMethod()\n" +
					"//\n" +
					"var exampleObj = {\n" +
					"	exampleProperty1:	exampleValue1,\n" +
					"	exampleProperty2:	exampleValue2,\n" +
					"}	\n" +
					"// a method is an object property that contains a function definition\n" +
					"	\n" +
					"exampleObj.exampleMethod = function () {\n" +
					"	// function instructions go here\n" +
					"	return this.exampleProperty1 + this.exampleProperty2;\n" +
					"};",
		reference:	REFERENCE_OBJ.initObjectsWithMethods,
		begin:		"function",
		end:		"[}]"
	},
	objectOrientedCharacter: {
		criteria:	"objOrtChrtr",
		question: 	"Do you create an object for the animated character with properties and methods",
		example:	"// exampleObj\n" +
					"// 		properties:\n" +
					"//			exampleObj.exampleProperty1\n" +
					"//			exampleObj.exampleProperty2\n" +
					"// 		methods:\n" +
					"//			exampleObj.exampleMethod()\n" +
					"//\n" +
					"var exampleObj = {\n" +
					"	exampleProperty1:	exampleValue1,\n" +
					"	exampleProperty2:	exampleValue2,\n" +
					"}	\n" +
					"// a method is an object property that contains a function definition\n" +
					"	\n" +
					"exampleObj.exampleMethod = function () {\n" +
					"	// function instructions go here\n" +
					"	return this.exampleProperty1 + this.exampleProperty2;\n" +
					"};",
		reference:	REFERENCE_OBJ.initObjectsWithMethods,
		begin:		"function",
		end:		"[}]"
	},
	addElementToAnArrayUsingSquareBrackets: {
		criteria:	"initArrSqr",
		question: 	"Have you corrected added a new object to an array manually inside the square brackets?",
		example:	'var carArr = [\n' + 
					'	{ make: "Toyota", model: "Yaris", year: "2007", nickname: "Immortal Blue"},\n' + 
					'	{ make: "Toyota", model: "Prius V", year: "2016", nickname: "The Smugmobile"},\n' + 
					'	{ make: "Ford", model: "F150", year: "2029", nickname: "FutureTruck!"},\n' + 
					'	\n' + 
					'	// add your own object inside the array here:\n' + 
					'	{ make: "", model: "", year: "", nickname: ""},\n' + 
					']',
		reference:	REFERENCE_OBJ.processArraysOfObjectsToCreateTable,
		begin:		"[[]",
		end:		"[]]"
	},
};

	

//INIT: this is the object that contains all the options 
//		for inputArr evaluation criteria
const INPUT_OBJ = {
	approvedINPUT: {
		criteria:	"aprvdINPUT",
		question: 	"Have you added additional INPUT code with the approval of your teacher?",
		example:	"//INPUT approved by...",
		reference:	REFERENCE_OBJ.none,
		begin:		"//INPUT approved by",
		//end:		""
	},
	input: {
		criteria:	"",
		question: 	"",
		example:	"",
		reference:	REFERENCE_OBJ.inputReadingKeypresses,
		begin:		"",
	},
	clientXY: {
		criteria:	"clientXY",
		question: 	"Have you used clientX or clientY to find the current position of the mouse?",
		example:	"//INPUT: listen for mouse movements and get the coordinates\n" +
					"document.onmousemove = function ( event ) {\n" +
					"    var topCoordinate    = event.clientY;\n" +
					"    var leftCoordinate   = event.clientX;\n" +
					"}",
		reference:	REFERENCE_OBJ.inputMouseMovementAndPosition,
		begin:		"[.]clientX|[.]clientY",
	},
	innerWidthOrHeight: {
		criteria:	"inrWdhOrHt",
		question: 	"Have you used innerWidth or innerHeight to find the size of the screen?",
		example:	"var windowWidth = window.innerWidth;\n" +
					"var windowHeight = window.innerHeight;",
		reference:	REFERENCE_OBJ.inputScreenHeightAndWidth,
		begin:		"[.]innerWidth|[.]innerHeight",
	},
	inputGet: {
		criteria:	"inputGet",
		question: 	"Do you use jQuery to get information from a website?",
		example:	"//PROCESS: this function takes the results of the request and processes them\n" +
					"var processWebsiteData = function ( data, status ) {\n" +
					"	console.log( 'in processWebsiteData...' );\n" +
					"	console.log( '   data=' + data );\n" +
					"   console.log( '   status=' + status );\n" +
					"	\n" +
					"	//IF: this was successful, display the results\n" +
					"	if ( status == 'success' ) {\n" +                 
					"		alert( data );\n" +
					"	}\n" +
					"	\n" +
					"	//IF: the transfer was not successful, show an error message\n" +
					"	else {\n" +
					"		console.log( 'WARNING: data downloaded unsuccessfully' );\n" +
					"	}\n" +
					"}\n" +
					"\n" +
					"//INPUT: get the message from the web server using jQuery\n" +
					"$.get( \n" +
					"	'https://twagley.github.io/CP12/getSunnyMessage.php',    // URL to contact\n" +
					"	{ message: 42 },                                // information about the request\n" +
					"	processWebsiteData                              // function to process the results\n" +
					");",
		reference:	REFERENCE_OBJ.inputGet,
		begin:		"[$].*get[(]",
	},
	keyCode: {
		criteria:	"keyCode",
		question: 	"Does your program find out the unicode number of the key that was pressed?",
		example:	"var unicodeNumber = keyEvent.which || keyEvent.keyCode;",
		reference:	REFERENCE_OBJ.inputReadingKeypresses,
		begin:		"[.]keyCode",
	},	
	fileUpload: {
		criteria:	"fileUpload",
		question: 	"Does your program read in an uploaded file?",
		example:	"var reader = new FileReader();\n" +
					"// start reading in the file as text\n" +
					"reader.readAsText( firstFile );\n" +               
					"\n" +
					"// define what to do when the file is finished being read in...\n" +
					"reader.onload = function( uploadEvent ) { \n" +
					"	// store the contents from the file\n" +
					"    this.jsonString = uploadEvent.target.result; \n" +   
					"}",
		reference:	REFERENCE_OBJ.processJSON,
		begin:		"new.*FileReader",
	},	
	offsetTopOrLeft: {
		criteria:	"ofstTopLft",
		question: 	"Do you read the current position from the top or left of the screen?",
		example:	"var topPosition = document.getElementById( 'exampleId' ).offsetTop;\n" +
					"var leftPosition = document.getElementById( 'exampleId' ).offsetLeft;",
		reference:	REFERENCE_OBJ.inputElementPositions,
		begin:		"[.]offsetTop|[.]offsetLeft",
	},
	offsetTop: {
		criteria:	"offsetTop",
		question: 	"Do you read the current position from the top of the screen?",
		example:	"var topPosition = document.getElementById( 'exampleId' ).offsetTop;",
		reference:	REFERENCE_OBJ.inputElementPositions,
		begin:		"[.]offsetTop",
	},
	offsetLeft: {
		criteria:	"offsetLeft",
		question: 	"Do you read the current position from the left of the screen?",
		example:	"var leftPosition = document.getElementById( 'exampleId' ).offsetLeft;",
		reference:	REFERENCE_OBJ.inputElementPositions,
		begin:		"[.]offsetLeft",
	},
	onchange: {
		criteria:	"onchange",
		question: 	"Do things happen when you change a text input?",
		example:	"document.getElementById( 'inputId' ).onchange = mainProcedure;",
		reference:	REFERENCE_OBJ.inputText,
		begin:		"[.]onchange",
	},
	onclick: {
		criteria:	"onclick",
		question: 	"Do you use onclick to make things clickable?",
		example:	"document.getElementById( 'exampleId' ).onclick = mainProcedure;",
		reference:	REFERENCE_OBJ.inputButtons,
		begin:		"[.]onclick",
	},
	onkeydown: {
		criteria:	"onkeydown",
		question: 	"Is your program listening to when keys are pressed down?",
		example:	"window.onkeydown    = readKeypress;",
		reference:	REFERENCE_OBJ.inputReadingKeypresses,
		begin:		"window.onkeydown",
	},
	onload: {
		criteria:	"onload",
		question: 	"Does onload start things when the page finishes loading?",
		example:	"document.body.onload = mainProcedure;",
		reference:	REFERENCE_OBJ.outputAlertInnerHtmlAndConsoleLog,
		begin:		"[.]onload",
	},
	onmousedown: {
		criteria:	"onmousedwn",
		question: 	"Have you used onmousedown to detect when the mouse button is clicked?",
		example:	"//INPUT: listen for mouse movements and get the coordinates\n" +
					"document.onmousedown = function ( event ) {\n" +
					"    var topCoordinate    = cursorY;\n" +
					"    var leftCoordinate   = cursorX;\n" +
					"}",
		reference:	REFERENCE_OBJ.inputMouseMovementAndPosition,
		begin:		"[.]onmousedown",
	},
	onmousemove: {
		criteria:	"onmousemov",
		question: 	"Have you used onmousemove to detect mouse movement events?",
		example:	"//INPUT: listen for mouse movements and get the coordinates\n" +
					"document.onmousemove = function ( event ) {\n" +
					"    var topCoordinate    = event.clientY;\n" +
					"    var leftCoordinate   = event.clientX;\n" +
					"}",
		reference:	REFERENCE_OBJ.inputMouseMovementAndPosition,
		begin:		"[.]onmousemove",
	},
	onmouseoutOrOver: {
		criteria:	"mousOutOvr",
		question: 	"Does your program detect when the user mouses into or out of things?",
		example:	"document.querySelector( '#exampleId' ).onmouseover = someFunction;\n" + 
					"document.querySelector( '#exampleId' ).onmouseout = someFunction; ",
		reference:	REFERENCE_OBJ.inputMouseovers,
		begin:		"[.]onmouseover|[.]onmouseout",
	},	
	onmouseover: {
		criteria:	"mouseover",
		question: 	"Does your program detect when the user mouses over things?",
		example:	"document.querySelector( '#exampleId' ).onmouseover = someFunction;\n",
		reference:	REFERENCE_OBJ.inputMouseovers,
		begin:		"[.]onmouseover",
	},	
	onmouseout: {
		criteria:	"mouseout",
		question: 	"Does your program detect when the user mouses out of an element?",
		example:	"document.querySelector( '#exampleId' ).onmouseout = someFunction; ",
		reference:	REFERENCE_OBJ.inputMouseovers,
		begin:		"[.]onmouseout",
	},
	turnOffInputEvents: {
		criteria:	"turnOffEvt",
		question: 	"Does your program turn off input events?",
		example:	"document.querySelector( '#exampleId' ).onclick = ''; ",
		reference:	REFERENCE_OBJ.inputButtons,
		begin:		"document.*on.*=.*''|document.*on.*=.*\"\"",
	},
	value: {
		criteria:	"value",
		question: 	"Do you read the value of an input line?",
		example:	"document.getElementById( 'inputId' ).value",
		reference:	REFERENCE_OBJ.inputText,
		begin:		"[.]value",
	},
	newDate: {
		criteria:	"newDate",
		question: 	"Did you create a new object to get the time and date?",
		example:	"var dateObj = new Date();",
		reference:	REFERENCE_OBJ.none,
		begin:		"new.*Date",
	},

};
	

	
//INIT: this is the object that contains all the options 
//		for processArr evaluation criteria
const PROCESS_OBJ = {
	approvedPROCESS: {
		criteria:	"aprvdPROCS",
		question: 	"Have you added additional PROCESS code with the approval of your teacher?",
		example:	"//PROCESS approved by...",
		reference:	REFERENCE_OBJ.none,
		begin:		"//PROCESS approved by",
		//end:		""
	},
	approvedSTRUCTURE: {
		criteria:	"aprvdSTRCT",
		question: 	"Have you added additional STRUCTURE code with the approval of your teacher?",
		example:	"//STRUCTURE approved by...",
		reference:	REFERENCE_OBJ.none,
		begin:		"//STRUCTURE approved by",
		//end:		""
	},
	animationCallbacks: {
		criteria:	"animClbcks",
		question: 	"Do you use animation callbacks?",
		example:	"//sample animation code with function callbacks\n" + 
					"$( '#imageId' ).animate( \n" + 
					"    {   \n" + 
					"        left:   '-=50px',\n" + 
					"        top:    '+=50px'    \n" + 
					"    }, \n" + 
					"    {   \n" + 
					"        duration:   1000, \n" + 
					"        easing:     'linear',\n" + 
					"        start:  function () {\n" + 
					"            // this happens BEFORE the animation\n" + 
					"            document.querySelector( '#imageId' ).src \n" + 
					"                = 'http://twagley.github.io/CP12/img/link-left.png';\n" + 
					"        },\n" + 
					"        complete: function () {\n" + 
					"            // this happens AFTER the animation\n" + 
					"            alert ('Animation finished!');\n" + 
					"        }\n" + 
					"    } \n" + 
					");",
		reference:	REFERENCE_OBJ.outputAnimationCallbacks,
		begin:		"start.*function|complete.*function",
		end:		"[}]"
	},
	clearTimeout: {
		criteria:	"clrTimeout",
		question: 	"Have you stopped a timer or interval from triggering?",
		example:	"timer = setInterval( countDown, 1000 );\n" + 
					"clearTimeout( timer );      // stop the setInterval timer",
		reference:	REFERENCE_OBJ.processTimers,
		begin:		"clearTimeout.*[(]",
	},
	createElement: {
		criteria:	"crtElmnt",
		question: 	"Does your program directly create an HTML element?",
		example:	"var newElement = document.createElement( 'img' ); ",
		reference:	REFERENCE_OBJ.outputAddingElements,
		begin:		"[.]createElement",
	},
	createGridOfImages: {
		criteria:	"crtGrdImgs",
		question: 	"Does your program create a grid of images?",
		example:	"<img \n" +
					"	src='http://link.to/image.jpg' \n" +
					"	style='position:absolute; top: 100px; left: 200px; width: 50px;'>",
		reference:	REFERENCE_OBJ.none,
		begin:		"img",
	},
	fiveCharacteristics: {
		criteria:	"FiveChrctr",
		question: 	"Do you successfully process at least 5 objects and their characteristics?",
		example:	"--run your program and test it--",
		reference:	REFERENCE_OBJ.none,
		//begin:		"if [(]",
	},
	forLoop: {
		criteria:	"forLoop",
		question: 	"Do you loop through each member of an array?",
		example:	"for (i in exampleArr) { }",
		reference:	REFERENCE_OBJ.processForLoops,
		begin:		"for.*[(]",
		end:		"[)]"
	},
	functionWithArgument: {
		criteria:	"fnctnParam",
		question: 	"Have you created a function that accepts a parameter (argument) as input?",
		example:	"//OUTPUT: this animates the given id upwards by the given distance\n" + 
					"var moveUp = function ( distance ) {\n" + 
					"	$( '#imageId' ).animate( { top: '+=' + distance + 'px' } );\n" +
					"}",
		reference:	REFERENCE_OBJ.processFunctionalProgramming,
		begin:		"function.*[(]",
		end:		"[)]"
	},	
	functionWithReturn: {
		criteria:	"fnctnWRtrn",
		question: 	"Have you created a function that returns an answer?",
		example:	"//INPUT: this gets the name typed from the input line\n" + 
					"var getName = function () {\n" + 
					"	var name = document.querySelector( '#inputId').value;\n" +
					"	return name\n" + 
					"}",
		reference:	REFERENCE_OBJ.processFunctionalProgramming,
		begin:		"return",
	},	
	ifElse: {
		criteria:	"ifElse",
		question: 	"Do you use an if...else conditional?",
		example:	"if ( something1 == something2 ) { ..do something .. }",
		reference:	REFERENCE_OBJ.processIfElseConditionals,
		begin:		"if.*[(]",
	},	
	ifElseIf: {
		criteria:	"ifElseIf",
		question: 	"Do you use an if...else if... conditional?",
		example:	"if ( something1 == something2 ) { ..do something .. } else if { ..something else.. }",
		reference:	REFERENCE_OBJ.processIfElseConditionals,
		begin:		"else.*if",
	},	
	ifElseImage: {
		criteria:	"ifElseImg",
		question: 	"Do you use an if...else conditional to show different images?",
		example:	"<!-- Sorry - no example for this one -->",
		reference:	REFERENCE_OBJ.processIfElseConditionals,
		begin:		"if.*[(].*[{]",
		end:		"[}]"
	},	
	ifElseDirection: {
		criteria:	"ifElseDir",
		question: 	"Do you use an if...else conditional to move keys in different directions?",
		example:	"<!-- Sorry - no example for this one -->",
		reference:	REFERENCE_OBJ.processIfElseConditionals,
		begin:		"if.*[(].*[{]",
		end:		"[}]"
	},	
	inputFunction: {
		criteria:	"inputFnctn",
		question: 	"Do you have one or more functions dedicated just to INPUT?",
		example:	"//INPUT: this gets the name typed from the input line\n" + 
					"var getName = function () {\n" + 
					"	var name = document.querySelector( '#inputId').value;\n" +
					"	return name\n" + 
					"}",
		reference:	REFERENCE_OBJ.processFunctionalProgramming,
		begin:		"function.*[{]",
		end:		"[}]"
	},	
	initFunction: {
		criteria:	"initFunctn",
		question: 	"Do you have one or more functions dedicated just to INIT?",
		example:	"//INIT: sets up the rainbow array\n" + 
					"var initRainbow = function () {\n" + 
					"	var rainbowArr = [ 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet' ];\n" +
					"	return rainbowArr\n" + 
					"}",
		reference:	REFERENCE_OBJ.processFunctionalProgramming,
		begin:		"function.*[{]|\/\/INIT",
		end:		"[}]"
	},	
	joinArray: {
		criteria:	"joinArray",
		question: 	"Do you join together the members of an array with a specific string?",
		example:	"exampleArr.join( ',<br>' );",
		reference:	REFERENCE_OBJ.processArrays,
		begin:		"[.]join.*[(]",
		end:		"[)]"
	},	
	JSON: {
		criteria:	"JSON",
		question: 	"Does your program use JSON to successfully read or send data structures?",
		example:	"var outputJSONString = JSON.stringify( exampleObj ); ",
		reference:	REFERENCE_OBJ.processJSON,
		begin:		"JSON.*[(]",
	},	
	JSONStringify: {
		criteria:	"JSON.strin",
		question: 	"Does your program successfully convert data into a JSON string?",
		example:	"var outputJSONString = JSON.stringify( exampleObj ); ",
		reference:	REFERENCE_OBJ.processJSON,
		begin:		"JSON.*stringify.*[(]",
	},	
	JSONParse: {
		criteria:	"JSON.parse",
		question: 	"Does your program successfully convert a JSON string back into data?",
		example:	"var exampleObj = JSON.parse( JSONString );",
		reference:	REFERENCE_OBJ.processJSON,
		begin:		"JSON.*parse.*[(]",
	},	
	lftRtMovmt: {
		criteria:	"lftRtMovmt",
		question: 	"Does your program successfully move something left and right?",
		example:	"--run your program and test it--",
		reference:	REFERENCE_OBJ.none,
		//begin:		"if [(]",
	},
	mathBasic: {
		criteria:	"math",
		question: 	"Did you use basic addition, subtraction, multiplication, or division?",
		example:	"phoneVersion	= phoneVersion + 1;		// addition\n\n" +
					"newBalance		= oldBalance - 10.99;	// subtraction\n\n" + 
					"costPerStudent	= totalCost / students;	// division\n\n" + 
					"totalWeight	= numApples * AppleWt;		// multiplication",
		reference:	REFERENCE_OBJ.processBasicMath,
		begin:		"[-]|[/]|[+]|[*]",	
		mathy:		true,
	},
	mathHigher: {
		criteria:	"mathHigher",
		question: 	"Did you use higher math, like powers, roots, or trigonometry?",
		example:	"var threeSquared = Math.pow( 3, 2 );\n" +
					"var rootOfTwo = Math.sqrt( 2 );\n" + 
					"var sineOfThreeDegrees 	= Math.sin( 3 * Math.PI / 180 );\n" + 
					"var circumference = 2 * Math.PI * radius;",
		reference:	REFERENCE_OBJ.processBasicMath,
		begin:		"Math[.]pow|Math[.]sqrt|Math[.]sin|Math[.].cos|Math[.].tan|Math[.]PI",	
		mathy:		true,
	},
	mathPow: {
		criteria:	"power",
		question: 	"Did you calculate a square, cube, or other power?",
		example:	"var threeSquared = Math.pow( 3, 2 );",
		reference:	REFERENCE_OBJ.processBasicMath,
		begin:		"Math.pow",
	},
	mathSqr: {
		criteria:	"root",
		question: 	"Did you calculate a square root?",
		example:	"var rootOfTwo = Math.sqrt( 2 );",
		reference:	REFERENCE_OBJ.processBasicMath,
		begin:		"Math.sqrt",
	},
	mathTrig: {
		criteria:	"trig",
		question: 	"Did you use trig functions like tangent, sine, or cosine?",
		example:	"var sineOfThreeDegrees 	= Math.sin( 3 * Math.PI / 180 );\n\n" + 
					"var cosineOfThreeDegrees	= Math.cos( 3 * Math.PI / 180 );\n\n" + 
					"var tangentOfThreeDegress	= Math.tan( 3 * Math.PI / 180 );\n\n\n" + 
					"NOTE: javascript uses radians by default. " + 
					"Use the examples to convert from degrees.",
		reference:	REFERENCE_OBJ.processBasicMath,
		begin:		"Math.sin|Math.cos|Math.tan",
	},
	mathPI: {
		criteria:	"pi",
		question: 	"Did you refer to the mathematical constant &pi;?",
		example:	"var circumference = 2 * Math.PI * radius;",
		reference:	REFERENCE_OBJ.processBasicMath,
		begin:		"Math.PI",
	},
	nestedLoop: {
		criteria:	"nestedLoop",
		question: 	"Does your program use a nested loop to go through an array of arrays?",
		example:	"//PROCESS: use a nested loop to go through the rows and columns of the two-dimensional array\n" +
					"var loopThroughArray = function ( exampleArray ) {\n" +
					"	for ( row in exampleArray ) {			// loop through each ROW of the array\n" +
					"		for ( column in exampleArray[ row ] ) {	// loop through each COLUMN of that row\n" +
					"			// do something with exampleArray[ row ][ column ]\n" +
					"		}\n" +
					"	}\n" +
					"}",
		reference:	REFERENCE_OBJ.processUsingTwoDimensionalArrays,
		begin:		"for.*[{]",
		end:		"[}]"
	},	
	outputFunction: {
		criteria:	"outptFnctn",
		question: 	"Do you have one or more functions dedicated just to OUTPUT?",
		example:	"//OUTPUT: this animates the given id upwards by the given distance\n" + 
					"var moveUp = function ( id, distance ) {\n" + 
					"	$( '#' + id ).animate( { top: '+=' + distance + 'px' } );\n" +
					"}",
		reference:	REFERENCE_OBJ.processFunctionalProgramming,
		begin:		"function.*[{]",
		end:		"[}]"
	},	
	parseInt: {
		criteria:	"parseInt",
		question: 	"Did you extract an integer from a string?",
		example:	"var temperature = parseInt( '35 degrees' );	// stores 35",
		reference:	REFERENCE_OBJ.processBasicMath,
		begin:		"parseInt[(]",
	},
	parseIntOrFloat: {
		criteria:	"parsIntFlt",
		question: 	"Did you extract a number from a string?",
		example:	"var temperature	= parseInt( '35 degrees' );		// stores 35\n" + 
					"var price			= parseFloat( '15.99 CAD' );	// stores 15.99",
		reference:	REFERENCE_OBJ.processBasicMath,
		begin:		"parseInt *[(]|parseFloat *[(]",
	},
	parseFloat: {
		criteria:	"parseFloat",
		question: 	"Did you extract a decimal number from a string?",
		example:	"var price = parseFloat( '15.99 CAD' );	// stores 15.99",
		reference:	REFERENCE_OBJ.processBasicMath,
		begin:		"parseFloat[(]",
	},
	processFunction: {
		criteria:	"prcesFnctn",
		question: 	"Do you have one or more functions dedicated just to PROCESS?",
		example:	"//PROCESS: this updates the player's current score\n" + 
					"var updateScore = function ( score ) {\n" + 
					"	var newScore = score + 10;\n" +
					"	return newScore\n" + 
					"}",
		reference:	REFERENCE_OBJ.processFunctionalProgramming,
		begin:		"function.*[{]",
		end:		"[}]"
	},	
	positionMaze: {
		criteria:	"posMaze",
		question: 	"Do you use math to determine a top and left position for each maze image?",
		example:	"            // calculate the location of this cell\n" +
					'            var topLocation     = ( row * IMAGE_SIZE ) + "px";\n' +
					'            var leftLocation    = ( column * IMAGE_SIZE ) + "px";\n' +
					"            \n" +
					"            // combine the elements to create HTML code.\n" +
					"            gridCode = gridCode \n" + 
					'                + "<img src=\'" + imageSrc + "\'\n' + 
					'                    + style=\'background-color: "  + backgroundColor   + "; \n' +
					'                    + "top: "                       + topLocation       + "; \n' +
					'                    + "left: "                      + leftLocation      + ";\'>;',
		reference:	REFERENCE_OBJ.processBasicMath,
		begin:		"top",
		//end:		""
	},	
	positionCharacter: {
		criteria:	"posCharctr",
		question: 	"Do you use math to determine a top and left position for the animated character?",
		example:	"            // calculate the location of this cell\n" +
					'            var topLocation     = ( row * IMAGE_SIZE ) + "px";\n' +
					'            var leftLocation    = ( column * IMAGE_SIZE ) + "px";\n' +
					"            \n" +
					"            // combine the elements to create HTML code.\n" +
					"            gridCode = gridCode \n" + 
					'                + "<img src=\'" + imageSrc + "\'\n' + 
					'                    + style=\'background-color: "  + backgroundColor   + "; \n' +
					'                    + "top: "                       + topLocation       + "; \n' +
					'                    + "left: "                      + leftLocation      + ";\'>;',
		reference:	REFERENCE_OBJ.processBasicMath,
		begin:		"top",
		//end:		""
	},	
	otherArray: {
		criteria:	"pushArray",
		question: 	"Do you use other array functions like pop, shift, and unshift?",
		example:	"var lastPartOfTheArr = exampleArr.pop()",
		reference:	REFERENCE_OBJ.processArrays,
		begin:		"pop[.].*[(]|shift.*[(]|unshift.*[(]",
		end:		"[)]"
	},	
	pushArray: {
		criteria:	"pushArray",
		question: 	"Do you push a new member on to the end of an array?",
		example:	"//PROCESS: add violet to the end of the array\n" + 
					"stringArr.push( 'Violet' );",
		reference:	REFERENCE_OBJ.processArrays,
		begin:		"[.]push.*[(]",
		end:		"[)]"
	},	
	random: {
		criteria:	"random",
		question: 	"Does your program generate a random number?",
		example:	"var dieRoll =Math.ceil( Math.random() * 6 );",
		reference:	REFERENCE_OBJ.processRandomnessAndRounding,
		begin:		"Math.*random",
	},	
	rounding: {
		criteria:	"rounding",
		question: 	"Does your program round numbers?",
		example:	"var roundNormally = Math.round( someNumber );\n" +
					"var roundUp = Math.ceil( someNumber );\n" +
					"var roundDown = Math.floor( someNumber );",
		reference:	REFERENCE_OBJ.processRandomnessAndRounding,
		begin:		"Math[.]round[(]|Math[.]ceil[(]|Math[.]floor[(]",
	},	
	setIntervalTimeout: {
		criteria:	"IntrvlTimt",
		question: 	"Have you successfully used a timer or interval to make something happen or repeat after a period of time?",
		example:	"setTimeout( functionToTrigger, numberOfMilliseconds);\n" +
					"setInterval( functionToTrigger, numberOfMilliseconds);",
		reference:	REFERENCE_OBJ.processTimers,
		begin:		"Timeout.*[(]|Interval.*[(]",
	},
	setTimeout: {
		criteria:	"setTimeout",
		question: 	"Have you successfully used a timer to make something happen after a period of time?",
		example:	"setTimeout( functionToTrigger, numberOfMilliseconds); ",
		reference:	REFERENCE_OBJ.processTimers,
		begin:		"setTimeout.*[(]",
	},
	setInterval: {
		criteria:	"setIntrvl",
		question: 	"Have you successfully made something repeat at a regular interval?",
		example:	"setInterval( functionToTrigger, numberOfMilliseconds);",
		reference:	REFERENCE_OBJ.processTimers,
		begin:		"setInterval.*[(]",
	},
	splitArray: {
		criteria:	"splitArray",
		question: 	"Do you split a string to create an array?",
		example:	"var colorArr = 'one,fish,two.fish'.split( ',' );",
		reference:	REFERENCE_OBJ.processArrays,
		begin:		"[.]split*[(]",
		end:		"[)]"
	},	
	stringAdd: {
		criteria:	"stringAdd",
		question: 	"Have you used string addition to make a longer string?",
		example:	"var unicodeCharacter = '&#' + unicodeNumber + ';';",
		reference:	REFERENCE_OBJ.HTMLunicode,
		begin:		"[+]",
	},
	timerAnonymousFunction: {
		criteria:	"tmrAnonFnc",
		question: 	"Did you use an anonymous function inside setTimeout() or setInterval()?",
		example:	"setTimeout( \n" +
					"	function ( parameter ) {\n" +
					"		delayedFunction( parameter )\n" +
					"	}, numberOfMilliseconds \n" +
					");",
		reference:	REFERENCE_OBJ.processTimers,
		begin:		"setTimeout.*[(]",
		end:		"[)]"
	},
	this: {
		criteria:	"this",
		question: 	"Did you use the special keyword 'this' to refer to other parts of an object?",
		example:	"document.querySelector( '#' + this.id ).src = this.src;",
		reference:	REFERENCE_OBJ.initObjectsWithMethods,
		begin:		"this[.]",
//		end:		"[)]"
	},
	upDwnMovmt: {
		criteria:	"upDwnMovmt",
		question: 	"Does your program successfully move something up and down?",
		example:	"--run your program and test it--",
		reference:	REFERENCE_OBJ.none,
		//begin:		"if [(]",
	},
	usesAFunction: {
		criteria:	"function",
		question: 	"Have you created a function?",
		example:	"//PROCESS: this updates the player's current score\n" + 
					"var updateScore = function ( score ) {\n" + 
					"	var newScore = score + 10;\n" +
					"	return newScore\n" + 
					"}",
		reference:	REFERENCE_OBJ.processFunctionalProgramming,
		begin:		"function.*[{]",
		//end:		"[}]"
	},	
	requestAnimationFrame: {
		criteria:	"requestAnm",
		question: 	"Have you used requestAnimationFrame to update the display during processing pauses?",
		example:	"function repeatOften() {\n" +
					"	// Do whatever\n" +
					"	requestAnimationFrame(repeatOften);\n" +
					"}\n" +
					"requestAnimationFrame(repeatOften);",
		reference:	REFERENCE_OBJ.none,
		begin:		"requestAnimationFrame",
		//end:		"[}]"
	},	

};



//INIT: this is the object that contains all the options 
//		for outputArr evaluation criteria
const OUTPUT_OBJ = {
	approvedOUTPUT: {
		criteria:	"aprvdOUTPT",
		question: 	"Have you added additional OUTPUT code with the approval of your teacher?",
		example:	"//OUTPUT approved by...",
		reference:	REFERENCE_OBJ.none,
		begin:		"//OUTPUT approved by",
		//end:		""
	},
	alert: {
		criteria:	"alert",
		question: 	"Did you create a pop up alert?",
		example:	"alert( 'This text pops up annoyingly!' );",
		reference:	REFERENCE_OBJ.outputAlertInnerHtmlAndConsoleLog,
		begin:		"alert[(]",
	},

	animateDownJQuery: {
		criteria:	"downJQuery",
		question: 	"Did you use jQuery to animate something DOWN?",
		example:	'$( "#animateId" ).animate( { top: "+=50px" }, , { duration: 400, easing: "linear" } ); ',
		reference:	REFERENCE_OBJ.outputAnimateJQuery,
		begin:		"[.]animate[(]",
		end: 		"top[:]"
	},

	animationDuration: {
		criteria:	"anim8Durtn",
		question: 	"Did you animate something using a custom duration?",
		example:	'$( "#animateId" ).animate( { left: "+=50px" }, { duration: exampleObj.duration } ); ',
		reference:	REFERENCE_OBJ.outputOtherJQuery,
		begin:		"[.]animate[(]",
	//	end: 		"[)]"
		end:		"duration"
	},
	animateEasing: {
		criteria:	"animEasing",
		question: 	"Did you define a particular animation easing? (movement style)",
		example:	"//sample animation code with function callbacks and easing\n" + 
					"$( '#imageId' ).animate( \n" + 
					"    {   \n" + 
					"        left:   '-=50px',\n" + 
					"        top:    '+=50px'    \n" + 
					"    }, \n" + 
					"    {   \n" + 
					"        duration:   1000, \n" + 
					"        easing:     'linear',\n" + 
					"        start:  function () {\n" + 
					"            // this happens BEFORE the animation\n" + 
					"            document.querySelector( '#imageId' ).src \n" + 
					"                = 'http://twagley.github.io/CP12/img/link-left.png';\n" + 
					"        },\n" + 
					"        complete: function () {\n" + 
					"            // this happens AFTER the animation\n" + 
					"            alert ('Animation finished!');\n" + 
					"        }\n" + 
					"    } \n" + 
					");",
		reference:	REFERENCE_OBJ.outputAnimationCallbacks,
		begin:		"easing",
	},
	animateGraphUsingArrayOfObjects: {
		criteria:	"aniGrphArr",
		question: 	"Have your animated a graph using data from your array of objects?",
		example:	"This is an independent challenge. \nHINT: Inside each row of your\n" + 
					"table you need to add a span with a background color. Each of these\n" + 
					"spans needs to have a unique id in order to be animated. Consider\n" + 
					"using i from the loop in order to create the id, like:\n" + 
					"'animate' + i + 'Id'.",
		reference:	REFERENCE_OBJ.none,
		begin:		"[+]",
	},

	animateLeftJQuery: {
		criteria:	"leftJQuery",
		question: 	"Did you use jQuery to animate something LEFT?",
		example:	'$( "#animateId" ).animate( { left: "-=50px" }, , { duration: 400, easing: "linear" } ); ',
		reference:	REFERENCE_OBJ.outputAnimateJQuery,
		begin:		"[.]animate[(]",
		end: 		"left[:]"
	},
	animateJQuery: {
		criteria:	"animateJQ",
		question: 	"Did you use jQuery to animate something?",
		example:	'$( "#animateId" ).animate( { left: "+=50px" }, { duration: 400, easing: "linear" } ); ',
		reference:	REFERENCE_OBJ.outputAnimateJQuery,
		begin:		"[.]animate",
		end: 		"[)]"
	},
	animateMultipleJQuery: {
		criteria:	"manyJQuery",
		question: 	"Did you use jQuery to animate multiple qualities at once?",
		example:	"$( '#exampleId' ).animate( " + 
					'	{' +
					'		top:		"-=250px",	// half the change in height\n' +
					'		left:		"-=250px",  // half the change in width\n' +
					'		width: 		500 + "px",\n' +
					'		opacity:	1\n' +
					'	}\n' +
					');\n',
		reference:	REFERENCE_OBJ.outputOtherJQuery,
		begin:		"[.]animate[(]",
		end:		"[}]"
	},
	animateOpacity: {
		criteria:	"anim8Opcty",
		question: 	"Did you use jQuery to animate the opacity of something?",
		example:	'$( "#exampleId" ).animate( { opacity: 0 } );',
		reference:	REFERENCE_OBJ.outputOtherJQuery,
		begin:		"[.]animate[(]",
	//	end: 		"[)]"
		end:		"opacity"
	},
	animateOtherJQuery: {
		criteria:	"cssJQuery",
		question: 	"Did you use jQuery to animate something besides movement?",
		example:	'$( "#exampleId" ).animate( { borderWidth: 40 + "px" } );\n' +
					'$( "#exampleId" ).animate( { fontSize: 40 + "px" } );\n' +
					'$( "#exampleId" ).animate( { width: "+=40px" } );\n' +
					'$( "#exampleId" ).animate( { height: "+=40px" } );\n' +
					'$( "#exampleId" ).animate( { opacity: 0 } );\n' +
					'$( "#exampleId" ).animate( { opacity: 1 } );\n',
		reference:	REFERENCE_OBJ.outputOtherJQuery,
		begin:		"[.]animate[(]",
		end:		"[}]"
	},	
	animateUpJQuery: {
		criteria:	"upJQuery",
		question: 	"Did you use jQuery to animate something UP?",
		example:	'$( "#animateId" ).animate( { top: "-=50px" }, , { duration: 400, easing: "linear" } ); ',
		reference:	REFERENCE_OBJ.outputAnimateJQuery,
		begin:		"[.]animate[(]",
		end: 		"top[:]"
	},

	animateRightJQuery: {
		criteria:	"rightJQuery",
		question: 	"Did you use jQuery to animate something RIGHT?",
		example:	'$( "#animateId" ).animate( { left: "+=50px" }, , { duration: 400, easing: "linear" } ); ',
		reference:	REFERENCE_OBJ.outputAnimateJQuery,
		begin:		"[.]animate[(]",
		end: 		"left[:]"
	},
	animateWidth: {
		criteria:	"anim8Width",
		question: 	"Did you use jQuery to animate the width of something?",
		example:	'$( "#exampleId" ).animate( { width: "+=40px" } );',
		reference:	REFERENCE_OBJ.outputOtherJQuery,
		begin:		"[.]animate[(]",
	//	end: 		"[)]"
		end:		"width"
	},
	appendChild: {
		criteria:	"appendChild",
		question: 	"Did you display things in your page using appendChild?",
		example:	"document.getElementById( 'outputId' ).appendChild( newElement );",
		reference:	REFERENCE_OBJ.outputAddingElements,
		begin:		"[.]appendChild",
	},	
	backgroundColor: {
		criteria:	"JsBgColor",
		question: 	"Did you change the background colour using javascript?",
		example:	"document.getElementById( 'exampleId' ).style.backgroundColor = 'pink';",
		reference:	REFERENCE_OBJ.outputChangeTextStyles,
		begin:		"[.]style[.]backgroundColor",
	},
	borderOrWidth: {
		criteria:	"JsBrdrWdth",
		question: 	"Did you change the border or width using javascript?",
		example:	"document.getElementById( 'exampleId' ).style.border 	= '1px solid black';\n" + 
					"document.getElementById( 'exampleId' ).style.width		= '200px';",
		reference:	REFERENCE_OBJ.outputChangeTextStyles,
		begin:		"[.]style[.]border|[.]style[.]width",
	},
	color: {
		criteria:	"JsColor",
		question: 	"Did you change text colour using javascript?",
		example:	"document.getElementById( 'exampleId' ).style.color = 'red'; ",
		reference:	REFERENCE_OBJ.outputChangeTextStyles,
		begin:		"[.]style[.]color",
	},
	colorOrbackgroundColor: {
		criteria:	"JsColorBck",
		question: 	"Did you change the text or background colour using javascript?",
		example:	"document.getElementById( 'exampleId' ).style.backgroundColor " + 
					"= 'pink';\n" + 
					"document.getElementById( 'exampleId' ).style.color = 'red'; ",
		reference:	REFERENCE_OBJ.outputChangeTextStyles,
		begin:		"[.]style[.]backgroundColor|[.]style[.]color",
	},
	changeSrcOrStyle: {
		criteria:	"srcOrStyle",
		question: 	"Did you change the src, width, or other style of an element using javascript?",
		example:	"document.getElementById( 'exampleId' ).src " + 
					"= 'http://twagley.github.io/CP12/img/pacman/pacmanBigRight0.png';\n" + 
					"document.getElementById( 'exampleId' ).style.width = width + 'px'; ",
		reference:	REFERENCE_OBJ.outputChangeTextStyles,
		begin:		"[.]style[.]|[.]src",
	},
	console: {
		criteria:	"console",
		question: 	"Did you send a message to the developer's console log?",
		example:	"console.log( 'in mainProcedure...' );",
		reference:	REFERENCE_OBJ.outputAlertInnerHtmlAndConsoleLog,
		begin:		"console[.]log",
	},
	fontSize: {
		criteria:	"JsFontSize",
		question: 	"Did you change the size of a font using Javascript?",
		example:	"document.getElementById( 'exampleId' ).style.fontSize = '20px';",
		reference:	REFERENCE_OBJ.outputChangeTextStyles,
		begin:		"[.]style[.]fontSize",
	},
	fontStyle: {
		criteria:	"JsFntStyle",
		question: 	"Did you make text italic using Javascript?",
		example:	"document.getElementById( 'exampleId ').style.fontStyle = 'italic';\n" + 
					"	OR\n" + 
					"document.getElementById( 'exampleId ').style.fontStyle = 'normal';",
		reference:	REFERENCE_OBJ.outputChangeTextStyles,
		begin:		"[.]style[.]fontStyle",
	},
	fontWeight : {
		criteria:	"JsFontWt",
		question: 	"Did you make some text bold using Javascript?",
		example:	"document.getElementById( 'exampleId' ).style.fontWeight = 'bold';\n" +
					"	OR\n" + 
					"document.getElementById( 'exampleId ').style.fontWeight = 'normal';",
		reference:	REFERENCE_OBJ.outputChangeTextStyles,
		begin:		"[.]style[.]fontWeight",
	},	
	fontStyleOrWeight : {
		criteria:	"JsFntStlWt",
		question: 	"Did you make some text bold or italic using Javascript?",
		example:	"document.getElementById( 'exampleId ').style.fontStyle = 'italic';\n" + 
					"document.getElementById( 'exampleId ').style.fontStyle = 'normal';\n" + 
					"document.getElementById( 'exampleId' ).style.fontWeight = 'bold';\n" +
					"document.getElementById( 'exampleId ').style.fontWeight = 'normal';",
		reference:	REFERENCE_OBJ.outputChangeTextStyles,
		begin:		"[.]style[.]fontStyle|[.]style[.]fontWeight",
	},
	innerHTML: {
		criteria:	"innerHTML",
		question: 	"Did you display things in your page using innerHTML?",
		example:	"document.getElementById( 'exampleId' ).innerHTML = 'Hello!';",
		reference:	REFERENCE_OBJ.outputAlertInnerHtmlAndConsoleLog,
		begin:		"[.]innerHTML",
	},	
	imagesUsingAnArrayOfObjects: {
		criteria:	"imgArrObj",
		question: 	"Have you output different images using an array of arrays?",
		example:	"This is an independent challenge. \nHINT: add an image source to each\n" + 
					"object. Then create code that creates an image with a link to that\n" + 
					"image source inside the loop that creates your table row code.\n",
		reference:	REFERENCE_OBJ.none,
		begin:		"img",
		end:		"src"
	},
	left: {
		criteria:	"JsLeft",
		question: 	"Have you changed the left position of something using Javascript?",
		example:	"document.getElementById( 'exampleId' ).style.left = '100px'; ",
		reference:	REFERENCE_OBJ.outputChangePosition,
		begin:		"[.]style[.]left",
	},
	percentNotPixels: {
		criteria:	"posPercent",
		question: 	"Did you position an object using % instead of px?",
		example:	'$( "#exampleId" ).animate( { left: "30%" } );',
		reference:	REFERENCE_OBJ.outputOtherJQuery,
		begin:		"[%]",
	},
	playAudio: {
		criteria:	"playAudio",
		question: 	"Did you use javascript to play an audio file?",
		example:	'document.getElementById( "audioId" ).play();',
		reference:	REFERENCE_OBJ.outputAddingAndPlayingAudio,
		begin:		"[.]play",
	},
	src: {
		criteria:	"src",
		question: 	"Did you change the source of an image using Javascript?",
		example:	"document.getElementById( 'imageId' ).src = 'http://link.to/my/image.jpg';",
		reference:	REFERENCE_OBJ.outputChangeAnImage,
		begin:		"[.]src",
	},
	style: {
		criteria:	"style",
		question: 	"Did you change the style of something using Javascript? (Except top or left)",
		example:	"document.getElementById( 'imageId' ).style.color = 'red';",
		reference:	REFERENCE_OBJ.outputChangeTextStyles,
		begin:		"[.]style[.]",
	},
	top: {
		criteria:	"JsTop",
		question: 	"Have you changed the top position of something using Javascript?",
		example:	"document.getElementById( 'exampleId' ).style.top = '100px'; ",
		reference:	REFERENCE_OBJ.outputChangePosition,
		begin:		"[.]style[.]top",
	},
	topOrLeft: {
		criteria:	"JsTopOrLft",
		question: 	"Did you change the top or left location of things using Javascript?",
		example:	"document.getElementById( 'exampleId' ).style.top 	= '10px';\n" + 
					"document.getElementById( 'exampleId' ).style.left 	= '20px';",
		reference:	REFERENCE_OBJ.outputChangeElementPosition,
		begin:		"[.]style[.]top|[.]style[.]left",
	},
	visibility: {
		criteria:	"JsVisiblty",
		question: 	"Did you make something visible or invisible using Javascript?",
		example:	"document.getElementById( 'exampleId' ).style.visibility = 'hidden';\n" + 
					"	OR\n" + 
					"document.getElementById( 'exampleId' ).style.visibility = 'visible';\n",
		reference:	REFERENCE_OBJ.outputChangeTextStyles,
		begin:		"[.]style[.]visibility",
	},

	output: {
		criteria:	"",
		question: 	"",
		example:	"",
		reference:	REFERENCE_OBJ.outputChangeTextStyles,
		begin:		"",
	},
};
