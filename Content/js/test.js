
alert (window.location.href);

// supported languages
var langs = [ 'en-us', 'fr-ca', 'de' ];
var path = location.pathname;
var curLang = "en-us";
var lang;
var rootURL;	  		//store the current URL up to the language 
var subfolders;			// the portions of the URL between the language and the topic file name
var contentID;			// the portion of the URL relating to the content repo
var landingpageURL;  	// construct the url of the landing page 

$(document).ready(function() {
	for (var i = 0; i < langs.length; i++) {
		if (path.indexOf('/' + langs[i] + '/') != -1) {
			curLang = langs[i];
		}
	}
});


$(document).ready(function() { 
	// set language selector current language
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
function use_lang() {
	for (var i = 0; i < langs.length; i++) {
		if (path.indexOf('/' + langs[i] + '/') != -1) {
			curLang = langs[i];
		}
	}

	var filename = path.substring(path.lastIndexOf('/') + 1);
	if (path.indexOf('/' + lang + '/') == -1) {
		var url = window.location.toString();
		
		rootURL = url.slice(url.StartsWith, url.search(curLang) ); 	// find the URL up to the current language

		subfolders = url.substring(rootURL.length + curLang.length + 1,url.lastIndexOf("/"))  ; //get everything starting at the root URL to the last slash
		
		//check if the subfolders var has a slash
		if (subfolders.indexOf('/') == -1) {	
			contentID = subfolders; 	// if no slash, set the variable 
			//alert ( 'content3 if no slash  = ' + content3);
		} else {
			//alert ( 'content2 in if = ' + content2);		
			contentID = subfolders.substring(0,subfolders.indexOf("/")) ;     // else chop the info after the first slash 
			//alert ( 'content3 after adjustment if no slash  = ' + content3);
		}

		landingpageURL = rootURL + lang + "/" + contentID + "/landing-" + contentID + ".htm" ;   // combine elements to make the landing page URL
		
		
		//landingpage = url.slice(url.StartsWith, url.search(curLang)); 			
			//alert ( 'URL string = ' + landingpage  );
		//content1 = url.lastIndexOf(curLang);
		//content1 = url.slice(url.StartsWith, url.search(url.lastIndexOf(curLang)));
			//alert (content1);
		//landingpage= url.slice(url.StartsWith, url.search(curLang)) + "/Content/" + "landing-" +landingpage + ".htm"; 	
			//alert ( 'URL string = ' + landingpage  );
		//landingpage= url.slice(url.StartsWith, url.search(curLang)) + "/Content/" + "landing-" +landingpage + ".htm"; 	
			//alert ( 'URL string = ' + landingpage  );
		//url = url.replace(curLang, lang);
		//url = url.substring(0, url.indexOf(lang)) + lang + "/Content/" + "landing-" +landingpage + ".htm";
		url = landingpageURL;
		window.location = url;
	}
}