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
//				20. October 2018	- tweaked criteria for 2.07						- Drapak
//				3. Nov 2018			- added 2.10 and 2.11							- Drapak
//				13. Nov 2018		- added 2.12 and 2.13 and 2.14					- Drapak
//				1. Jan 2019			- finishing 3.09								- Drapak
//				6. Jan 2019			- fixed 3.09 and added 4.02						- Drapak
//				29. Jan 2019		- changed order of skills for exam checklist	- Drapak
//									- added structure array to exam					- Drapak
//				Sept 6 2026			- Changed drapak.ca/cpg links to twagley.github.io/CP12	- Wagley

	
//INIT: set up the array of project objects
const PROJECT_ARR = [
	{
		project:		"HelloWorld",
		filename: 		"HelloWorld-LastName.html",
		title:			"1.01 Skill-builder: Hello world!",
		url:			"http://twagley.github.io/CP12/HelloWorld.shtml",
		skillBuilder:	false,
		evaluationObj:	{
			htmlCSSArr:	[
				HTML_CSS_OBJ.heading,
				HTML_CSS_OBJ.paragraph,
				HTML_CSS_OBJ.strong,
				HTML_CSS_OBJ.link,
				HTML_CSS_OBJ.image,
			], 
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.styleBlock,
				STYLE_OBJ.scriptBlock
			]
		}
	},
	
	{
		project:		"SurveyLists",
		filename: 		"1.02S-SurveyLists-LastName.html",
		title:			"1.02 Skill-builder: Survey Lists",
		url:			"http://twagley.github.io/CP12/Lists.shtml",
		skillBuilder:	true,
		evaluationObj:	{
			htmlCSSArr:	[
				HTML_CSS_OBJ.heading,
				HTML_CSS_OBJ.unorderedOrderedList,
				HTML_CSS_OBJ.listItem,
			], 
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.styleBlock,
			]
		}
	},
		
	{
		project:		"DataTypes",
		filename: 		"1.03S-DataTypes-LastName.html",
		title:			"1.03 Skill-builder: Datatypes and Tables",
		url:			"http://twagley.github.io/CP12/DataTypes.shtml",
		skillBuilder:	true,
		evaluationObj:	{
			htmlCSSArr:	[
				HTML_CSS_OBJ.table,
				HTML_CSS_OBJ.tableHead,
				HTML_CSS_OBJ.tableBody,
				HTML_CSS_OBJ.tableRow,
				HTML_CSS_OBJ.tableHeader,
				HTML_CSS_OBJ.tableData,
			], 
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.styleBlock,
				STYLE_OBJ.scriptBlock,
			]
		}
	},
	
	{
		project:		"OttoTheRobot",
		filename: 		"1.04H-OttoTheRobot-LastName.html",
		title:			"1.04 Hand-in: Otto the Robot",
		url:			"http://twagley.github.io/CP12/OttoTheRobot.shtml",
		skillBuilder:	false,
		evaluationObj:	{
			htmlCSSArr:	[
				HTML_CSS_OBJ.heading,
				HTML_CSS_OBJ.paragraph,
				HTML_CSS_OBJ.strong,
				HTML_CSS_OBJ.image,
				HTML_CSS_OBJ.unorderedOrderedList,
				
				HTML_CSS_OBJ.listItem,
				HTML_CSS_OBJ.table,
				HTML_CSS_OBJ.tableRow,
				HTML_CSS_OBJ.tableHeader,
				HTML_CSS_OBJ.tableData,
			], 
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.styleBlock,
				STYLE_OBJ.scriptBlock,
				STYLE_OBJ.lowercaseHTMLTags
			]
		}
	},
	
	{
		project:		"HelloColor",
		filename: 		"1.05S-HelloColor-LastName.html",
		title:			"1.05 Skill builder: Hello color",
		url:			"http://twagley.github.io/CP12/TextFormatting.shtml",
		skillBuilder:	true,
		evaluationObj:	{
			htmlCSSArr:	[
				HTML_CSS_OBJ.colorCSS,
				HTML_CSS_OBJ.backgroundColorCSS,
				HTML_CSS_OBJ.fontFamilyCSS,
				HTML_CSS_OBJ.fontSizeCSS,
				HTML_CSS_OBJ.fontStyleCSS,
				HTML_CSS_OBJ.fontWeightCSS,
				HTML_CSS_OBJ.borderCSS,
				HTML_CSS_OBJ.widthCSS,
			], 
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.styleBlock,
				STYLE_OBJ.scriptBlock,
				STYLE_OBJ.lowercaseHTMLTags
			]
		}
	},
	
	{
		project:		"ConstructAPicture",
		filename: 		"1.06S-ConstructAPicture-LastName.html",
		title:			"1.06 Skill-builder: Construct a picture",
		url:			"http://twagley.github.io/CP12/ConstructAPicture.shtml",
		skillBuilder:	true,
		evaluationObj:	{
			htmlCSSArr:	[
				HTML_CSS_OBJ.positionCSS,
				HTML_CSS_OBJ.topCSS,
				HTML_CSS_OBJ.leftCSS,
				HTML_CSS_OBJ.widthHeightCSS,
			], 
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.styleBlock,
				STYLE_OBJ.scriptBlock,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle
			]
		}
	},
	
	{
		project:		"AnimateMario",
		filename: 		"1.07X-AnimateMario-LastName.html",
		title:			"1.07 EXTRA: Animate Mario",
		url:			"http://twagley.github.io/CP12/AnimateMario.shtml",
		skillBuilder:	true,
		evaluationObj:	{
			htmlCSSArr:	[
				HTML_CSS_OBJ.keyframesCSS,
				HTML_CSS_OBJ.animationNameCSS,
			], 
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.styleBlock,
				STYLE_OBJ.scriptBlock,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines
			]
		}
	},	
	
	{
		project:		"AnimateMario",
		filename: 		"1.07S-AnimateMario-LastName.html",
		title:			"1.07 EXTRA: Animate Mario",
		url:			"http://twagley.github.io/CP12/AnimateMario.shtml",
		skillBuilder:	true,
		evaluationObj:	{
			htmlCSSArr:	[
				HTML_CSS_OBJ.keyframesCSS,
				HTML_CSS_OBJ.animationNameCSS,
			], 
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.styleBlock,
				STYLE_OBJ.scriptBlock,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines
			]
		}
	},
	
	{
		project:		"MakeAGameBoard",
		filename: 		"1.08H-MakeAGameBoard-LastName.html",
		title:			"1.08 Hand-in: Make a game board",
		url:			"http://twagley.github.io/CP12/MakeAGameBoard.shtml",
		skillBuilder:	false,
		evaluationObj:	{
			htmlCSSArr:	[
				HTML_CSS_OBJ.span,
				HTML_CSS_OBJ.div,
				HTML_CSS_OBJ.heading,
				HTML_CSS_OBJ.table,
				HTML_CSS_OBJ.listItemParagraph,

				HTML_CSS_OBJ.tagCSS,
				HTML_CSS_OBJ.idCSS,
				HTML_CSS_OBJ.classCSS,
				HTML_CSS_OBJ.colorOpacityCSS,
				HTML_CSS_OBJ.backgroundColorCSS,
				HTML_CSS_OBJ.fontSizeCSS,
				HTML_CSS_OBJ.fontFamilyStyleWeightCSS,
				HTML_CSS_OBJ.widthHeightCSS,
				HTML_CSS_OBJ.borderCSS,
				HTML_CSS_OBJ.positionCSS,
				HTML_CSS_OBJ.topLeftCSS,
				HTML_CSS_OBJ.zIndexCSS,
				HTML_CSS_OBJ.animationNameCSS,
			], 
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				//STYLE_OBJ.styleBlock,
				//STYLE_OBJ.scriptBlock,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead
			]
		},
		evaluationMessageObj: {
			htmlCSSArr:	
				"including <strong>All five HTML options</strong><br>" + 
				"and <strong>ANY TEN</strong> of the CSS options.<br>"
				+ "All CSS code should be inside the <code>&lt;style></code> block.", 
			styleArr: 
				"honouring all //STYLE sections to date, including:",
		},
	},
	
	{
		project:		"HelloJavascript",
		filename: 		"2.01S-HelloJavascript-LastName.html",
		title:			"2.01 Skill-builder: Hello Javascript!",
		url:			"http://twagley.github.io/CP12/HelloJavascript.shtml",
		skillBuilder:	true,
		evaluationObj:	{
			htmlCSSArr:	[
				HTML_CSS_OBJ.spanDiv,
				HTML_CSS_OBJ.button,
			], 
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
			//	STYLE_OBJ.styleBlock,
			//	STYLE_OBJ.scriptBlock,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead
			],
			inputArr:	[
				INPUT_OBJ.onclick,
				INPUT_OBJ.onload,
			],
			outputArr:	[
				OUTPUT_OBJ.alert,
				OUTPUT_OBJ.console,
				OUTPUT_OBJ.innerHTML,
			]
		}
	},
	
	{
		project:		"ColorChanger",
		filename: 		"2.02S-ColorChanger-LastName.html",
		title:			"2.02 Skill-builder: Color changer",
		url:			"http://twagley.github.io/CP12/colorChanger.shtml",
		skillBuilder:	true,
		evaluationObj:	{
			htmlCSSArr:	[
				HTML_CSS_OBJ.button,
				HTML_CSS_OBJ.inputText,
				HTML_CSS_OBJ.textarea,
			], 
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
			//	STYLE_OBJ.styleBlock,
			//	STYLE_OBJ.scriptBlock,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead
			],
			inputArr:	[
				INPUT_OBJ.onclick,
				INPUT_OBJ.onchange,
				INPUT_OBJ.value,
			],
			outputArr:	[
				OUTPUT_OBJ.color,
				OUTPUT_OBJ.backgroundColor,
			//	OUTPUT_OBJ.fontSize,
			//	OUTPUT_OBJ.fontStyle,
			//	OUTPUT_OBJ.fontWeight,
			//	OUTPUT_OBJ.visibility,
			]
		}
	},
	
	{
		project:		"Modals",
		filename: 		"2.03X-Modals-LastName.html",
		title:			"2.03 EXTRA: Modals",
		url:			"http://twagley.github.io/CP12/Modals.shtml",
		skillBuilder:	true,
		evaluationObj:	{
			htmlCSSArr:	[
				HTML_CSS_OBJ.spanDiv,
				HTML_CSS_OBJ.button,
				HTML_CSS_OBJ.inputText,
			//	HTML_CSS_OBJ.textarea,
			], 
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead
			],
			inputArr:	[
				INPUT_OBJ.onclick,
			],
			outputArr:	[
				OUTPUT_OBJ.visibility,
			]
		}
	},
	
	{
		project:		"FormulaSolver",
		filename: 		"2.04S-FormulaSolver-LastName.html",
		title:			"2.04 Skill-builder: Formula solver",
		url:			"http://twagley.github.io/CP12/FormulaSolver.shtml",
		skillBuilder:	true,
		
		evaluationObj:	{
			htmlCSSArr:	[
			//	HTML_CSS_OBJ.spanDiv,
				HTML_CSS_OBJ.button,
				HTML_CSS_OBJ.inputText,
			//	HTML_CSS_OBJ.textarea,
			], 
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
				
			],
			initArr: [
				INIT_OBJ.var,
			],
			inputArr:	[
				INPUT_OBJ.onclick,
				INPUT_OBJ.onchange,
				INPUT_OBJ.value,
			],
			processArr: [
				PROCESS_OBJ.mathBasic,
			//	PROCESS_OBJ.mathPow,
			//	PROCESS_OBJ.mathSqr,
			//	PROCESS_OBJ.mathTrig,
			//	PROCESS_OBJ.mathPI,
				
				PROCESS_OBJ.parseIntOrFloat,
			],
			outputArr:	[
				OUTPUT_OBJ.innerHTML,
			]
		}
	},
	
	{
		project:		"CakeyClicker",
		filename: 		"2.04H-CakeyClicker-LastName.html",
		title:			"2.05 Hand-in: Cakey Clicker",
		url:			"http://twagley.github.io/CP12/CakeyClicker.shtml",
		skillBuilder:	false,
		
		evaluationObj:	{
			htmlCSSArr:	[
				HTML_CSS_OBJ.span,
				HTML_CSS_OBJ.heading,
				HTML_CSS_OBJ.table,
				HTML_CSS_OBJ.div,
				HTML_CSS_OBJ.listItem,
				HTML_CSS_OBJ.paragraph,
				
				HTML_CSS_OBJ.tagCSS,
				HTML_CSS_OBJ.idOrClassCSS,
				HTML_CSS_OBJ.classCSS,
				HTML_CSS_OBJ.colorOpacityBackgroundCSS,
				HTML_CSS_OBJ.fontSizeCSS,
				HTML_CSS_OBJ.fontFamilyStyleWeightCSS,
				HTML_CSS_OBJ.widthCSS,
				HTML_CSS_OBJ.textOrVerticalAlignCSS,
				HTML_CSS_OBJ.positionCSS,
				HTML_CSS_OBJ.topCSS,
				HTML_CSS_OBJ.leftCSS,
				HTML_CSS_OBJ.visibilityOrDisplayCSS, 
				HTML_CSS_OBJ.marginLeftOrRightCSS,
			], 
			inputArr:	[
				HTML_CSS_OBJ.textarea,
				HTML_CSS_OBJ.inputText,
				HTML_CSS_OBJ.button,
				INPUT_OBJ.onclick,
				INPUT_OBJ.onchange,
			],
			processArr: [
				INPUT_OBJ.value,
				INIT_OBJ.var,
				PROCESS_OBJ.mathBasic,				
				PROCESS_OBJ.parseIntOrFloat,
			],
			outputArr:	[
				OUTPUT_OBJ.colorOrbackgroundColor,
				OUTPUT_OBJ.fontStyleOrWeight,
				OUTPUT_OBJ.fontSize,
				OUTPUT_OBJ.topOrLeft,	
				OUTPUT_OBJ.borderOrWidth,		
			
				OUTPUT_OBJ.innerHTML,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
			],
		},
		
		evaluationMessageObj: {
			htmlCSSArr:	
				"including <strong>ANY TEN</strong> of the following.<br>"
				+ "All CSS code should be inside the <code>&lt;style></code> block.", 
			inputArr:
				"including <strong>ANY FOUR</strong> of:",
			processArr: 
				"including:",
			outputArr:
				"including <strong>ANY FOUR</strong> of the following.<br>" 
				+ "All output code should be in the &lt;script> block.",
			styleArr: 
				"honouring all //STYLE sections to date, including:",
		},
	},
		{
		project:		"CakeyClicker",
		filename: 		"2.05H-CakeyClicker-LastName.html",
		title:			"2.05 Hand-in: Cakey Clicker",
		url:			"http://twagley.github.io/CP12/CakeyClicker.shtml",
		skillBuilder:	false,
		
		evaluationObj:	{
			htmlCSSArr:	[
				HTML_CSS_OBJ.span,
				HTML_CSS_OBJ.heading,
				HTML_CSS_OBJ.table,
				HTML_CSS_OBJ.div,
				HTML_CSS_OBJ.listItem,
				HTML_CSS_OBJ.paragraph,
				
				HTML_CSS_OBJ.tagCSS,
				HTML_CSS_OBJ.idOrClassCSS,
				HTML_CSS_OBJ.classCSS,
				HTML_CSS_OBJ.colorOpacityBackgroundCSS,
				HTML_CSS_OBJ.fontSizeCSS,
				HTML_CSS_OBJ.fontFamilyStyleWeightCSS,
				HTML_CSS_OBJ.widthCSS,
				HTML_CSS_OBJ.textOrVerticalAlignCSS,
				HTML_CSS_OBJ.positionCSS,
				HTML_CSS_OBJ.topCSS,
				HTML_CSS_OBJ.leftCSS,
				HTML_CSS_OBJ.visibilityOrDisplayCSS, 
				HTML_CSS_OBJ.marginLeftOrRightCSS,
			], 
			inputArr:	[
				HTML_CSS_OBJ.textarea,
				HTML_CSS_OBJ.inputText,
				HTML_CSS_OBJ.button,
				INPUT_OBJ.onclick,
				INPUT_OBJ.onchange,
			],
			processArr: [
				INPUT_OBJ.value,
				INIT_OBJ.var,
				PROCESS_OBJ.mathBasic,				
				PROCESS_OBJ.parseIntOrFloat,
			],
			outputArr:	[
				OUTPUT_OBJ.colorOrbackgroundColor,
				OUTPUT_OBJ.fontStyleOrWeight,
				OUTPUT_OBJ.fontSize,
				OUTPUT_OBJ.topOrLeft,	
				OUTPUT_OBJ.borderOrWidth,		
			
				OUTPUT_OBJ.innerHTML,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
			],
		},
		
		evaluationMessageObj: {
			htmlCSSArr:	
				"including <strong>ANY TEN</strong> of the following.<br>"
				+ "All CSS code should be inside the <code>&lt;style></code> block.", 
			inputArr:
				"including <strong>ANY FOUR</strong> of:",
			processArr: 
				"including:",
			outputArr:
				"including <strong>ANY FOUR</strong> of the following.<br>" 
				+ "All output code should be in the &lt;script> block.",
			styleArr: 
				"honouring all //STYLE sections to date, including:",
		},
	},
	{
		project:		"FontStyleConsole",
		filename: 		"2.04H-FontStyleConsole-LastName.html",
		title:			"2.05 Hand-in: Font style console",
		url:			"http://twagley.github.io/CP12/FontStyleConsole.shtml",
		skillBuilder:	false,
		
		evaluationObj:	{
			htmlCSSArr:	[
				HTML_CSS_OBJ.span,
				HTML_CSS_OBJ.heading,
				HTML_CSS_OBJ.table,
				HTML_CSS_OBJ.div,
				HTML_CSS_OBJ.listItem,
				HTML_CSS_OBJ.paragraph,
				
				HTML_CSS_OBJ.tagCSS,
				HTML_CSS_OBJ.idOrClassCSS,
				HTML_CSS_OBJ.classCSS,
				HTML_CSS_OBJ.colorOpacityBackgroundCSS,
				HTML_CSS_OBJ.fontSizeCSS,
				HTML_CSS_OBJ.fontFamilyStyleWeightCSS,
				HTML_CSS_OBJ.widthCSS,
				HTML_CSS_OBJ.textOrVerticalAlignCSS,
				HTML_CSS_OBJ.positionCSS,
				HTML_CSS_OBJ.topCSS,
				HTML_CSS_OBJ.leftCSS,
				HTML_CSS_OBJ.visibilityOrDisplayCSS, 
				HTML_CSS_OBJ.marginLeftOrRightCSS,
			], 
			inputArr:	[
				HTML_CSS_OBJ.textarea,
				HTML_CSS_OBJ.inputText,
				HTML_CSS_OBJ.button,
				INPUT_OBJ.onclick,
				INPUT_OBJ.onchange,
			],
			processArr: [
				INPUT_OBJ.value,
				INIT_OBJ.var,
				PROCESS_OBJ.mathBasic,				
				PROCESS_OBJ.parseIntOrFloat,
			],
			outputArr:	[
				OUTPUT_OBJ.colorOrbackgroundColor,
				OUTPUT_OBJ.fontStyleOrWeight,
				OUTPUT_OBJ.fontSize,
				OUTPUT_OBJ.topOrLeft,	
				OUTPUT_OBJ.borderOrWidth,		
			
				OUTPUT_OBJ.innerHTML,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
			],
		},
		
		evaluationMessageObj: {
			htmlCSSArr:	
				"including <strong>ANY TEN</strong> of the following.<br>"
				+ "All CSS code should be inside the <code>&lt;style></code> block.", 
			inputArr:
				"including <strong>ANY FOUR</strong> of:",
			processArr: 
				"including:",
			outputArr:
				"including <strong>ANY FOUR</strong> of the following.<br>" 
				+ "All output code should be in the &lt;script> block.",
			styleArr: 
				"honouring all //STYLE sections to date, including:",
		},
	},
	{
		project:		"FontStyleConsole",
		filename: 		"2.05H-FontStyleConsole-LastName.html",
		title:			"2.05 Hand-in: Font style console",
		url:			"http://twagley.github.io/CP12/FontStyleConsole.shtml",
		skillBuilder:	false,
		
		evaluationObj:	{
			htmlCSSArr:	[
				HTML_CSS_OBJ.span,
				HTML_CSS_OBJ.heading,
				HTML_CSS_OBJ.table,
				HTML_CSS_OBJ.div,
				HTML_CSS_OBJ.listItem,
				HTML_CSS_OBJ.paragraph,
				
				HTML_CSS_OBJ.tagCSS,
				HTML_CSS_OBJ.idOrClassCSS,
				HTML_CSS_OBJ.classCSS,
				HTML_CSS_OBJ.colorOpacityBackgroundCSS,
				HTML_CSS_OBJ.fontSizeCSS,
				HTML_CSS_OBJ.fontFamilyStyleWeightCSS,
				HTML_CSS_OBJ.widthCSS,
				HTML_CSS_OBJ.textOrVerticalAlignCSS,
				HTML_CSS_OBJ.positionCSS,
				HTML_CSS_OBJ.topCSS,
				HTML_CSS_OBJ.leftCSS,
				HTML_CSS_OBJ.displayCSS, 
				HTML_CSS_OBJ.marginLeftOrRightCSS,
			], 
			inputArr:	[
				HTML_CSS_OBJ.textarea,
				HTML_CSS_OBJ.inputText,
				HTML_CSS_OBJ.button,
				INPUT_OBJ.onclick,
				INPUT_OBJ.onchange,
			],
			processArr: [
				INPUT_OBJ.value,
				INIT_OBJ.var,
				PROCESS_OBJ.mathBasic,				
				PROCESS_OBJ.parseIntOrFloat,
			],
			outputArr:	[
				OUTPUT_OBJ.colorOrbackgroundColor,
				OUTPUT_OBJ.fontStyleOrWeight,
				OUTPUT_OBJ.fontSize,
				OUTPUT_OBJ.topOrLeft,	
				OUTPUT_OBJ.borderOrWidth,		
			
				OUTPUT_OBJ.innerHTML,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
			],
		},
		
		evaluationMessageObj: {
			htmlCSSArr:	
				"including <strong>ANY TEN</strong> of the following.<br>"
				+ "All CSS code should be inside the <code>&lt;style></code> block.", 
			inputArr:
				"including <strong>ANY FOUR</strong> of:",
			processArr: 
				"including:",
			outputArr:
				"including <strong>ANY FOUR</strong> of the following.<br>" 
				+ "All output code should be in the &lt;script> block.",
			styleArr: 
				"honouring all //STYLE sections to date, including:",
		},
	},
	{
		project:		"MoveThingsWithButtons",
		filename: 		"2.06S-MoveThingsWithButtons-LastName.html",
		title:			"2.06 Skill-builder: Move things with buttons",
		url:			"http://twagley.github.io/CP12/MoveThingsWithButtons.shtml",
		skillBuilder:	true,
		
		evaluationObj:	{
			htmlCSSArr:	[
				HTML_CSS_OBJ.image,
				HTML_CSS_OBJ.inputText,
				HTML_CSS_OBJ.button,
			], 
			inputArr:	[
				INPUT_OBJ.onclick,
				INPUT_OBJ.value,
				INPUT_OBJ.offsetTop,
				INPUT_OBJ.offsetLeft,
			],
			processArr: [
				INIT_OBJ.var,			
				PROCESS_OBJ.parseIntOrFloat,
			],
			outputArr:	[
				OUTPUT_OBJ.topOrLeft,			
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
			],
		}
	},
	{
		project:		"DefuseTheBomb",
		filename: 		"2.07S-DefuseTheBomb-LastName.html",
		title:			"2.07 Skill-builder: Defuse the Bomb!",
		url:			"http://twagley.github.io/CP12/DefuseTheBomb.shtml",
		skillBuilder:	true,
		
		evaluationObj:	{
			
			htmlCSSArr:	[
				HTML_CSS_OBJ.image,
				HTML_CSS_OBJ.inputText,
				HTML_CSS_OBJ.button,
				
			], 
			inputArr:	[
				INPUT_OBJ.onclick,
				INPUT_OBJ.onchange,
			],
			processArr: [		
				PROCESS_OBJ.ifElse,			
			],
			outputArr:	[
				OUTPUT_OBJ.innerHTML,
				OUTPUT_OBJ.src,			
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
			],
		}
	},	
	{
		project:		"KeyboardReader",
		filename: 		"2.08S-KeyboardReader-LastName.html",
		title:			"2.08 Skill-builder: Keyboard reader",
		url:			"http://twagley.github.io/CP12/KeyboardReader.shtml",
		skillBuilder:	true,
		
		evaluationObj:	{
			htmlCSSArr:	[
				HTML_CSS_OBJ.span,
				HTML_CSS_OBJ.paragraph,
				HTML_CSS_OBJ.unicode,
			], 
			inputArr:	[
				INPUT_OBJ.onkeydown,
				INPUT_OBJ.keyCode,
			],
			processArr: [
				INIT_OBJ.var,			
				PROCESS_OBJ.ifElse,
				PROCESS_OBJ.stringAdd
			],
			outputArr:	[
				OUTPUT_OBJ.innerHTML,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
			],
		}
	},
	{
		project:		"KeyboardMotionControl",
		filename: 		"2.09H-KeyboardMotionControl-LastName.html",
		title:			"2.09 Hand-in: Keyboard motion control",
		url:			"http://twagley.github.io/CP12/KeyboardMotionControl.shtml",
		skillBuilder:	false,
		
		evaluationObj:	{
			inputArr:	[
				INPUT_OBJ.onclick,
				INPUT_OBJ.onchange,
				INPUT_OBJ.onkeydown,
				INPUT_OBJ.keyCode,
				INPUT_OBJ.offsetTop,
				INPUT_OBJ.offsetLeft,
			],
			processArr: [
				INIT_OBJ.var,			
				PROCESS_OBJ.parseIntOrFloat,		
				PROCESS_OBJ.mathBasic,
				PROCESS_OBJ.ifElse,
				PROCESS_OBJ.stringAdd,
				PROCESS_OBJ.upDwnMovmt,
				PROCESS_OBJ.lftRtMovmt,
			],
			outputArr:	[
				HTML_CSS_OBJ.positionCSS,
				OUTPUT_OBJ.top,
				OUTPUT_OBJ.left,
				OUTPUT_OBJ.src,
				OUTPUT_OBJ.innerHTML,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
				//STYLE_OBJ.ifComments, 
				STYLE_OBJ.descriptiveVars,
			],
		},
		
		evaluationMessageObj: {
			inputArr:
				"including <strong>ANY FOUR</strong> of:",
			processArr: 
				"including <strong>ANY FOUR</strong> of:",		
			outputArr:
				"including <strong>ANY FOUR</strong> of:",	
			styleArr: 
				"honouring all //STYLE sections to date, including:",
		},
	},	
	{
		project:		"MoveThingsAroundSmoothly",
		filename: 		"2.10S-MoveThingsAroundSmoothly-LastName.html",
		title:			"2.10 Skill-builder: Move things around smoothly",
		url:			"http://twagley.github.io/CP12/MoveThingsAroundSmoothly.shtml",
		skillBuilder:	true,
		
		evaluationObj:	{
			initArr: [
				INIT_OBJ.jQueryLibrary,
			],
			outputArr:	[
				OUTPUT_OBJ.animateJQuery,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
				//STYLE_OBJ.ifComments, 
				STYLE_OBJ.descriptiveVars,
			],
		},
	},	
	{
		project:		"RollSomeDice",
		filename: 		"2.11S-RollSomeDice-LastName.html",
		title:			"2.11 Skill-builder: Roll some dice",
		url:			"http://twagley.github.io/CP12/RollSomeDice.shtml",
		skillBuilder:	true,
		
		evaluationObj:	{
			initArr: [
				INIT_OBJ.var,
			],	
			inputArr:	[
				INPUT_OBJ.onmouseover,
			],
			processArr: [
				PROCESS_OBJ.ifElse,
				PROCESS_OBJ.random,
			],			
			outputArr:	[
				OUTPUT_OBJ.src,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
				//STYLE_OBJ.ifComments, 
				STYLE_OBJ.descriptiveVars,
			],
		},
	},	
	{
		project:		"MyBiggestStar",
		filename: 		"2.12S-MyBiggestStar-LastName.html",
		title:			"2.12 Skill-builder: My Biggest Star",
		url:			"http://twagley.github.io/CP12/MyBiggestStar.shtml",
		skillBuilder:	true,
		
		evaluationObj:	{
			initArr: [
				INIT_OBJ.var,
				INIT_OBJ.jQueryLibrary,
			],	
			inputArr:	[
				INPUT_OBJ.onkeydown,
				INPUT_OBJ.keyCode,
			],
			processArr: [
				PROCESS_OBJ.ifElse,
				PROCESS_OBJ.inputFunction,
				PROCESS_OBJ.processFunction,
				PROCESS_OBJ.outputFunction,
			],			
			outputArr:	[
				OUTPUT_OBJ.animateJQuery,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
				//STYLE_OBJ.ifComments, 
				STYLE_OBJ.descriptiveVars,
				STYLE_OBJ.functionalProgramming,
			],
		},
	},	
	{
		project:		"HighOrLow",
		filename: 		"2.13S-HighOrLow-LastName.html",
		title:			"2.13 Skill-builder: High or Low",
		url:			"http://twagley.github.io/CP12/HighOrLow.shtml",
		skillBuilder:	true,
		
		evaluationObj:	{
			initArr: [
				INIT_OBJ.var,
				INIT_OBJ.jQueryLibrary,
			],	
			inputArr:	[
				INPUT_OBJ.onclick,
				INPUT_OBJ.onchange,
			],
			processArr: [
				PROCESS_OBJ.ifElse,
				PROCESS_OBJ.random,
				PROCESS_OBJ.parseIntOrFloat,
				PROCESS_OBJ.inputFunction,
				PROCESS_OBJ.processFunction,
				PROCESS_OBJ.outputFunction,
			],			
			outputArr:	[
				OUTPUT_OBJ.animateJQuery, 
				OUTPUT_OBJ.innerHTML,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
				//STYLE_OBJ.ifComments, 
				STYLE_OBJ.descriptiveVars,
				STYLE_OBJ.functionalProgramming,
			],
		},
	},
	{
		project:		"ShyLinkIsShy",
		filename: 		"2.14H-ShyLinkIsShy-LastName.html",
		title:			"2.14 Hand-in — Shy Link Is Shy",
		url:			"http://twagley.github.io/CP12/ShyLinkIsShy.shtml",
		skillBuilder:	false,
		
		evaluationObj:	{
			htmlCSSArr:	[
				INIT_OBJ.jQueryLibrary,
				HTML_CSS_OBJ.idOrClassCSS,
				HTML_CSS_OBJ.positionCSS,
				INPUT_OBJ.onclick,
				INPUT_OBJ.onkeydown,
				INPUT_OBJ.onmouseover,
				INPUT_OBJ.onmouseout,
				
			], 
			processArr: [

				
				PROCESS_OBJ.functionWithArgument,
				PROCESS_OBJ.functionWithReturn,

				PROCESS_OBJ.random,
				PROCESS_OBJ.ifElse,
				
			//	PROCESS_OBJ.inputFunction,
				PROCESS_OBJ.processFunction,
				PROCESS_OBJ.outputFunction,
			],
			outputArr:	[
				OUTPUT_OBJ.animateUpJQuery,
				OUTPUT_OBJ.animateDownJQuery,
				OUTPUT_OBJ.animateLeftJQuery,
				OUTPUT_OBJ.animateRightJQuery,
				OUTPUT_OBJ.changeSrcOrStyle,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
				//STYLE_OBJ.ifComments, 
				STYLE_OBJ.descriptiveVars,
				STYLE_OBJ.functionalProgramming,
				STYLE_OBJ.useDescriptiveComments,
			],
		},
		
		evaluationMessageObj: {
			htmlCSSArr:
				"including <strong>ANY FIVE</strong> of:",
			processArr: 
				"including <strong>ALL</strong> of:",		
			outputArr:
				"including <strong>ALL</strong> of:",	
			styleArr: 
				"honouring all //STYLE sections to date, including:",
		},
	},	
	{
		project:		"MadLibs",
		filename: 		"3.01S-MadLibs-LastName.html",
		title:			"3.01 Skill-builder: Mad libs",
		url:			"http://twagley.github.io/CP12/MadLibs.shtml",
		skillBuilder:	true,
		
		evaluationObj:	{
			initArr: [
//				INIT_OBJ.var,
				INIT_OBJ.object,
			],	
			inputArr:	[
				INPUT_OBJ.onclick,
//				INPUT_OBJ.onchange,
				INPUT_OBJ.value,
			],
			processArr: [
				PROCESS_OBJ.stringAdd,

				PROCESS_OBJ.functionWithArgument,
				PROCESS_OBJ.functionWithReturn,
				PROCESS_OBJ.inputFunction,
				PROCESS_OBJ.processFunction,
				PROCESS_OBJ.outputFunction,
			],			
			outputArr:	[
				OUTPUT_OBJ.innerHTML,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
				//STYLE_OBJ.ifComments, 
				STYLE_OBJ.descriptiveVars,
				STYLE_OBJ.functionalProgramming,
				STYLE_OBJ.useDescriptiveComments,
			],
		},
	},
	{
		project:		"MakeABarGraph",
		filename: 		"3.02S-MakeABarGraph-LastName.html",
		title:			"3.02 Skill-builder: Make a bar graph",
		url:			"http://twagley.github.io/CP12/MakeABarGraph.shtml",
		skillBuilder:	true,
		
		evaluationObj:	{
			initArr: [
				INIT_OBJ.object,
			],	
			inputArr:	[
				INPUT_OBJ.onclick,
				INPUT_OBJ.value,
			],
			processArr: [
				PROCESS_OBJ.stringAdd,
				PROCESS_OBJ.functionWithArgument,
				PROCESS_OBJ.functionWithReturn,
				PROCESS_OBJ.inputFunction,
				PROCESS_OBJ.processFunction,
				PROCESS_OBJ.outputFunction,
			],			
			outputArr:	[
				OUTPUT_OBJ.borderOrWidth,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
				//STYLE_OBJ.ifComments, 
				STYLE_OBJ.descriptiveVars,
				STYLE_OBJ.functionalProgramming,
				STYLE_OBJ.useDescriptiveComments,
			],
		},
	},
	{
		project:		"GetYourPersonalData",
		filename: 		"3.03X-GetYourPersonalData-LastName.html",
		title:			"3.03 EXTRA: Get your personal data",
		url:			"http://twagley.github.io/CP12/GetYourPersonalData.shtml",
		skillBuilder:	true,
		
		evaluationObj:	{
	
			inputArr:	[
				INIT_OBJ.jQueryLibrary,
				INPUT_OBJ.inputGet,
			],
			processArr: [
				PROCESS_OBJ.functionWithArgument,
				PROCESS_OBJ.inputFunction,
				PROCESS_OBJ.processFunction,
				PROCESS_OBJ.outputFunction,
				//PROCESS_OBJ.JSONStringify,
				PROCESS_OBJ.JSONParse,
			],			
			outputArr:	[
				OUTPUT_OBJ.innerHTML,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
				//STYLE_OBJ.ifComments, 
				STYLE_OBJ.descriptiveVars,
				STYLE_OBJ.functionalProgramming,
				STYLE_OBJ.useDescriptiveComments,
			],
		},
	},
	{
		project:		"Fireworks",
		filename: 		"3.04S-Fireworks-LastName.html",
		title:			"3.04 Skill-builder: Fireworks",
		url:			"http://twagley.github.io/CP12/Fireworks.shtml",
		skillBuilder:	true,
		
		evaluationObj:	{
	
			initArr:	[
				INIT_OBJ.jQueryLibrary,
			],
			processArr: [
				PROCESS_OBJ.functionWithArgument,
				PROCESS_OBJ.processFunction,
				PROCESS_OBJ.outputFunction,
				PROCESS_OBJ.setTimeout,
			],			
			outputArr:	[
				OUTPUT_OBJ.animateOtherJQuery,
				OUTPUT_OBJ.animateMultipleJQuery,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
				//STYLE_OBJ.ifComments, 
				STYLE_OBJ.descriptiveVars,
				STYLE_OBJ.functionalProgramming,
				STYLE_OBJ.useDescriptiveComments,
			],
		},
	},
	{
		project:		"CharacterGenerator",
		filename: 		"3.05H-CharacterGenerator-LastName.html",
		title:			"3.05 Hand-in: Character Generator",
		url:			"http://twagley.github.io/CP12/CharacterGeneratorII.shtml",
		skillBuilder:	false,
		
		evaluationObj:	{
	
			initArr:	[
				INIT_OBJ.jQueryLibrary,
				INIT_OBJ.object,
				INIT_OBJ.propertyForWidth,
				INIT_OBJ.propertyForDuration, 
			],
			processArr: [
				PROCESS_OBJ.functionWithArgument,
				PROCESS_OBJ.setTimeout,
				PROCESS_OBJ.timerAnonymousFunction,
				PROCESS_OBJ.stringAdd,
				PROCESS_OBJ.fiveCharacteristics,
			],			
			outputArr:	[
				OUTPUT_OBJ.src,
				OUTPUT_OBJ.innerHTML,
				OUTPUT_OBJ.animationDuration,
				OUTPUT_OBJ.percentNotPixels,
				OUTPUT_OBJ.animateWidth,
				OUTPUT_OBJ.animateOpacity,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
				//STYLE_OBJ.ifComments, 
				STYLE_OBJ.descriptiveVars,
				STYLE_OBJ.functionalProgramming,
				STYLE_OBJ.useDescriptiveComments,
			],
		},
		evaluationMessageObj: {
			initArr:
				"including <strong>ALL</strong> of:",
			processArr: 
				"including <strong>ALL</strong> of:",		
			outputArr:
				"including <strong>ANY FIVE</strong> of:",	
			styleArr: 
				"honouring all //STYLE sections to date, including:",
		},
	},
	{
		project:		"TheSkyAtNight",
		filename: 		"3.05H-TheSkyAtNight-LastName.html",
		title:			"3.05 Hand-in: The sky at night",
		url:			"http://twagley.github.io/CP12/TheSkyAtNight.shtml",
		skillBuilder:	false,
		
		evaluationObj:	{
	
			initArr:	[
				INIT_OBJ.jQueryLibrary,
				INIT_OBJ.object,
				INIT_OBJ.propertyForWidth,
				INIT_OBJ.propertyForDuration, 
			],
			processArr: [
				PROCESS_OBJ.functionWithArgument,
				PROCESS_OBJ.setTimeout,
				PROCESS_OBJ.timerAnonymousFunction,
				PROCESS_OBJ.stringAdd,
				PROCESS_OBJ.fiveCharacteristics,
			],			
			outputArr:	[
				OUTPUT_OBJ.src,
				OUTPUT_OBJ.innerHTML,
				OUTPUT_OBJ.animationDuration,
				OUTPUT_OBJ.percentNotPixels,
				OUTPUT_OBJ.animateWidth,
				OUTPUT_OBJ.animateOpacity,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
				//STYLE_OBJ.ifComments, 
				STYLE_OBJ.descriptiveVars,
				STYLE_OBJ.functionalProgramming,
				STYLE_OBJ.useDescriptiveComments,
			],
		},
		evaluationMessageObj: {
			initArr:
				"including <strong>ALL</strong> of:",
			processArr: 
				"including <strong>ALL</strong> of:",		
			outputArr:
				"including <strong>ANY FIVE</strong> of:",	
			styleArr: 
				"honouring all //STYLE sections to date, including:",
		},
	},
	{
		project:		"BucketList",
		filename: 		"3.06S-BucketList-LastName.html",
		title:			"3.06 Skill-builder: Bucket list",
		url:			"http://twagley.github.io/CP12/BucketList.shtml",
		skillBuilder:	true,
		
		evaluationObj:	{
	
			initArr:	[
				INIT_OBJ.initializeArray,
			],
			processArr: [
				PROCESS_OBJ.pushArray,
				PROCESS_OBJ.stringAdd,
				PROCESS_OBJ.joinArray,
				PROCESS_OBJ.functionWithArgument,
				PROCESS_OBJ.functionWithReturn,
				PROCESS_OBJ.initFunction,
				PROCESS_OBJ.processFunction,
				PROCESS_OBJ.outputFunction,
			],			
			outputArr:	[
				OUTPUT_OBJ.innerHTML,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
				//STYLE_OBJ.ifComments, 
				STYLE_OBJ.descriptiveVars,
				STYLE_OBJ.functionalProgramming,
				STYLE_OBJ.useDescriptiveComments,
			],
		},
	},
	{
		project:		"MakeARainbow",
		filename: 		"3.07S-MakeARainbow-LastName.html",
		title:			"3.07 Skill-builder: Make a rainbow",
		url:			"http://twagley.github.io/CP12/MakeARainbow.shtml",
		skillBuilder:	true,
		
		evaluationObj:	{
	
			initArr:	[
				INIT_OBJ.initializeArray,
			],
			processArr: [
				PROCESS_OBJ.forLoop,
				PROCESS_OBJ.stringAdd,
				PROCESS_OBJ.functionWithArgument,
				PROCESS_OBJ.functionWithReturn,
				PROCESS_OBJ.initFunction,
				PROCESS_OBJ.processFunction,
				PROCESS_OBJ.outputFunction,
			],			
			outputArr:	[
				OUTPUT_OBJ.innerHTML,		
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
				//STYLE_OBJ.ifComments, 
				STYLE_OBJ.descriptiveVars,
				STYLE_OBJ.functionalProgramming,
				STYLE_OBJ.useDescriptiveComments,
			],
		},
	},
	{
		project:		"MakeATableWithArraysOfObjects",
		filename: 		"3.09H-MakeATableWithArraysOfObjects-LastName.html",
		title:			"3.09 Hand-in: Make a table using an array of objects",
		url:			"http://twagley.github.io/CP12/MakeATableWithArraysOfObjects.shtml",
		skillBuilder:	false,
		
		evaluationObj:	{
	
			initArr:	[
				INIT_OBJ.jQueryLibrary, 
				INIT_OBJ.initializeArray,
				INIT_OBJ.addElementToAnArrayUsingSquareBrackets,
				PROCESS_OBJ.initFunction,
				PROCESS_OBJ.pushArray, 
			],
			htmlCSSArr: [
				HTML_CSS_OBJ.fontFamilyStyleWeightCSS,
				HTML_CSS_OBJ.backgroundColorCSS, 
				HTML_CSS_OBJ.borderCSS, 
				HTML_CSS_OBJ.tableHeader, 
				HTML_CSS_OBJ.tableData,
			],
			processArr: [
				PROCESS_OBJ.functionWithArgument,
				PROCESS_OBJ.processFunction,
				PROCESS_OBJ.stringAdd,
				PROCESS_OBJ.createElement,
				PROCESS_OBJ.forLoop,
			],			
			outputArr:	[
				PROCESS_OBJ.outputFunction,
				PROCESS_OBJ.functionWithArgument,
				OUTPUT_OBJ.innerHTML,
				OUTPUT_OBJ.appendChild,
				OUTPUT_OBJ.imagesUsingAnArrayOfObjects,
				OUTPUT_OBJ.animateGraphUsingArrayOfObjects
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
				//STYLE_OBJ.ifComments, 
				STYLE_OBJ.descriptiveVars,
				STYLE_OBJ.functionalProgramming,
				STYLE_OBJ.useDescriptiveComments,
			],
		},
		evaluationMessageObj: {
			initArr:
				"including <strong>ALL</strong> of:",
			htmlCSSArr: 
				"including <strong>ALL</strong> of:",
			processArr: 
				"including <strong>ANY FOUR</strong> of:",		
			outputArr:
				"including <strong>ANY FIVE</strong> of:",	
			styleArr: 
				"honouring all //STYLE sections to date, including:",
		},
	},
	{
		project:		"CreateAMaze",
		filename: 		"3.10S-CreateAMaze-LastName.html",
		title:			"3.10 Skill-builder: Create a maze",
		url:			"http://twagley.github.io/CP12/CreateAMaze.shtml",
		skillBuilder:	true,
		
		evaluationObj:	{
	
			initArr:	[
				PROCESS_OBJ.initFunction,
				INIT_OBJ.initArrayOfArrays, 
			],
			processArr: [
				PROCESS_OBJ.functionWithArgument,
				PROCESS_OBJ.processFunction,
				PROCESS_OBJ.stringAdd,
				PROCESS_OBJ.nestedLoop,
				PROCESS_OBJ.createGridOfImages
			],			
			outputArr:	[
				PROCESS_OBJ.outputFunction,
				OUTPUT_OBJ.innerHTML,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
				//STYLE_OBJ.ifComments, 
				STYLE_OBJ.descriptiveVars,
				STYLE_OBJ.functionalProgramming,
				STYLE_OBJ.useDescriptiveComments,
			],
		},
	},
	
	// Create a MAP - not doing unless needed...
	
	{
		project:		"ObjectOrientedKeyboardControl",
		filename: 		"4.01S-ObjectOrientedKeyboardControl-LastName.html",
		title:			"//MAKE: 4.01 Skill-builder: Object-oriented keyboard control",
		url:			"http://twagley.github.io/CP12/ObjectOrientedKeyboardControl.shtml",
		skillBuilder:	true,
		
		evaluationObj:	{
	
			initArr:	[
				INIT_OBJ.jQueryLibrary,
			//	PROCESS_OBJ.initFunction,
				INIT_OBJ.objectWithMethods,
			],
			inputArr: [
				INPUT_OBJ.onkeydown,
			],
			processArr: [
				PROCESS_OBJ.functionWithArgument,
				PROCESS_OBJ.processFunction,
				PROCESS_OBJ.ifElse,
				PROCESS_OBJ.this,
			],			
			outputArr:	[
				PROCESS_OBJ.outputFunction,
				OUTPUT_OBJ.animateJQuery,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
				//STYLE_OBJ.ifComments, 
				STYLE_OBJ.descriptiveVars,
				//STYLE_OBJ.functionalProgramming,
				STYLE_OBJ.useDescriptiveComments,
				STYLE_OBJ.objectOrientedProgramming,
			],
		},
	},
	{
		project:		"MazeAndMovement",
		filename: 		"4.02H-MazeAndMovement-LastName.html",
		title:			"4.02 Hand-in: Make a maze and something to move on it",
		url:			"http://twagley.github.io/CP12/MazeAndMovement.shtml",
		skillBuilder:	false,
		
		evaluationObj:	{
	
			initArr:	[
				INIT_OBJ.initArrayOfArrays,
				INIT_OBJ.objectOrientedMaze,
				INIT_OBJ.objectOrientedCharacter,
				INIT_OBJ.this, 
				INIT_OBJ.jQueryLibrary, 
			],
			processArr: [
				PROCESS_OBJ.createGridOfImages,
				PROCESS_OBJ.ifElseImage,
				PROCESS_OBJ.ifElseDirection,
				PROCESS_OBJ.positionMaze,
				PROCESS_OBJ.positionCharacter,
			],			
			outputArr:	[
				OUTPUT_OBJ.innerHTML,
				OUTPUT_OBJ.src,
				OUTPUT_OBJ.animateOpacity,
				OUTPUT_OBJ.animateJQuery,
				OUTPUT_OBJ.animateEasing,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
				//STYLE_OBJ.ifComments, 
				STYLE_OBJ.descriptiveVars,
				STYLE_OBJ.functionalProgramming,
				STYLE_OBJ.useDescriptiveComments,
				STYLE_OBJ.loopComment
			],
		},
		evaluationMessageObj: {
			initArr:
				"including <strong>ALL</strong> of:",
			htmlCSSArr: 
				"including <strong>ALL</strong> of:",
			processArr: 
				"including <strong>ALL</strong> of:",		
			outputArr:
				"including <strong>ALL</strong> of:",	
			styleArr: 
				"honouring all //STYLE sections to date, including:",
		},
	},
	{
		project:		"MiceAndImages",
		filename: 		"4.03S-MiceAndImages-LastName.html",
		title:			"4.03S Skill-builder: Mice and images",
		url:			"http://twagley.github.io/CP12/MiceAndImages.shtml",
		skillBuilder:	true,
		
		evaluationObj:	{
	
			initArr:	[
				INIT_OBJ.objectWithMethods,
				PROCESS_OBJ.this,
			],
			inputArr: [
				INPUT_OBJ.clientXY,
			//	INPUT_OBJ.onmousedown,
				INPUT_OBJ.onmousemove,
				INPUT_OBJ.onclick,
				INPUT_OBJ.turnOffInputEvents,
			],			
			outputArr:	[
				OUTPUT_OBJ.src,
				OUTPUT_OBJ.topOrLeft,
				PROCESS_OBJ.createElement,
				OUTPUT_OBJ.appendChild,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
				//STYLE_OBJ.ifComments, 
				STYLE_OBJ.descriptiveVars,
				//STYLE_OBJ.functionalProgramming,
				STYLE_OBJ.useDescriptiveComments,
				STYLE_OBJ.objectOrientedProgramming,
			],
		},
	},
	//skip 4.04 for now
	{
		project:		"RandomMonsterSwarm",
		filename: 		"4.05S-RandomMonsterSwarm-LastName.html",
		title:			"4.05S Skill-builder: Random Monster Swarm",
		url:			"http://twagley.github.io/CP12/RandomMonsterSwarm.shtml",
		skillBuilder:	true,
		
		evaluationObj:	{
	
			initArr:	[
			//	INIT_OBJ.objectWithMethods,
				PROCESS_OBJ.this,
				INIT_OBJ.objectConstructors,
				INIT_OBJ.objectPrototypes,
			],
			inputArr: [
				INPUT_OBJ.clientXY,
				INPUT_OBJ.onmousedown,
				INPUT_OBJ.onmousemove,
			],	
			processArr: [
				PROCESS_OBJ.animationCallbacks
			],
			outputArr:	[
				OUTPUT_OBJ.src,
				OUTPUT_OBJ.topOrLeft,
				PROCESS_OBJ.createElement,
				OUTPUT_OBJ.appendChild,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
				//STYLE_OBJ.ifComments, 
				STYLE_OBJ.descriptiveVars,
			//	STYLE_OBJ.functionalProgramming,
				STYLE_OBJ.useDescriptiveComments,
				STYLE_OBJ.objectOrientedProgramming,
			],
		},
	},
	{
		project:		"MonsterChasers",
		filename: 		"4.06X-MonsterChasers-LastName.html",
		title:			"4.06 EXTRA: Monster Chasers!",
		url:			"http://twagley.github.io/CP12/MonsterChasers.shtml",
		skillBuilder:	true,
		
		evaluationObj:	{
	
			initArr:	[
			//	INIT_OBJ.objectWithMethods,
				PROCESS_OBJ.this,
				INIT_OBJ.objectConstructors,
				INIT_OBJ.objectPrototypes,
			],
			inputArr: [
				INPUT_OBJ.clientXY,
				INPUT_OBJ.onload,
				INPUT_OBJ.onmousemove,
				INPUT_OBJ.innerWidthOrHeight,
				
			],	
			processArr: [
				PROCESS_OBJ.animationCallbacks,				
			],
			outputArr:	[
				OUTPUT_OBJ.src,
				OUTPUT_OBJ.topOrLeft,
				PROCESS_OBJ.createElement,
				OUTPUT_OBJ.appendChild,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.indentation,
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.longLines,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.spaceOutMath,
				//STYLE_OBJ.ifComments, 
				STYLE_OBJ.descriptiveVars,
			//	STYLE_OBJ.functionalProgramming,
				STYLE_OBJ.useDescriptiveComments,
				STYLE_OBJ.objectOrientedProgramming,
			],
		},
	},
	{
		project:		"Exam",
		filename: 		"Exam-LastName.html",
		title:			"Exam",
		url:			"http://twagley.github.io/CP12/examSkillsChecklist.pdf",
		skillBuilder:	false,
		
		evaluationObj:	{
	
			htmlArr: [
				HTML_CSS_OBJ.image,
				HTML_CSS_OBJ.button,
				HTML_CSS_OBJ.inputText,
				HTML_CSS_OBJ.textarea,
				HTML_CSS_OBJ.link,

				HTML_CSS_OBJ.heading,
				HTML_CSS_OBJ.paragraph,
				HTML_CSS_OBJ.lineBreak,
				HTML_CSS_OBJ.strongOrEm,
				HTML_CSS_OBJ.spanDiv,

				HTML_CSS_OBJ.listItem,
				HTML_CSS_OBJ.table,
				HTML_CSS_OBJ.unicode,
				HTML_CSS_OBJ.canvas,
				HTML_CSS_OBJ.svg,

				HTML_CSS_OBJ.audio,
				HTML_CSS_OBJ.approvedHTML,
			],
			cssArr: [	//CSS now

				HTML_CSS_OBJ.tagCSS,
				HTML_CSS_OBJ.idCSS,
				HTML_CSS_OBJ.classCSS,
				OUTPUT_OBJ.percentNotPixels,
				HTML_CSS_OBJ.fontFamilyCSS,

				HTML_CSS_OBJ.borderCSS,
				HTML_CSS_OBJ.colorCSS,
				HTML_CSS_OBJ.backgroundColorCSS,
				HTML_CSS_OBJ.displayOrVisibilityCSS,
				HTML_CSS_OBJ.fontSizeCSS,

				HTML_CSS_OBJ.fontWeightCSS,
 				HTML_CSS_OBJ.fontStyleCSS,
				HTML_CSS_OBJ.widthHeightCSS,
				HTML_CSS_OBJ.positionCSS,
				HTML_CSS_OBJ.topLeftCSS,

				HTML_CSS_OBJ.textOrVerticalAlignCSS,
				HTML_CSS_OBJ.opacityCSS,
				HTML_CSS_OBJ.zIndexCSS,
				HTML_CSS_OBJ.keyframesCSS,
				HTML_CSS_OBJ.fontFaceCSS,

				HTML_CSS_OBJ.approvedCSS,
				],
			initArr:	[
				INIT_OBJ.jQueryLibrary, 
				INIT_OBJ.useNumericalVar, 
				INIT_OBJ.initNumericalVar, 
				INIT_OBJ.useStringVar, 
				INIT_OBJ.initStringVar, 
				
				INIT_OBJ.useArray, 
				INIT_OBJ.initArray, 
				INIT_OBJ.useObject, 
				INIT_OBJ.object, 
				INIT_OBJ.addElementToAnArrayUsingSquareBrackets, 
				INIT_OBJ.initArrayOfArrays, 
 
				INIT_OBJ.approvedINIT, 
			],
			inputArr: [
				INPUT_OBJ.onclick,
				INPUT_OBJ.onload,
				INPUT_OBJ.onchange,
				INPUT_OBJ.value,
				INPUT_OBJ.onkeydown,
				
				INPUT_OBJ.onmouseoutOrOver,
				INPUT_OBJ.onmousemove,
				INPUT_OBJ.onmousedown,
				INPUT_OBJ.innerWidthOrHeight,
				INPUT_OBJ.offsetTopOrLeft,
				
				INPUT_OBJ.clientXY,
				INPUT_OBJ.turnOffInputEvents,
				INPUT_OBJ.newDate,
				INPUT_OBJ.fileUpload,
				INPUT_OBJ.inputGet,
			//	INPUT_OBJ.keyCode,

				INPUT_OBJ.approvedINPUT,
			],
			processArr: [
				PROCESS_OBJ.ifElse,
				PROCESS_OBJ.ifElseIf,
				PROCESS_OBJ.forLoop,
				PROCESS_OBJ.nestedLoop,
				PROCESS_OBJ.stringAdd,
				
				PROCESS_OBJ.splitArray,
				PROCESS_OBJ.joinArray,
				PROCESS_OBJ.mathBasic,
				PROCESS_OBJ.rounding,
				PROCESS_OBJ.random,
				
				PROCESS_OBJ.mathHigher,
				PROCESS_OBJ.parseIntOrFloat,
				PROCESS_OBJ.otherArray,
				PROCESS_OBJ.pushArray,
				PROCESS_OBJ.animationCallbacks,
				
				PROCESS_OBJ.setIntervalTimeout,
				PROCESS_OBJ.createElement,
				PROCESS_OBJ.JSON,

				PROCESS_OBJ.requestAnimationFrame,
				PROCESS_OBJ.approvedPROCESS,
			],
			structureArr: [
				//STRUCTURE
				PROCESS_OBJ.usesAFunction,
				PROCESS_OBJ.functionWithArgument,
				PROCESS_OBJ.functionWithReturn ,
				
				INIT_OBJ.objectWithMethods, 
				PROCESS_OBJ.this, 
				INIT_OBJ.objectConstructors,
			//	PROCESS_OBJ.timerAnonymousFunction, 
				
				PROCESS_OBJ.initFunction, 
				PROCESS_OBJ.inputFunction, 
				PROCESS_OBJ.processFunction,
				PROCESS_OBJ.outputFunction ,
				
				PROCESS_OBJ.approvedSTRUCTURE,
			],			
			outputArr:	[
				OUTPUT_OBJ.innerHTML,
				OUTPUT_OBJ.src,
				OUTPUT_OBJ.topOrLeft,
				OUTPUT_OBJ.style,
				OUTPUT_OBJ.animateJQuery,
				
				OUTPUT_OBJ.animateOtherJQuery,
				OUTPUT_OBJ.alert,
				OUTPUT_OBJ.console,
				OUTPUT_OBJ.playAudio,
				OUTPUT_OBJ.appendChild,

				OUTPUT_OBJ.approvedOUTPUT,
			],
			styleArr:	[
				STYLE_OBJ.filename,
				STYLE_OBJ.author,
				STYLE_OBJ.changelog,
				STYLE_OBJ.styleBlock,
				STYLE_OBJ.CSSInHead,
				STYLE_OBJ.scriptBlock,
				
				STYLE_OBJ.longLines,
				STYLE_OBJ.spaceOutMath,
				STYLE_OBJ.indentation,
				
				STYLE_OBJ.initComment,
				STYLE_OBJ.inputComment,
				STYLE_OBJ.processComment,
				STYLE_OBJ.outputComment,
				
				STYLE_OBJ.loopComment,
				STYLE_OBJ.ifComments, 
				
				STYLE_OBJ.lowercaseHTMLTags,
				STYLE_OBJ.idNamingStyle,
				STYLE_OBJ.camelCaseVariablesAndFunctions,
				STYLE_OBJ.descriptiveVars,
				STYLE_OBJ.descriptiveFunctions,
			],
		},
		evaluationMessageObj: {
			htmlArr: 
				"including <strong>ANY TEN</strong> of:",
			cssArr: 
				"including <strong>ANY TEN</strong> of:",
			initArr:
				"including <strong>ANY FIVE</strong> of:",
			inputArr:
				"including <strong>ANY FIVE</strong> of:",
			processArr: 
				"including <strong>ANY FIFTEEN</strong> of:",		
			structureArr: 
				"including <strong>ALL TEN (x2)</strong> of:",		
			outputArr:
				"including <strong>ANY FIVE</strong> of:",	
			styleArr: 
				"including <strong>ALL TWENTY</strong> of:",
		},
	},
	/*
	{
		project:		"",
		filename: 		"",
		title:			"",
		url:			"",
		skillBuilder:	false,
	},
	
	*/
];
