
let droplist       = document.querySelector('.lang');
let droplistLi       = document.querySelectorAll('.lang li');

droplist.addEventListener('click',function(event){		
			this.classList.toggle('plusminus__onoff');
			console.log(this)		
})

