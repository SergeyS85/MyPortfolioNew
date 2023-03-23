+function(){
	document.querySelector(".accordeon__section").classList.add("is-open")

	document.querySelectorAll(".accordeon__section").forEach(function(section){
		section.addEventListener("click",function(e){

      document.querySelectorAll(".accordeon__section").forEach(function(section){
      	section.classList.remove("is-open")
      })

      e.target.closest(".accordeon__section").classList.add("is-open")
		})

	})
}();
             // ******SLIDER******

+function verticalSlider(){

var buttonUp = document.querySelector(".Up");
var buttonDown = document.querySelector(".Down");
var sliderBox = document.querySelector(".coment");
var height = 230;
var mooveSliders = 0;

buttonUp.onclick = function (){
  mooveSliders = mooveSliders - height ;
  if(mooveSliders <=  -3210){
  	mooveSliders =  -2980;
  }
  sliderBox.style.marginTop = mooveSliders +"px"  ;
 };

buttonDown.onclick = function(){
  mooveSliders = mooveSliders + height ;
  if(mooveSliders >= 460){
  	mooveSliders = 230;   
  } 
  sliderBox.style.marginTop = mooveSliders +"px" ;
 };
}();

