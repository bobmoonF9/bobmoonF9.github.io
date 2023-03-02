

var langs = [ 'en-us', 'fr-ca', 'de' ];
// MAINTENANCE: Add all repos that are translated here
// MAINTENANCE: Add the landing pages for all repo in the array below.
// MAINTENANCE: It is critical that repos and landing pages are in the correct order.
var enus_repos = [ 'agent-desktop-plus',		// 0 = "agent-desktop-plus/landing-agent-desktop-plus.htm";
					   'basic-admin', 			// 1 = "basic-admin/landing-basic-admin.htm";
					   'campaign-admin', 		// 2 = "campaign-admin/landing-campaign-admin.htm";
					   'digital-engagement', 	// 3 = "digital-engagement/landing-digital-engagement.htm";
					   'ivr-admin', 			// 4 = "ivr-admin/landing-ivr-admin.htm";
					   'privacy-compliance', 	// 5 = "privacy-compliance/landing-privacy-compliance.htm";
					   'reports-dashboards', 	// 6 = "reports-dashboards/landing-reports-dashboards.htm";
					   'supervisor-plus', 		// 7 = "supervisor-plus/landing-supervisor-plus.htm";
					   'technical-reqs', 		// 8 = "technical-reqs/landing-technical-reqs.htm";
					   'uc-adapters',			// 9 = "uc-adapters/landing-uc-adapters-admin-gd.htm";	
					   'crm-admins/ADT', 		// 10 = "crm-admins/ADT/landing-crm-admins-ADT.htm";
					   'crm-agents/ADT', 		// 11 = "crm-agents/ADT/landing-crm-agents-guide-ADT.htm";
					   'crm-admins/Salesforce', // 12 = "crm-admins/Salesforce/landing-crm-admins-Salesforce.htm";
					   'crm-agents/Salesforce', // 13 = "crm-agents/Salesforce/landing-crm-agents-guide-Salesforce.htm";
					   'crm-agents/MSDynamics', // 14 = "crm-agents/MSDynamics/landing-crm-agents-guide-MSD.htm";
					   'crm-agents/NetSuite', 	// 15 = "crm-agents/NetSuite/landing-crm-agents-guide-NetSuite.htm";
					   'crm-agents/Oracle', 	// 16 = "crm-agents/Oracle/landing-crm-agents-guide-Oracle.htm";
					   'crm-agents/ServiceNow', // 17 = "crm-agents/ServiceNow/landing-crm-agents-guide-ServiceNow.htm";
					   'crm-agents/Zendesk']; 	// 18 = "crm-agents/Zendesk/landing-crm-agents-guide-Zendesk.htm";	   
var enus_landingPages = [ "agent-desktop-plus/landing-agent-desktop-plus.htm",			// 0 
					   "basic-admin/landing-basic-admin.htm",							// 1
					   "campaign-admin/landing-campaign-admin.htm",						// 2
					   "digital-engagement/landing-digital-engagement.htm",				// 3
					   "ivr-admin/landing-ivr-admin.htm",								// 4
					   "privacy-compliance/landing-privacy-compliance.htm",				// 5
					   "reports-dashboards/landing-reports-dashboards.htm",				// 6
					   "supervisor-plus/landing-supervisor-plus.htm",					// 7
					   "technical-reqs/landing-technical-reqs.htm",						// 8 
					   "uc-adapters/landing-uc-adapters-admin-gd.htm",					// 9
					   "crm-admins/ADT/landing-crm-admins-ADT.htm",						// 10
					   "crm-agents/ADT/landing-crm-agents-guide-ADT.htm",				// 11 
					   "crm-admins/Salesforce/landing-crm-admins-Salesforce.htm",		// 12
					   "crm-agents/Salesforce/landing-crm-agents-guide-Salesforce.htm",	// 13
					   "crm-agents/MSDynamics/landing-crm-agents-guide-MSD.htm",		// 14
					   "crm-agents/NetSuite/landing-crm-agents-guide-NetSuite.htm",		// 15 
					   "crm-agents/Oracle/landing-crm-agents-guide-Oracle.htm",			// 16 
					   "crm-agents/ServiceNow/landing-crm-agents-guide-ServiceNow.htm",	// 17 
					   "crm-agents/Zendesk/landing-crm-agents-guide-Zendesk.htm"];	  	// 18
