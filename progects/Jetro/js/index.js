var plashka = document.querySelectorAll(".plashka");
var plusBtn = document.querySelector(".plashka>.plus_btn");
// for( i = 0;i<plashka.length;i++);

function OpacityOver(){
  for(var i = 0; i<plusBtn.length; i++){ 
 		if(plusBtn[i].style.opacity == 0){
			plusBtn[i].style.opacity = 1;
		}
		else{plusBtn[i].style.opacity = 0};
	};	
};	
function OpacityOut(){
  for(var i = 0; i<plusBtn.length; i++){
 		if(plusBtn[i].style.opacity == 1){
			plusBtn[i].style.opacity = 0;
		}
		else{plusBtn[i].style.opacity = 1};
	};	
};

plashka.onmouseover = function(){
		OpacityOver();	
};
plashka.onmouseout = function(){
		OpacityOut();	
};
