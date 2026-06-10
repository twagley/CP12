//INIT: create the arrays of site statistics
// info generated from: http://www.alexa.com/topsites/countries/CA
var siteNameArr =[
	"Google.ca",
	"Google.com",
	"Facebook.com",
	"Youtube.com",
	"Yahoo.com",
	
	"Amazon.ca",
	"Wikipedia.org",
	"Live.com",
	"Twitter.com",
	"Amazon.com",
	
	"Kijiji.ca",
	"Linkedin.com",
	"Reddit.com",
	"Cbc.ca",
	"Imgur.com",
	
	"Msn.com",
	"Netflix.com",
	"Bing.com",
	"Pinterest.com",
	"Instagram.com"
];

var siteDescriptionArr = [
	"Canada's local version of the google search engine",
	"Enables users to search the world's information, including webpages, images, and videos.",
	"A social utility that connects people, to keep up with friends, upload photos, share links and...",
	"YouTube is a way to get your videos to the people who matter to you. Upload, tag and share your...",
	"A major internet portal and service provider offering search results, customizable content,...",

	"The online shopping superstore, now in Canada!",
	"A free encyclopedia built collaboratively using wiki software.",
	"Search engine from Microsoft.",
	"Social networking and microblogging service utilising instant messaging, SMS or a web interface.",
	"Amazon.com seeks to be Earth's most customer-centric company, where customers can find and...",

	"Free classified and 'wanted' advertising, also offering the ability to make contacts, seek...",
	"A networking tool to find connections to recommended job candidates, industry experts and ...",
	"User-generated news links. Votes promote stories to the front page.",
	"Canadian radio and TV network. Includes news, air schedules, corporate profile, and message for...",
	"Imgur is the Internet's visual storytelling community.",

	"Portal for shopping, news and money, e-mail, search, and chat.",
	"Flat monthly fee streaming TV and movies service.",
	"Search engine developed by Microsoft. Features web, image, video, local, news, and product search.",
	"Pinterest is an online pinboard: a place where you can post collections of things you love, and...",
	"Image sharing portal"
];

var siteGlobalRankArr = [
	62, 1, 2, 3, 5, 
	309, 7, 12, 9, 6, 
	520, 14, 33, 797, 46,
	26, 52, 22, 31, 25
];

var sitesLinkingArr = [
	54312, 3555997, 7674958, 3182092, 788386,
	38869, 1805704, 59323, 5677576, 1033302,
	6381, 1954406, 536597, 57595, 187843, 
	189036, 22940, 118340, 2580223, 1645769 
];

var mainProcedure = function () {
	var tableString = makeTable( siteNameArr, siteDescriptionArr, siteGlobalRankArr, sitesLinkingArr );
	outputTable( tableString );
}

//PROCESS: create the HTML table code from the array information
var makeTable = function ( siteNameArr, siteDescriptionArr, siteGlobalRankArr, sitesLinkingArr ) {
	console.log( 
		'in makeTable, siteNameArr, siteDescriptionArr, siteGlobalRankArr, sitesLinkingArr:' 
		+ siteNameArr + siteDescriptionArr + siteGlobalRankArr + sitesLinkingArr );
		
	var tableString = "<table><thead><tr><th>Rank</th><th>Site</th><th>Description</th><th>Global Rank</th></tr></thead><tbody>";
	
	//loop through each index of siteNameArr
	for ( i in siteNameArr ) {
		console.log( 'in siteNameArr loop, i:' + i );
		tableString = tableString 
					+ "<tr>"
					+ "<td>#" + ( parseInt( i ) + 1 ) + "</td>"
					+ "<td>" + siteNameArr[ i ] + "</td>"
					+ "<td>" + siteDescriptionArr[ i ] + "</td>"
					+ "<td>" + siteGlobalRankArr[ i ] + "</td>"
					+ "</tr>";
	}
	
	//close out the table
	tableString = tableString + "</tbody></table>";
	
	//return the code string
	return tableString;
}

var mainProcedure2 = function () {
	var tableString = makeTable2( siteNameArr, siteDescriptionArr, siteGlobalRankArr, sitesLinkingArr );
	outputTable( tableString );
	animateGraphs( siteNameArr );
}

//PROCESS: create the HTML table code from the array information
var makeTable2 = function ( siteNameArr, siteDescriptionArr, siteGlobalRankArr, sitesLinkingArr ) {
	console.log( 
		'in makeTable2, siteNameArr, siteDescriptionArr, siteGlobalRankArr, sitesLinkingArr:' 
		+ siteNameArr + siteDescriptionArr + siteGlobalRankArr + sitesLinkingArr );
		
	var tableString = "<table><thead><tr><th>Rank</th><th>Site</th><th>Description</th><th>Global ranking</th><th>Number of other sites linking to it</th></tr></thead><tbody>";
	
	//loop through each index of siteNameArr
	for ( i in siteNameArr ) {
		console.log( 'in siteNameArr loop, i:' + i );
		tableString = tableString 
					+ "<tr>"
					+ "<td>#" + ( parseInt( i ) + 1 ) + "</td>"
					+ "<td><a href='http://" + siteNameArr[ i ] + "'>" + siteNameArr[ i ] + "</a></td>"
					+ "<td>" + siteDescriptionArr[ i ] + "</td>"
					+ "<td>" + siteGlobalRankArr[ i ] + "</td>"
					+ "<td><div id='animate" + i + "ID' style='background-color: red;'>" 
					+ sitesLinkingArr[ i ] + "</div></td>"					
					+ "</tr>";
	}
	
	//close out the table
	tableString = tableString + "</tbody></table>";
	
	//return the code string
	return tableString;
}

var mainProcedure3 = function () {
	var tableString = makeTable3( siteNameArr, siteDescriptionArr, siteGlobalRankArr, sitesLinkingArr );
	outputTable( tableString );
	animateGraphs( siteNameArr );
}

//PROCESS: create the HTML table code from the array information
var makeTable3 = function ( siteNameArr, siteDescriptionArr, siteGlobalRankArr, sitesLinkingArr ) {
	console.log( 
		'in makeTable2, siteNameArr, siteDescriptionArr, siteGlobalRankArr, sitesLinkingArr:' 
		+ siteNameArr + siteDescriptionArr + siteGlobalRankArr + sitesLinkingArr );
		
	var tableString = "<table><thead><tr><th>Rank</th><th>Site</th></tr></thead><tbody>";
	
	//loop through each index of siteNameArr
	for ( i in siteNameArr ) {
		console.log( 'in siteNameArr loop, i:' + i );
		tableString = tableString 
					+ "<tr>"
					+ "<td>" + ( parseInt( i ) + 1 ) + "</td>"
					+ "<td>" + siteNameArr[ i ] + "</td>"
					+ "</tr>";
	}
	
	//close out the table
	tableString = tableString + "</tbody></table>";
	
	//return the code string
	return tableString;
}

//OUTPUT: animate the graphs in #animate1ID
var animateGraphs = function ( siteNameArr ) {
	console.log( 'in animateGraphs, siteNameArr:' + siteNameArr );
	
	//loop through each index of siteNameArr
	for ( i in siteNameArr ) {
		var thisID		= '#animate'+i+'ID';
		var newWidth 	= Math.round( sitesLinkingArr[ i ] / 20000);
		
		console.log( thisID + '-' + newWidth );
		$( thisID ).animate(
			{width:	 newWidth + "px"}, 2000
		);
	}
}

//OUTPUT: output the results inside the div called #outputID
var outputTable = function ( tableCode ) {
	console.log( 'in outputTable, tableCode:' + tableCode );
	document.getElementById('outputID').innerHTML = tableCode;
}