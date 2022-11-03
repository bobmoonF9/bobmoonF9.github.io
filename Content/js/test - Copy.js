<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Strings</h1>
<h2>The substring() Method</h2>

<p>substring() extracts a part of a string:</p>


<p id="path"></p>
<p id="curLang"></p>
<p id="lang"></p>
<p id="rootURL"></p>
<p id="contentID"></p>

<script>
var url = "https://documentation.five9.com/de/agent-desktop-plus/preparing-station/_ch-preparing-your-station.htm";
var url = "https://documentation.five9.com/de/not-supported/preparing-station/morefolders/_ch-preparing-your-station.htm";
var url = "https://documentation.five9.com/de/crm-agents/ADT/morefolders/_ch-preparing-your-station.htm";


var langs = [ 'en-us', 'fr-ca', 'de' ];
var frca_langpairs = [ 'agent-desktop-plus', 'supervisor-plus', 'technical-reqs' ];
var de_langpairs = [ 'agent-desktop-plus', 'supervisor-plus', 'crm-agents/ADT' ];

var path = location.pathname;
var curLang = "de";
var lang = "de";
var rootURL = "https://documentation.five9.com/";			// the root portion of the URL up to the language
var subfolders;			// the portions of the URL between the language and the topic file name
var contentID = "crm-agents";			// the portion of the URL relating to the content repo

var test;  				// url up to the contentID
var tempfolders;				// crm itegration folder
var integrationID;
var url;

//var url = window.location.toString();					// set the url variable to current path	
		
rootURL = url.slice(url.StartsWith, url.search(curLang) ); 	// grab the URL up to the current language
//alert ("rootURL = " + rootURL );  

subfolders = url.substring(rootURL.length + curLang.length + 1,url.lastIndexOf("/")); //grab the folders in the URL from the rootURL location to the last slash

//alert ("subfolders = " + subfolders );  

//check if the subfolders var has a slash, so the page is nested in subfolders under the guide level
if (subfolders.indexOf('/') == -1) {	
	contentID = subfolders; 	// if no slash for subfolders, set the variable 
} else {
	contentID = subfolders.substring(0,subfolders.indexOf("/")) ;     // else chop the subfolders after the first slash 
}

alert ("contentID = " + contentID ); 


if(contentID=="crm-agents") {
  //rootURL = url.slice(url.StartsWith, url.search(contentID) + contentID.length ); 
  //alert ("rootURL = " + rootURL );  
  
  //get all up to the contentID
  //test = rootURL;
  
  alert ("all up to the contentID = " + rootURL );    
  //grab the value after the contentID
  //test2 = url.substring(rootURL.length + 1 ); 
  //alert ("all up to the contentID = " + test2 );    
  
  tempfolders = subfolders;

  alert ("remainder of URL tempfolders = " + tempfolders );  
  
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


document.getElementById("lang").innerHTML = lang;
document.getElementById("curLang").innerHTML = curLang;
document.getElementById("lang").innerHTML = lang;
document.getElementById("rootURL").innerHTML = rootURL;
document.getElementById("contentID").innerHTML = contentID;

url = rootURL + lang + "/" + contentID + "/landing-" + contentID + ".htm" ;   // combine elements to make the landing page URL

alert ("URL = " + url ); 

</script>

</body>
</html>
