let plusminusOnOff = document.querySelectorAll('.plusminus__block');
let droplist = document.querySelectorAll('.resume__bottomblock-droplistblock');

droplist.forEach(function(el){
	el.addEventListener('click',function(event){
		if(event.target.classList == 'plusminus__block' || event.target.classList == 'plusminus__block plusminus__onoff' || event.target.classList == 'droplistblock__title'){
			this.classList.toggle('plusminus__onoff');
		}
	})
});
