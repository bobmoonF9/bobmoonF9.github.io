


// alert ('current page URL is ' + window.location.href);

var url = "https://documentation.five9.com/de/crm-agents/ADT/morefolders/_ch-preparing-your-station.htm";

// supported languages
var langs = [ 'en-us', 'fr-ca', 'de' ];
var frca_langpairs = [ 'agent-desktop-plus', 'supervisor-plus', 'technical-reqs' ];
var de_langpairs = [ 'agent-desktop-plus', 'supervisor-plus', 'crm-agents/ADT' ];



var path = location.pathname;
var curLang = "en-us";
var lang;
var rootURL;			// the root portion of the URL up to the language
var subfolders;			// the portions of the URL between the language and the topic file name
var contentID;			// the portion of the URL relating to the content repo
var integrationID;		// the crm integration indicator from the URL

$(document).ready(function() {			// on page load, find which language folder is in the URL
	for (var i = 0; i < langs.length; i++) {
		if (path.indexOf('/' + langs[i] + '/') != -1) {
			curLang = langs[i];
		}
	}
});


$(document).ready(function() { 			// on page load, set the language drop down to the current language
	$('select#lang').val(curLang);
	$('select#lang').css('visibility','visible');

	// process language change
	$('select#lang').change(function() {
		lang = $(this).val();
		localStorage.setItem('lang', lang);
		use_lang(lang);
	});
});


// redirect
function use_lang() {					// on change to the language drop down
	for (var i = 0; i < langs.length; i++) {
		if (path.indexOf('/' + langs[i] + '/') != -1) {
			curLang = langs[i];			// set current language 
		}
	}

	if(contentID=="crm-agents") {
	  //rootURL = url.slice(url.StartsWith, url.search(contentID) + contentID.length ); 
	  //alert ("rootURL = " + rootURL );  
	  
	  //get all up to the contentID
	  //test = rootURL;
	  
	  alert ("all up to the contentID = " + rootURL );    
	  //grab the value after the contentID
	  //test2 = url.substring(rootURL.length + 1 ); 
	  //alert ("all up to the contentID = " + test2 );    
	  
	  //tempfolders = subfolders;

	  //alert ("remainder of URL tempfolders = " + tempfolders );  
	  
	  //integrationID = tempfolders.substring(0,tempfolders.indexOf("/")); 
	  integrationID = subfolders.substring(contentID.length + 1); 
	  alert ("chop = " + integrationID );  
	  integrationID = integrationID.substring(0,integrationID.indexOf("/")); 
	  alert ("crm subfolder = " + integrationID );  
	  contentID = contentID + "/" + integrationID;
	  alert ("content ID  = " + contentID );  
	  //rootURL = url.substring(rootURL.length + 1, url.lastIndexOf("/")  ); 
	  
	  //alert ("rootURL = " + rootURL );  
	}


	if(lang == "de") {
		if(de_langpairs.indexOf(contentID) +1) {
			//alert ("rootURL = " + rootURL );  
			url = rootURL + "/" + contentID + "/landing-" + contentID + ".htm";
		} else {
			url = rootURL + lang + "/" + "Default.htm";
		}
      alert ("URL = " + url ); 
	}




	var filename = path.substring(path.lastIndexOf('/') + 1); 	// sets current topic file name, not used in the current script
	if (path.indexOf('/' + lang + '/') == -1) {
		var url = window.location.toString();					// set the url variable to current path	
		
		rootURL = url.slice(url.StartsWith, url.search(curLang) ); 	// grab the URL up to the current language

		subfolders = url.substring(rootURL.length + curLang.length + 1,url.lastIndexOf("/")); //grab the folders in the URL from the rootURL location to the last slash
		
		//check if the subfolders var has a slash, so the page is nested in subfolders under the guide level
		if (subfolders.indexOf('/') == -1) {	
			contentID = subfolders; 	// if no slash for subfolders, set the variable 
		} else {
			contentID = subfolders.substring(0,subfolders.indexOf("/")) ;     // else chop the subfolders after the first slash 
		}

		url = rootURL + lang + "/" + contentID + "/landing-" + contentID + ".htm" ;   // combine elements to make the landing page URL
		window.location = url;
	}
}