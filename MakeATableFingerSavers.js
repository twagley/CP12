//	Drapak's FINGER-SAVER (r) pre-typed arrays of objects
//
//	Choose ONE of the four options:
//		1) Make your array of objects ( minimum of four objects )
//		2) goaliesArr
//		3) albumsArr
//		4) videoGamesArr

// 	Use one of these to create a initialization function, like this:
/*

//INIT: set up the array of dwarf objects
var createDwarfArray = function () {
	console.log( 'in createDwarfArray...' );
	
	var dwarfArr = [
		{
			rank:			1,
			name:			"Grumpy",
			from:			"Snow White and the Seven Dwarves",
			src:			"http://pngimg.com/uploads/dwarf/dwarf_PNG61.png",
			awesomeness:	2
		},
		{
			rank:			2,
			name:			"Gimli",
			from:			"Lord of the Rings",
			src:			"https://upload.wikimedia.org/wikipedia/commons/3/38/Gimli.png",
			awesomeness:	100
		},
		{
			rank:			3,
			name:			"Pluto",
			from:			"It's a dwarf planet - not a real planet!",
			src:			"https://upload.wikimedia.org/wikipedia/commons/d/d3/" 
								+ "Global_LORRI_mosaic_of_Pluto_in_true_colour.jpg",
			awesomeness:	95
		},
	];
	
	// use the dwarfArr.push() to add another dwarf object next:
	
	// return the completed dwarfArr out of the function
	return dwarfArr
}


*/


//INIT: create an array of objects of the best-selling albums of all time
// from: https://www.nhl.com/news/top-10-nhl-goalies-for-2018-19-season/c-299839210
var goaliesArr = [
	{
		rank:					1,
		name:					"Sergei Bobrovsky",
		team:					"Columbus Blue Jackets",
		savePercentage:			0.921,
		goalsAgainstAverage:	2.42,
		trivia:					""
	},
	{
		rank:					2,
		name:					"Braden Holtby",
		team:					"Washington Capitals",
		savePercentage:			0.907,
		goalsAgainstAverage:	2.99,
		trivia:					""
	},	{
		rank:					3,
		name:					"Andrei Vasilevskiy",
		team:					"Tampa Bay Lightning",
		savePercentage:			0.920,
		goalsAgainstAverage:	2.62,
		trivia:					""
	},	{
		rank:					4,
		name:					"Connor Hellebuyck",
		team:					"Winnipeg Jets",
		savePercentage:			0.924,
		goalsAgainstAverage:	2.36,
		trivia:					""
	},	{
		rank:					5,
		name:					"Jonathan Quick",
		team:					"Los Angeles Kings",
		savePercentage:			0.915,
		goalsAgainstAverage:	2.26,
		trivia:					""
	},	{
		rank:					6,
		name:					"Marc-Andre Fleury",
		team:					"Vegas Golden Knights",
		savePercentage:			0.927,
		goalsAgainstAverage:	2.24,
		trivia:					""
	},	{
		rank:					7,
		name:					"Pekka Rinne",
		team:					"Nashville Predators",
		savePercentage:			0.927,
		goalsAgainstAverage:	2.31,
		trivia:					""
	},	{
		rank:					8,
		name:					"Tuukka Rask",
		team:					"Boston Bruins",
		savePercentage:			0.923,
		goalsAgainstAverage:	2.19,
		trivia:					""
	},	
	
	// now add the remaining two players:
	// 9. Frederik Andersen, Toronto Maple Leafs	<-- add to the end of goaliesArr
	// 10. John Gibson, Anaheim Ducks 				<-- use .push() to add to goaliesArr
	// Or why not add our very own Nick Fallows! :)

];

