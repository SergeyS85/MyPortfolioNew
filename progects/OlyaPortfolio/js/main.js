

// Sticky menu
// let wrapper = document.querySelector(".wrapper")
// let navbar = document.querySelector(".container_menu");
// let sticky = navbar.offsetTop;





// let menu = document.querySelector(".container_menu")
// var rect = menu.getBoundingClientRect()

// window.addEventListener('scroll',function(e){
// 	if (rect.top - window.scrollY <= 0) {
//     menu.classList.add("sticky_menu")
//   } else {
//     menu.classList.remove("sticky_menu");
//   }
//  console.log(rect.top - window.scrollY)
// })

// Smooth scroll gsap

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content',
	smooth: 1.1,
	effects: false
})