// MAINTENANCE: Add all repos that are translated to FR-CA here					   
// MAINTENANCE: Add the landing pages for all fr-ca repos in the array below.
var frca_repos = [ 'agent-desktop-plus', 		// 0 = "agent-desktop-plus/landing-agent-desktop-plus.htm";
					   'basic-admin', 			// 1 = "basic-admin/landing-basic-admin.htm";
					   'campaign-admin', 		// 2 = "campaign-admin/landing-campaign-admin.htm";
					   'digital-engagement', 	// 3 = "digital-engagement/landing-digital-engagement.htm";
					   'ivr-admin', 			// 4 = "ivr-admin/landing-ivr-admin.htm";
					   'privacy-compliance', 	// 5 = "privacy-compliance/landing-privacy-compliance.htm";
					   'reports-dashboards', 	// 6 = "reports-dashboards/landing-reports-dashboards.htm";
					   'supervisor-plus', 		// 7 = "supervisor-plus/landing-supervisor-plus.htm";
					   'technical-reqs', 		// 8 = "technical-reqs/landing-technical-reqs.htm";
					   'uc-adapters',			// 9 = "uc-adapters/landing-uc-adapters-admin-gd.htm";	
					   'crm-admins/ADT', 		// 10 = "crm-admins/ADT/landing-crm-admins-ADT.htm";
					   'crm-agents/ADT', 		// 11 = "crm-agents/ADT/landing-crm-agents-guide-ADT.htm";
					   'crm-admins/Salesforce', // 12 = "crm-admins/Salesforce/landing-crm-admins-Salesforce.htm";
					   'crm-agents/Salesforce']; // 13 = "crm-agents/Salesforce/landing-crm-agents-guide-Salesforce.htm";
var frca_landingPages = [ "agent-desktop-plus/landing-agent-desktop-plus.htm",			// 0 
					   "basic-admin/landing-basic-admin.htm",							// 1
					   "campaign-admin/landing-campaign-admin.htm",						// 2
					   "digital-engagement/landing-digital-engagement.htm",				// 3
					   "ivr-admin/landing-ivr-admin.htm",								// 4
					   "privacy-compliance/landing-privacy-compliance.htm",				// 5
					   "reports-dashboards/landing-reports-dashboards.htm",				// 6
					   "supervisor-plus/landing-supervisor-plus.htm",					// 7
					   "technical-reqs/landing-technical-reqs.htm",						// 8 
					   "uc-adapters/landing-uc-adapters-admin-gd.htm",					// 9
					   "crm-admins/ADT/landing-crm-admins-ADT.htm",						// 10
					   "crm-agents/ADT/landing-crm-agents-guide-ADT.htm",				// 11 
					   "crm-admins/Salesforce/landing-crm-admins-Salesforce.htm",		// 12
					   "crm-agents/Salesforce/landing-crm-agents-guide-Salesforce.htm",	// 13
					   "crm-agents/MSDynamics/landing-crm-agents-guide-MSD.htm",		// 14
					   "crm-agents/NetSuite/landing-crm-agents-guide-NetSuite.htm",		// 15 
					   "crm-agents/Oracle/landing-crm-agents-guide-Oracle.htm",			// 16 
					   "crm-agents/ServiceNow/landing-crm-agents-guide-ServiceNow.htm",	// 17 
					   "crm-agents/Zendesk/landing-crm-agents-guide-Zendesk.htm"];	  	// 18
// MAINTENANCE: Add all repos that are translated to DE  here					   
// MAINTENANCE: Add the landing pages for all de repos in the array below.
var de_repos = [ 'agent-desktop-plus',  		// 0 = "agent-desktop-plus/landing-agent-desktop-plus.htm";
					   'supervisor-plus', 		// 1 = "supervisor-plus/landing-supervisor-plus.htm";
					   'crm-agents/ADT', 		// 2 = "crm-agents/ADT/landing-crm-agents-guide-ADT.htm";
					   'crm-agents/Salesforce', // 3 = "crm-agents/Salesforce/landing-crm-agents-guide-Salesforce.htm";
					   'crm-agents/MSDynamics', // 4 = "crm-agents/MSDynamics/landing-crm-agents-guide-MSD.htm";
					   'crm-agents/NetSuite', 	// 5 = "crm-agents/NetSuite/landing-crm-agents-guide-NetSuite.htm";
					   'crm-agents/Oracle', 	// 6 = "crm-agents/Oracle/landing-crm-agents-guide-Oracle.htm";
					   'crm-agents/ServiceNow', // 7 = "crm-agents/ServiceNow/landing-crm-agents-guide-ServiceNow.htm";
					   'crm-agents/Zendesk']; 	// 8 = "crm-agents/Zendesk/landing-crm-agents-guide-Zendesk.htm";	 					   

