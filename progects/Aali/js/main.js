//  vertical accordion for resume
let plusminusOnOff = document.querySelectorAll('.plusminus__block');
let droplist       = document.querySelectorAll('.resume__bottomblock-droplistblock');

droplist.forEach(function(el){
	el.addEventListener('click',function(event){
		if(event.target.classList == 'plusminus__block' || event.target.classList == 'plusminus__block plusminus__onoff' || event.target.classList == 'droplistblock__title'){
			this.classList.toggle('plusminus__onoff');
		}
	})
});

// horizontal slider for peoplesay
let leftArrow                 = document.querySelector('.left__arrow-container');
let rightArrow                = document.querySelector('.right__arrow-container');
let rightBlockSliderContainer = document.querySelectorAll('.peoplesay__right-block__slider-container');

let rightBlockH3              = document.querySelectorAll('.peoplesay__right-block h3')
let rightBlockH2              = document.querySelectorAll('.peoplesay__right-block h2')
let rightBlockP               = document.querySelectorAll('.peoplesay__right-block p')
let rightBlockH4              = document.querySelectorAll('.peoplesay__right-block h4')
let transformCount            = 0;

function sliderMove(){
	for(let i = 0;i<=rightBlockSliderContainer.length;i++){
		rightBlockH3[i].style.cssText = 'transform:translateX(-'+transformCount+'vw);'
	  rightBlockH2[i].style.cssText = 'transform:translateX(-'+transformCount+'vw);'
	  rightBlockP[i].style.cssText = 'transform:translateX(-'+transformCount+'vw);'
	  rightBlockH4[i].style.cssText = 'transform:translateX(-'+transformCount+'vw);'
	}
}

leftArrow.addEventListener('click', function(){
	if(transformCount > 0){
		transformCount -= 50;
		sliderMove()
	}
})
rightArrow.addEventListener('click', function(){
	if(transformCount < rightBlockSliderContainer.length*50-50){
		transformCount += 50;
		sliderMove()
	}
})

