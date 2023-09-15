// Функция для раскрытия списка языка в разделе headers
let droplist       = document.querySelector('.lang');
let displayLang    = document.querySelector('.display-lang')
let langBlock      = document.querySelector('.lang__block .lang__icon')

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


