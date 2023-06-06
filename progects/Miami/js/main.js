const sliderMain = new Swiper('.slider_main',{
	 freeMode: true,
	 centeredSlides: true,
	 mousewheel: true,
	 parallax: true,
	 breakpoints:{
	 	0:{
	 		slidesPerView: 2.5,
	 		spaceBetween:20,
	 	},
	 	680:{
	 		slidesPerView: 3.5,
	 		spaceBetween:60,
	 	}
	 }
})

const sliderBg = new Swiper('.slider_bg',{
	 // freeMode: true,
	 centeredSlides: true,
	 parallax: true,
	 slidesPerView: 3.5,
	 spaceBetween: 60,
})
sliderMain.controller.control = sliderBg

let item          = document.querySelectorAll('.slider__item');
let shadowStopBox = document.querySelector('.shadowStopBox')

item.forEach(function(el){
	el.addEventListener('click',function(event){
		el.classList.toggle('opened');
		shadowStopBox.classList.toggle('opened');
	})
})

let desc = document.querySelector('.description')
sliderMain.on('slideChange', e => {
	sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})
