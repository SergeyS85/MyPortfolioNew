// Функция для раскрытия списка языка в разделе headers
let droplist       = document.querySelector('.lang');
let droplistLi     = document.querySelectorAll('.lang li');
let displayLang    = document.querySelector('.display-lang')
let langBlock      = document.querySelector('.lang__block')

droplist.addEventListener('click',function(event){		
			this.classList.toggle('plusminus__onoff');

			// Функция для выбора языка в разделе headers
      displayLang.innerText = event.target.innerText;
      langBlock.style.background = 'url(images/headers/flags_lang/'+event.target.id+'.png) no-repeat';
      langBlock.style.backgroundPosition = '0 center';
      console.log(event.target.style)		
})


