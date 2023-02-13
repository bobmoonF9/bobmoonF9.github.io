

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
var subfolders;			// the portions of the URL between the language and the topic file name
var contentID;			// the portion of the URL relating to the content repo
var integrationID;		// the crm integration indicator from the URL
var integrationPath; 	// the path for crm integrations (contentID/integrationID)   -NOT USED
var landingPage; 		// the landing page topic for projects that don't follow the naming convention

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
		
	if (path.indexOf('/' + lang + '/') == -1) {				// If the current path doesn't include the language picked in the drop-down...
		var url = window.location.toString();					// set the url variable to current path	
		
		//overrides for testing
		// var url = "https://documentation.five9.com/de/crm-agents/ADT/morefolders/test/_ch-preparing-your-station.htm";
		// var url = "https://documentation.five9.com/de/crm-agents/ADT/softphone/preparing-your-station.htm" ;
		//var url = "https://documentation.five9.com/de/crm-agents/NetSuite/engagement/_ch-processing-digital-engagement-interactions.htm";
		// var url = "https://documentation.five9.com/de/crm-agents/MSDynamics/engagement/_ch-processing-digital-engagement-interactions.htm"; 
		// var url = "https://documentation.five9.com/de/crm-agents/salesforce/engagement/_ch-processing-digital-engagement-interactions.htm";
		// var url = "https://documentation.five9.com/de/crm-agents/salesforce/engagement/_ch-processing-digital-engagement-interactions.htm";
		// var url = "https://documentation.five9.com/de/cZZrm-agents/salesforce/engagement/_ch-processing-digital-engagement-interactions.htm";
		//var url = "https://documentation.five9.com/fr-ca/agent-desktop-plus/using-adp/customizing-station/sound-alert-settings.htm";
		//var url = "https://documentation.five9.com/fr-ca/agenzt-desktop-plus/using-adp/customizing-station/sound-alert-settings.htm";

		var url = "https://documentation.five9.com/en-us/supervisor-plus/using-adp/customizing-station/sound-alert-settings.htm";
		
		
		// curLang = "en-us";											// for testing, set the language 
		// lang = "fr-ca";
		
		rootURL = url.slice(url.StartsWith, url.search(curLang) ); 	// grab the URL up to the language of the current page
		subfolders = url.substring(rootURL.length + curLang.length + 1); // grab everything else
		
		//subfolders = url.substring(rootURL.length + curLang.length + 1,url.lastIndexOf("/")); //grab the folders in the URL between the rootURL and the /topic-filename.htm
		
		//check if the subfolders var has a slash, so the page is nested in subfolders under the guide level
		// if (subfolders.indexOf('/') == -1) {	
			// contentID = subfolders; 										// if no slash for subfolders, set the variable 
		// } else {
			// contentID = subfolders.substring(0,subfolders.indexOf("/")) ;   // else chop the subfolders after the first slash to get the repo
		// }

		// alert ("rootURL = " + rootURL + "\n url = " + url + "\n curLang = " + curLang + "\n subfolders = " + subfolders );  

		if (lang == "de") {								// check the content ID against the defined languages for german
			for (var i = 0; i < de_langpairs.length; i++) {					// cycle through defind pairs
				if (url.search(de_langpairs[i])  != -1) {					// if the repo id is found, then set the landing page 
					//contentID = de_langpairs[i];
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
						landingPage = "home.htm";
					} 
				}
			}
			if (landingPage === undefined) {  // if url isn't in the set of language pairs, set landing page to the language home page
				landingPage = "home.htm";
			}	
		} else if (lang == "fr-ca") {
			for (var i = 0; i < frca_langpairs.length; i++) {
				if (url.search(frca_langpairs[i])  != -1) {
					if (frca_langpairs[i]== "agent-desktop-plus") {
						landingPage = "agent-desktop-plus/landing-agent-desktop-plus.htm";			// set current language -- IS THIS DUPLICATING LINE 23?
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
			if (landingPage === undefined) {  // if url isn't in language pair, set to the language home page
				landingPage = "home.htm";
			}			
		}



		url = rootURL + lang + "/Content/" + landingPage  ;   // combine elements to make the landing page URL
		//url = rootURL + lang + "/" + contentID + "/landing-" + contentID.slice(0,contentID.search("/") ) + ".htm" ;   // combine elements to make the landing page URL
		 alert ("URL = " + url ); 
		 window.location = url;
	}
}
