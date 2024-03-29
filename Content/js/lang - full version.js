﻿

// supported languages - add the project portion of the URL here 
var langs = [ 'en-us', 'fr-ca', 'de' ];
var frca_langpairs = [ 'agent-desktop-plus', 'supervisor-plus', 'technical-reqs' ];
var de_langpairs = [ 'agent-desktop-plus', 'supervisor-plus', 'crm-agents/ADT', 'crm-agents/NetSuite', 'crm-agents/MSDynamics', 'crm-agents/salesforce' ];



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

	var filename = path.substring(path.lastIndexOf('/') + 1); 	// sets current topic file name, not used in the current script
	
	if (path.indexOf('/' + lang + '/') == -1) {				// If the current path doesn't include the language picked in the drop-down...
		var url = window.location.toString();					// set the url variable to current path	
		
		//overrides for testing
		// var url = "https://documentation.five9.com/de/crm-agents/ADT/morefolders/test/_ch-preparing-your-station.htm";
		// var url = "https://documentation.five9.com/de/crm-agents/ADT/softphone/preparing-your-station.htm" ;
		//var url = "https://documentation.five9.com/de/crm-agents/NetSuite/engagement/_ch-processing-digital-engagement-interactions.htm";
		// var url = "https://documentation.five9.com/de/crm-agents/MSDynamics/engagement/_ch-processing-digital-engagement-interactions.htm"; 
		 var url = "https://documentation.five9.com/de/crm-agents/salesforce/engagement/_ch-processing-digital-engagement-interactions.htm";
		//var url = "https://documentation.five9.com/fr-ca/agent-desktop-plus/using-adp/customizing-station/sound-alert-settings.htm";
		
		curLang = "de";											// for testing, always use de
		lang = "de";
		
		rootURL = url.slice(url.StartsWith, url.search(curLang) ); 	// grab the URL up to the language of the current page
		subfolders = url.substring(rootURL.length + curLang.length + 1,url.lastIndexOf("/")); //grab the folders in the URL between the rootURL and the /topic-filename.htm
		
		//check if the subfolders var has a slash, so the page is nested in subfolders under the guide level
		if (subfolders.indexOf('/') == -1) {	
			contentID = subfolders; 										// if no slash for subfolders, set the variable 
		} else {
			contentID = subfolders.substring(0,subfolders.indexOf("/")) ;   // else chop the subfolders after the first slash to get the repo
		}

alert ("contentID =  " + contentID + "\n rootURL = " + rootURL + "\n url = " + url + "\n curLang = " + curLang );  

	
		for (var i = 0; i < de_langpairs.length; i++) {
		if (url.search(de_langpairs[i])  != -1) {
			if (contentID == "agent-desktop-plus") {
				landingPage = "hello ADP";			// set current language -- IS THIS DUPLICATING LINE 23?
			} else if (contentID == "supervisor-plus") {
				landingPage = "hello SUP";
			} else if (contentID == "crm-agents") {
				landingPage = "hello SUP";
				
				if (contentID=="crm-agents") {	// process the crm-agents and crm-admin content which has a different structure
		  
					integrationPath = contentID + "/" + subfolders.slice(contentID.length + 1,subfolders.indexOf(("/"),contentID.length+1)); // chop off extra subfolders
					if (integrationPath=="crm-agents/ADT") {
						landingPage = "hello ADT";
					} else if (integrationPath=="crm-agents/NetSuite") {
						landingPage = "hello NetSuite";
					} else if (integrationPath=="crm-agents/MSDynamics") {
						landingPage = "-guide-MSD";
					} else if (integrationPath=="crm-agents/salesforce") {
						landingPage =  "-guide-Salesforce" ;
					} else if (integrationPath=="crm-agents/NetSuite") {
						landingPage = "hello NetSuite";
					}
				}		
				
			} else {
				
			}
		}
		}
		



		if (contentID=="crm-agents") {	// process the crm-agents and crm-admin content which has a different structure
		  
		  integrationPath = contentID + "/" + subfolders.slice(contentID.length + 1,subfolders.indexOf(("/"),contentID.length+1)); // chop off extra subfolders
		  if (integrationPath=="crm-agents/ADT") {
			  landingPage = "hello ADT";
		  } else if (integrationPath=="crm-agents/NetSuite") {
			  landingPage = "hello NetSuite";
		  } else if (integrationPath=="crm-agents/MSDynamics") {
			  landingPage = "-guide-MSD";
		  } else if (integrationPath=="crm-agents/salesforce") {
			  landingPage =  "-guide-Salesforce" ;
		  } else if (integrationPath=="crm-agents/NetSuite") {
			  landingPage = "hello NetSuite";
			}
		 }  
		  
		  // integrationPath = contentID.length + 1;
		  // integrationPath = subfolders.indexOf(("/"),contentID.length+1);
		  // integrationPath = subfolders.slice(contentID.length + 1,subfolders.indexOf(("/"),contentID.length+1)); // chop off extra subfolders
		  
		  // integrationPath = contentID + "/" + subfolders.slice(contentID.length + 1,subfolders.indexOf(("/"),contentID.length+1)); // chop off extra subfolders
		  
		  // integrationID = subfolders.substring(contentID.length + 1); 		// set integrationID to the first level of the subfolders
		  
		  
		  
		  
		  //integrationID = integrationID.substring(0,integrationID.indexOf("/")); // chop off extra subfolders
		  
		  //alert ("includes a crm subfolder = " + integrationID );  
		  // integrationPath = contentID + "/" + integrationID;	// add the subfolder for the crm-agents content 
		  contentID = contentID + "/" + integrationID;	// add the subfolder for the crm-agents content 

alert ("integrationID =  " + integrationID + "contentID =  " + contentID + "\n rootURL = " + rootURL + "\n curLang = " + curLang );  

			if (integrationID=="MSDynamics") {			// set the landing page for each integration 
			  landingPage =  "-guide-MSD";	// crm-agents/MSDynamics/landing-crm-agents-guide-MSD.htm
			} else if (integrationID=="salesforce") {
			  landingPage =  "-guide-Salesforce" ;	// crm-agents/salesforce/landing-crm-agents-guide-Salesforce.htm
			} else  {
			  landingPage =  "-guide-" + integrationID ;	// crm-agents/ADT/landing-crm-agents-guide-ADT.htm 
			}
		  landingPage = "/landing-" + contentID.slice(0,contentID.search("/") ) + landingPage ;	
		} else {
		  landingPage =  "/landing-" + contentID ;	// 
		}


		if(lang == "de") {								// check the content ID against the defined languages for german
			if(de_langpairs.indexOf(contentID) +1) {	// if the contentID matches a language pair, add the project landing page
				// alert ("grab content id = " + contentID.slice(0,contentID.search("/") ) );
				url = rootURL + lang + "/Content/" + contentID + landingPage + ".htm";
				// url = rootURL + "/" + contentID + "/landing-" + contentID.substring(0,integrationID.length) + ".htm";
			} else {									// else route to the German landing page 
				url = rootURL + lang + "/" + "Default.htm";
			}
		  alert ("URL = " + url ); 
		}



		// url = rootURL + lang + "/" + contentID + "/landing-" + contentID.slice(0,contentID.search("/") ) + ".htm" ;   // combine elements to make the landing page URL
		// window.location = url;
		// alert ("URL = " + url ); 
	}
