let adaptiveMenu = document.querySelector('.container_adaptive-menu');
let burger       = document.querySelector('.burger_btn');

burger.addEventListener('click',function(){
	adaptiveMenu.classList.toggle('is-active')
})
