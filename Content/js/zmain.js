
//search js
  let search = document.querySelector(".form .form-input");

  search.addEventListener("keydown", function(event) {
    if (event.keyCode == '13') {
       window.location = `${location.href.substring(0, location.href.lastIndexOf("/"))}`+"/Search.htm?q=" + this.value
     }
    });

//tooltip js
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

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

//home button js
$(document).ready(function() { 
	// set language selector current language
	$('select#langHome').val(curLang);
	$('select#langHome').css('visibility','visible');

	// process language change
	$('select#langHome').change(function() {
		lang = $(this).val();
		localStorage.setItem('langHome', langHome);
		use_lang(lang);
	});
});

// redirect
function zuse_lang() {
	for (var i = 0; i < langs.length; i++) {
		if (path.indexOf('/' + langs[i] + '/') != -1) {
			curLang = langs[i];
		}
	}

	var filename = path.substring(path.lastIndexOf('/') + 1);
	if (path.indexOf('/' + langHome + '/') == -1) {
		var url = window.location.toString();
		url = url.replace(curLang, langHome);
		url = url.substring(0, url.indexOf(langHome)) + langHome + "/Default.htm";
		window.location = url;
	}
}

//feedback form
$('#form').submit(function(e) {
  document.getElementById("currURL").value = window.location.href;  // Update the form's input field value with the current URL  			
  e.preventDefault();
  $.ajax({
  url: "https://docs.google.com/forms/d/1oO9yubFk9TvQGS1SuH0copBZJb83lSYInnKUHtdfIJg/formResponse",
  data: $(this).serialize(),
  type: "POST",
  dataType: "xml",
  success: function(data) {
  console.log('Submission successful');
  },
  error: function(xhr, status, error) {
  console.log('Submission failed: ' + error);
  }
  });
  });

  $(document).ready(function() {
    $("#form").submit(function(e) {
    e.preventDefault();
    $("#feedback-question").hide();
    $("#feedback-reason").show();
    });
    });

//nav js
  document.addEventListener("DOMContentLoaded", function(){

    // Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function(element){
      element.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    });
  
     // make it as accordion for smaller screens
    if (window.innerWidth < 992) {
      // close all inner dropdowns when parent is closed
      document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
        everydropdown.addEventListener('hidden.bs.dropdown', function () {
          // after dropdown is hidden, then find all submenus
            this.querySelectorAll('.megasubmenu').forEach(function(everysubmenu){
              // hide every submenu as well
              everysubmenu.style.display = 'none';
            });
        })
      });
  
      document.querySelectorAll('.has-submenu a').forEach(function(element){
        element.addEventListener('click', function (e) {
            let nextEl = this.nextElementSibling;
            if(nextEl && nextEl.classList.contains('megasubmenu')) {	
              // prevent opening link if link needs to open dropdown
              e.preventDefault();
              if(nextEl.style.display == 'block'){
                nextEl.style.display = 'none';
              } else {
                nextEl.style.display = 'block';
              }
            }
        });
      }) // end foreach
    }
    // end if innerWidth
  }); 
  // DOMContentLoaded  end