var sliderBox = document.querySelector(".slider_box");
var slidersBox = document.querySelectorAll(".slider_box");

var nextOffer = document.querySelector(".button--next_offer");
var backOffer = document.querySelector(".button--back_offer");
var moove = 0;

nextOffer.onclick =  function(){
  moove = moove - 970;	
	if(moove == -970 * slidersBox.length){
		moove = (-970 * slidersBox.length)+970;
	}
	sliderBox.style.marginLeft = moove + "px";
	console.log(moove);
};

backOffer.onclick = function(){
	moove = moove + 970;  
  	if(moove==970){
  		moove = 0;
  	}
	sliderBox.style.marginLeft = moove + "px";
	console.log(moove);
};