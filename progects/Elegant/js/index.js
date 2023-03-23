var chapterMenu = document.querySelector(".header__nav");
var headerMenu = document.querySelector(".header_menu");
var headerMenuli = document.querySelectorAll("li");

chapterMenu.onclick = function(){
	headerMenu.classList.toggle("active");
  Animation();
  Opacity()
};


function Animation(){
	for ( var m = 0; m < headerMenuli.length; m++){
   	if(headerMenuli[m].style.paddingLeft === "0px"){
		 headerMenuli[m].style.paddingLeft = "80px";
	}
	  else{headerMenuli[m].style.paddingLeft = "0px";}
		};
	
		headerMenuli[0].style.transitionDelay = '0.1s';
		headerMenuli[1].style.transitionDelay = '0.2s';
		headerMenuli[2].style.transitionDelay = '0.3s';
		headerMenuli[3].style.transitionDelay = '0.4s';
		headerMenuli[4].style.transitionDelay = '0.5s';
		headerMenuli[5].style.transitionDelay = '0.6s';
  
 };
 function Opacity(){
  for ( var m = 0; m < headerMenuli.length; m++){
 		if(headerMenuli[m].style.opacity == 1){
			headerMenuli[m].style.opacity = 0;
		}
		else{headerMenuli[m].style.opacity = 1};
	}	
}

