
  let search = document.querySelector(".form .form-input");

  search.addEventListener("keydown", function(event) {
	if (event.keyCode == '13') {
	  window.location = "https://five9inc.mcoutput.com/1379844/Content/Search.htm#cshid=&searchQuery=" + this.value;
	}
	//comment
	
  });