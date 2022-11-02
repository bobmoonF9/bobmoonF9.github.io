
alert (window.location.href);

// supported languages
var langs = [ 'en-us', 'fr-ca', 'de' ];
var path = location.pathname;
var curLang = "en-us";
var lang;
var landingpage;
var content1;
var content2; 

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
		var landingpage = url.lastIndexOf(curLang);			//str.lastIndexOf("/index.html"); 
			// alert ( 'URL string = ' + landingpage  );
		landingpage = url.slice(url.StartsWith, url.search(curLang)); 			
			alert ( 'URL string = ' + landingpage  );
		content1 = url.slice(url.StartsWith, url.search(lastIndexOf(curLang)));
			alert (content1);
		landingpage= url.slice(url.StartsWith, url.search(curLang)) + "/Content/" + "landing-" +landingpage + ".htm"; 	
			alert ( 'URL string = ' + landingpage  );
		landingpage= url.slice(url.StartsWith, url.search(curLang)) + "/Content/" + "landing-" +landingpage + ".htm"; 	
			alert ( 'URL string = ' + landingpage  );
		url = url.replace(curLang, lang);
		url = url.substring(0, url.indexOf(lang)) + lang + "/Content/" + "landing-" +landingpage + ".htm";
		// window.location = url;
	}
}