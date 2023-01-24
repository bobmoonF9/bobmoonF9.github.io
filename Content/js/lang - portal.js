// supported languages
var langs = [ 'en-us', 'fr-ca', 'de' ];
var path = location.pathname;
var curLang = "en-us";
var lang;

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
		url = url.replace(curLang, lang);
		url = url.substring(0, url.indexOf(lang)) + lang + "/Default.htm";
		window.location = url;
	}
}