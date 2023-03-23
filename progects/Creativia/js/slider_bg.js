var leftPrevewBtn = document.querySelector(".left__back-prevew");
var rightPrevewBtn = document.querySelector(".right__next-prevew");
var strelkaLeft = document.querySelectorAll(".left__back-prevew span");
var strelkaRight = document.querySelectorAll(".right__next-prevew span");
var header = document.querySelector("header");

leftPrevewBtn.onmouseover = function(){
	leftbtnSpanIn();
}
leftPrevewBtn.onmouseout = function(){
	leftbtnSpanOut();
}
rightPrevewBtn.onmouseover = function(){
	rightbtnSpanIn();
}
rightPrevewBtn.onmouseout = function(){
	rightbtnSpanOut();
}
//Функции срабатывания для левой кнопки
function leftbtnSpanIn(){
	for(var i = 0;i<strelkaLeft.length;i++){
		strelkaLeft[i].style.backgroundColor = "red";
	}	
};
function leftbtnSpanOut(){
	for(var i = 0;i<strelkaLeft.length;i++){
		strelkaLeft[i].style.backgroundColor = "#a4a4a4";
	}
};
// Функции срабатывания для правой кнопки
function rightbtnSpanIn(){
	for(var i = 0;i<strelkaRight.length;i++){
		strelkaRight[i].style.backgroundColor = "red";
	}	
};
function rightbtnSpanOut(){
	for(var i = 0;i<strelkaRight.length;i++){
		strelkaRight[i].style.backgroundColor = "#a4a4a4";
	}
};

//////////////////Слайдер header
var img = [
		'woman-and-man-doing-ballet-dance-3303360.webp',
		'header_bg.webp',
		'adult-backpacker-blur-camera-610294.webp',
		'kanyon.webp',
		'man-standing-on-top-of-mountain-2695232.webp',
		'people-surfing-on-sea-waves-3845116.webp',
		'photo-of-couple-hugging-each-other-3397032.webp',
		'scenic-of-ocean-during-sunset-1139541.webp',
		'scenic-photo-of-palm-trees-during-dawn-3754657.webp',
		'silhouette-of-person-standing-on-beach-during-sunset-3802819.webp',
		'silhouette-of-woman-standing-on-beach-during-sunset-3601372.webp',
		'view-of-empty-road-1537979.webp'

];

var curentSlid = 0;
init();
rightPrevewBtn.onclick = function(){
	curentSlid++;
	init();
}
leftPrevewBtn.onclick = function(){
	curentSlid--;
	init();
}
function init(){	

	if(curentSlid == img.length){
		 curentSlid = 0;
	}
	else if(curentSlid == -1){
		curentSlid = img.length-1;
	}
		for(var i = 0;i<img.length;i++){
		header.style.background = 'url("img/header_img/'+img[curentSlid]+'")';
		header.style.backgroundSize = 'cover';
	};
}
// setInterval(function(){
// 	curentSlid++;
// 	init();
// }, 5000);
// var svg = document.querySelector('svg');
// function animationSvg(){
// 	svg.classList.toggle('animation_svg');
// }
// setInterval(animationSvg, 500);

//our_blog slider

+function verticalSlider(){

var buttonUp = document.querySelector(".fa-chevron-up");
var buttonDown = document.querySelector(".fa-chevron-down");
var sliderBox = document.querySelector(".moove_slider");
var height = 250;
var mooveSliders = 0;

buttonUp.onclick = function (){
  mooveSliders = mooveSliders - height ;
  if(mooveSliders <= -1250){
  		mooveSliders = -1000;
  }
  sliderBox.style.marginTop = mooveSliders +"px"  ;

 };

buttonDown.onclick = function(){
  mooveSliders = mooveSliders + height ;
  if(mooveSliders >= 500){
  	mooveSliders = 250;
  }
  sliderBox.style.marginTop = mooveSliders +"px" ;
 };
 
}();

