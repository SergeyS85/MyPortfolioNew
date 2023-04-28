
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content',
	smooth: 1.5,
	effects:true
})

window.addEventListener('scroll',(e) => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})

// if (ScrollTrigger.isTouch !== 1) {

// 	ScrollSmoother.create({
// 		wrapper: '.wrapper',
// 		content: '.content',
// 		smooth: 1.5,
// 		effects: true
// 	})

// 	gsap.fromTo('.content', { opacity: 1 }, {
// 		opacity: 0,
// 		scrollTrigger: {
// 			trigger: '.content',
// 			start: 'center',
// 			end: '820',
// 			scrub: true
// 		}
// 	})

// }