var de_landingPages = [ "agent-desktop-plus/landing-agent-desktop-plus.htm",			// 0 
					   "supervisor-plus/landing-supervisor-plus.htm",					// 1
					   "crm-agents/ADT/landing-crm-agents-guide-ADT.htm",				// 2
					   "crm-agents/Salesforce/landing-crm-agents-guide-Salesforce.htm",	// 3
					   "crm-agents/MSDynamics/landing-crm-agents-guide-MSD.htm",		// 4
					   "crm-agents/NetSuite/landing-crm-agents-guide-NetSuite.htm",		// 5 
					   "crm-agents/Oracle/landing-crm-agents-guide-Oracle.htm",			// 6 
					   "crm-agents/ServiceNow/landing-crm-agents-guide-ServiceNow.htm",	// 7 
					   "crm-agents/Zendesk/landing-crm-agents-guide-Zendesk.htm"];	  	// 8

var path = location.pathname;
var curLang = "en-us";	// the language of the current page 
var lang;				// the language selected in the dropdown 
var rootURL;			// the root portion of the URL up to the language
var landingPage; 		// the landing page topic for projects that don't follow the naming convention

$(document).ready(function() {			// on page load, find which language folder is in the URL
	for (var i = 0; i < langs.length; i++) {
		if (path.indexOf('/' + langs[i] + '/') != -1) {
			curLang = langs[i];			// set the current language variable based on URL
		}
	}
});

$(document).ready(function() { 				// on page load, set the language drop down to the current language
	$('select#lang').val(curLang);
	$('select#lang').css('visibility','visible');

	$('select#lang').change(function() {  	// process language change
		lang = $(this).val();				// update the lang value with the selected language 
		localStorage.setItem('lang', lang);
		use_lang(lang);						// run the function to navigate to the new page
	});
});

// redirect
function use_lang() {					// on change to the language drop down
	for (var i = 0; i < langs.length; i++) {
		if (path.indexOf('/' + langs[i] + '/') != -1) {
			curLang = langs[i];			// re-set current language. This seems to duplicate the function from page load. This for loop can be commented out.
		}
	}
		
	// var filename = path.substring(path.lastIndexOf('/') + 1);
	if (path.indexOf('/' + lang + '/') == -1) {				// If the current path doesn't include the language picked in the drop-down...
		var url = window.location.toString();					// set the url variable to current path	
		
		//override values for  testing
		var url = "https://documentation.five9.com/alphatest/crm-agents/using-adp/customizing-station/sound-alert-settings.htm";
		// curLang = "en-us";											
		// lang = "fr-ca";
		
		
		url = url.replace("alphatest", "en-us");		// replace alphatest and betatest with en-us so the URL is parsed correctly
		url = url.replace("betatest", "en-us");
		
		rootURL = url.slice(url.StartsWith, url.search(curLang) ); 	// grab the URL up to the language of the current page
		// subfolders = url.substring(rootURL.length + curLang.length + 1); // grab everything else

		if (lang == "de") {								// check the content ID against the defined languages for german
			for (var i = 0; i < de_repos.length; i++) {					// cycle through defined repos
				if (url.search("/" + de_repos[i] + "/")  != -1) {
					landingPage = de_landingPages[i];
				}
			}
		} else if (lang == "fr-ca") {
			for (var i = 0; i < frca_repos.length; i++) {					// cycle through defined repos
				if (url.search("/" + frca_repos[i] + "/")  != -1) {
					landingPage = frca_landingPages[i];
				}
			}
		} else if (lang == "en-us") {
			for (var i = 0; i < enus_repos.length; i++) {					// cycle through defined repos
				if (url.search("/" + enus_repos[i] + "/")  != -1) {
					landingPage = enus_landingPages[i];
				}
			}
			if (landingPage === undefined) {  	// if url isn't in a translated repo, set to the language home page
				landingPage = "home.htm";
			}			
		}

		url = rootURL + lang + "/Content/" + landingPage  ; 	// combine elements to make the landing page URL  MAINTENANCE: Remove the /Content/ text when the URL changes
		// alert ("URL = " + url ); 		
		window.location = url;									// navigate to the new page
	}
}