//INIT: create an array of objects of the best selling albums of all time
//from: https://en.wikipedia.org/wiki/List_of_best-selling_albums
var albumsArr = [
	{
		rank:				1,
		artist:				"Michael Jackson",
		album:				"Thriller",
		year:				1982,
		genre:				"Pop, rock, R&amp;B",
		certifiedCopies:	47.3
	},
	{
		rank:				2,
		artist:				"Eagles",
		album:				"Their Greatest Hits (1971–1975)",
		year:				1976,
		genre:				"Country rock, soft rock, folk rock",
		certifiedCopies:	41.2
	},
	{
		rank:				3,
		artist:				"AC/DC",
		album:				"Back in Black",
		year:				1980,
		genre:				"Hard rock",
		certifiedCopies:	26.1
	},
	{
		rank:				4,
		artist:				"Pink Floyd",
		album:				"The Dark Side of the Moon",
		year:				1973,
		genre:				"Progressive rock",
		certifiedCopies:	24.2
	},
	{
		rank:				5,
		artist:				"Meat Loaf",
		album:				"Bat Out of Hell",
		year:				1977,
		genre:				"Hard rock, classic rock, Pop music",
		certifiedCopies:	21.5
	},
	{
		rank:				6,
		artist:				"Whitney Houston / Various artists",
		album:				"The Bodyguard",
		year:				1992,
		genre:				"R&B, soul, pop, soundtrack",
		certifiedCopies:	28.4
	},
	{
		rank:				7,
		artist:				"Eagles",
		album:				"Hotel California",
		year:				1976,
		genre:				"Soft rock",
		certifiedCopies:	31.5
	},
	{
		rank:				8,
		artist:				"Bee Gees / Various artists",
		album:				"Saturday Night Fever",
		year:				1977,
		genre:				"Disco",
		certifiedCopies:	21.6
	},
	
	//now add at least two remaining albums:
	//Rumours 	<-- add to the end of albumsArr
	//Grease	<-- use .push() to add to albumsArr
];

//INIT: create an array of objects for the best-selling video games of all time
//from: https://en.wikipedia.org/wiki/List_of_best-selling_video_games
var videoGamesArr = [
	{
		rank:			1,
		title:			"Tetris",
		sales:			170, 
		platforms:		"Multi-platform",
		releaseDate:	"June 6, 1984",
		developer:		"Elektronorgtechnica"
	},
	{
		rank:			2,
		title:			"Minecraft",
		sales:			154, 
		platforms:		"Multi-platform",
		releaseDate:	"November 18, 2011",
		developer:		"Mojang"
	},
	{
		rank:			3,
		title:			"Grand Theft Auto V",
		sales:			100, 
		platforms:		"Multi-platform",
		releaseDate:	"September 17, 2013",
		developer:		"Rockstar North"
	},
	{
		rank:			4,
		title:			"Wii Sports",
		sales:			82.86, 
		platforms:		"Wii",
		releaseDate:	"November 19, 2006",
		developer:		"Nintendo EAD"
	},
	{
		rank:			5,
		title:			"PlayerUnknown's Battlegrounds",
		sales:			50, 
		platforms:		"Multi-platform",
		releaseDate:	"December 20, 2017",
		developer:		"PUBG Corporation"
	},
	{
		rank:			6,
		title:			"Pokémon Red/Blue/Yellow",
		sales:			45, 
		platforms:		"Game Boy",
		releaseDate:	"February 27, 1996",
		developer:		"Game Freak"
	},
	{
		rank:			7,
		title:			"Super Mario Bros.",
		sales:			40.24, 
		platforms:		"NES",
		releaseDate:	"September 13, 1985",
		developer:		"Nintendo"
	},
	{
		rank:			8,
		title:			"Mario Kart Wii",
		sales:			37.14, 
		platforms:		"Wii",
		releaseDate:	"April 10, 2008",
		developer:		"Nintendo EAD"
	},
	
	// now add at least two more:
	// Wii Sports Resort	 	<-- add to the end of videoGamesArr
	// New Super Mario Bros.	<-- use .push() to add to videoGamesArr
];