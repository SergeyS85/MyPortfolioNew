window.onscroll = function(event){
	var header = document.querySelector('.header__navigation');
	if(window.pageYOffset >= 600){
		header.classList.add("shadow_box");
	}
	else if(window.pageYOffset <= 600){
		header.classList.remove("shadow_box");
	}
	// console.log(window.pageYOffset + " px")
	console.log(header.pageYOffset)
};


 