

// supported languages - add the project portion of the URL here 
var langs = [ 'en-us', 'fr-ca', 'de' ];
var frca_langpairs = [ 'agent-desktop-plus', 
					   'basic-admin', 
					   'campaign-admin', 
					   'digital-engagement', 
					   'ivr-admin', 
					   'crm-admins/Salesforce', 
					   'crm-admins/ADT', 
					   'crm-agents/Salesforce', 
					   'crm-agents/ADT', 
					   'privacy-compliance', 
					   'reports-dashboards', 
					   'supervisor-plus', 
					   'technical-reqs', 
					   'uc-adapters' ];
var de_langpairs = [ 'agent-desktop-plus', 
					   'crm-agents/ADT', 
					   'crm-agents/MSDynamics', 
					   'crm-agents/NetSuite', 
					   'crm-agents/Oracle', 
					   'crm-agents/Salesforce', 
					   'crm-agents/ServiceNow', 
					   'crm-agents/Zendesk', 
					   'supervisor-plus' ];

var path = location.pathname;
var curLang = "en-us";
var lang;
var rootURL;			// the root portion of the URL up to the language
var landingPage; 		// the landing page topic path

$(document).ready(function() {			// on page load, find which language folder is in the URL
	for (var i = 0; i < langs.length; i++) {
		if (path.indexOf('/' + langs[i] + '/') != -1) {
			curLang = langs[i];			// set the current language variable based on URL
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
			curLang = langs[i];			// set current language -- IS THIS DUPLICATING LINE 23?
		}
	}
		
	var filename = path.substring(path.lastIndexOf('/') + 1);
	if (path.indexOf('/' + lang + '/') == -1) {				// If the current path doesn't include the language picked in the drop-down...
		var url = window.location.toString();					// set the url variable to current path	
		
		//override values for  testing
		// var url = "https://documentation.five9.com/en-us/supervisor-plus/using-adp/customizing-station/sound-alert-settings.htm";
		// curLang = "en-us";											
		// lang = "fr-ca";
		
		rootURL = url.slice(url.StartsWith, url.search(curLang) ); 	// grab the URL up to the language of the current page
		subfolders = url.substring(rootURL.length + curLang.length + 1); // grab everything else

		if (lang == "de") {											// when selected language is German, 
			for (var i = 0; i < de_langpairs.length; i++) {			//  for each language pair 
				if (url.search(de_langpairs[i])  != -1) {			//   look for the repo id in the url and if found set the landing page value
					if (de_langpairs[i]== "agent-desktop-plus") {
						landingPage = "agent-desktop-plus/landing-agent-desktop-plus.htm";			
					} else if (de_langpairs[i] == "crm-agents/ADT") {
						landingPage = "crm-agents/ADT/landing-crm-agents-guide-ADT.htm";
					} else if (de_langpairs[i] == "crm-agents/MSDynamics") {
						landingPage = "crm-agents/MSDynamics/landing-crm-agents-guide-MSD.htm";
					} else if (de_langpairs[i] == "crm-agents/NetSuite") {
						landingPage = "crm-agents/NetSuite/landing-crm-agents-guide-NetSuite.htm";
					} else if (de_langpairs[i] == "crm-agents/Oracle") {
						landingPage = "crm-agents/Oracle/landing-crm-agents-guide-Oracle.htm";
					} else if (de_langpairs[i] == "crm-agents/Salesforce") {
						landingPage = "crm-agents/Salesforce/landing-crm-agents-guide-Salesforce.htm";
					} else if (de_langpairs[i] == "crm-agents/ServiceNow") {
						landingPage = "crm-agents/ServiceNow/landing-crm-agents-guide-ServiceNow.htm";
					} else if (de_langpairs[i] == "crm-agents/Zendesk") {
						landingPage = "crm-agents/Zendesk/landing-crm-agents-guide-Zendesk.htm";
					} else if (de_langpairs[i] == "supervisor-plus") {
						landingPage = "supervisor-plus/landing-supervisor-plus.htm";
					} else {
						landingPage = "home.htm";					// if the repo id isn't found, set landing page to the language home page
					} 												// this should only happen if the language button is showing on content where we don't have translated content 
				}
			}
			if (landingPage === undefined) { 						 // if url isn't in the set of language pairs, set landing page to the language home page
				landingPage = "home.htm";
			}	
		} else if (lang == "fr-ca") {
			for (var i = 0; i < frca_langpairs.length; i++) {
				if (url.search(frca_langpairs[i])  != -1) {
					if (frca_langpairs[i]== "agent-desktop-plus") {
						landingPage = "agent-desktop-plus/landing-agent-desktop-plus.htm";			
					} else if (frca_langpairs[i] == "basic-admin") {
						landingPage = "basic-admin/landing-basic-admin.htm";
					} else if (frca_langpairs[i] == "campaign-admin") {
						landingPage = "campaign-admin/landing-campaign-admin.htm";
					} else if (frca_langpairs[i] == "digital-engagement") {
						landingPage = "digital-engagement/landing-digital-engagement.htm";
					} else if (frca_langpairs[i] == "ivr-admin") {
						landingPage = "ivr-admin/landing-ivr-admin.htm";
					} else if (frca_langpairs[i] == "crm-admins/ADT") {
						landingPage = "crm-admins/ADT/landing-crm-admins-ADT.htm";
					} else if (frca_langpairs[i] == "crm-admins/Salesforce") {
						landingPage = "crm-admins/Salesforce/landing-crm-admins-Salesforce.htm";
					} else if (frca_langpairs[i] == "crm-agents/ADT") {
						landingPage = "crm-agents/ADT/landing-crm-agents-guide-ADT.htm";
					} else if (frca_langpairs[i] == "crm-agents/Salesforce") {
						landingPage = "crm-agents/Salesforce/landing-crm-agents-guide-Salesforce.htm";
					} else if (frca_langpairs[i] == "privacy-compliance") {
						landingPage = "supervisor-plus/landing-supervisor-plus.htm";
					} else if (frca_langpairs[i] == "reports-dashboards") {
						landingPage = "reports-dashboards/landing-reports-dashboards.htm";
					} else if (frca_langpairs[i] == "supervisor-plus") {
						landingPage = "supervisor-plus/landing-supervisor-plus.htm";
					} else if (frca_langpairs[i] == "technical-reqs") {
						landingPage = "technical-reqs/landing-technical-reqs.htm";
					} else if (frca_langpairs[i] == "uc-adapters") {
						landingPage = "uc-adapters/landing-uc-adapters-admin-gd.htm";								
					} else {
						landingPage = "home.htm";
					}
				}
			}
			if (landingPage === undefined) {  
				landingPage = "home.htm";
			}			
		}

		url = rootURL + lang + "/Content/" + landingPage  ; 	// combine elements to make the landing page URL
		// alert ("URL = " + url ); 		
		window.location = url;									// navigate to the new page
	}
}