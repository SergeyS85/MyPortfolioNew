// Функция для раскрытия списка языка в разделе headers
let droplist           = document.querySelector('.lang');
let displayLang        = document.querySelector('.display-lang');
let langBlock          = document.querySelector('.lang__block .lang__icon');
let developersnameContainerP = document.querySelector('.developersname__container p');
let developersnameContainerPSpan = document.querySelector('.developersname__container span');

droplist.addEventListener('click',function(event){		
			this.classList.toggle('plusminus__onoff');

			// Функция для выбора языка в разделе headers
      
      if(event.target.classList == 'language__li'){
        // Добавляет выбранный язык в тег li.display-lang
      	displayLang.innerText = event.target.innerText;
        
        // Меняет иконку флага выбранного языка
      	langBlock.style.background = 'url(images/headers/flags_lang/'+event.target.id+'.png) no-repeat';

      	// Позиционирует иконку флага
        langBlock.style.backgroundPosition = 'center center';
        displayLang.id = event.target.id
      }

})


// Функция движения слайдера

let sliderContainer = document.querySelector('.slider__container');
let developerSliderBlock = document.querySelector('.developer__slider-block');
let developerFotoBlock = document.querySelectorAll('.developer__foto-block img');
let sliderCount = 0;
sliderContainer.addEventListener('click', function(event){
	if(event.target.classList == 'developer__arrow__left-block' || event.target.classList == 'developer__arrowslideL'){
		if(sliderCount >= (developerFotoBlock.length - 3) * 100){ sliderCount = (developerFotoBlock.length - 3) * 100}
		else{ sliderCount += 100 }
    developerSliderBlock.style.transform = 'translateX(-'+ sliderCount +'px)';
	}
  
	if(event.target.classList == 'developer__arrow__right-block' ||  event.target.classList == 'developer__arrowslideR'){
		if(sliderCount == 0){sliderCount = 0}
		else{sliderCount -= 100;}
    developerSliderBlock.style.transform = 'translateX(-'+ sliderCount +'px)';
	}

	if(event.target.tagName == 'IMG'){
		for(let i = 0;i < developerFotoBlock.length;i++ ){
			if(developerFotoBlock[i].classList !== 'developer__img-border'){
				developerFotoBlock[i].classList.remove('developer__img-border');
				event.target.classList.add('developer__img-border')
			}
		}		
  	developersnameContainerP.innerText = event.target.dataset.developername;
  	developersnameContainerPSpan.innerText = event.target.dataset.professional;
  }
})


