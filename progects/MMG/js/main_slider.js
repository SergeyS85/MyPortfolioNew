var section_slider   = document.querySelector('.section_slider');
var points           = document.querySelectorAll(".points");
var arrayPoints      = [];
var arrBackgroundImg = ["slide_1.jpg",//Изображения для background
											  "slide_2.jpg",
											  "slide_3.jpg",
											  "slide_4.jpg"];


for (var i = 0; i < points.length; i++){
  arrayPoints.push(points[i]);
 // Функция которая получает индекс нажатого спана и результат(цифру)
 // заносит в переменную curentSlide которую использует в background.
  points[i].addEventListener('click', function(spanPoints){
      var curentSlid = arrayPoints.indexOf(spanPoints.target);
      for(var i = 0;i<arrBackgroundImg.length;i++){
			section_slider.style.background = "url('img/section_img/section_slider/"+arrBackgroundImg[curentSlid]+"')";
			section_slider.style.backgroundRepeat = "no-repeat";
}
  });
};

											  

// Навешивание события на header__nav для добавления класса active
// главным ссылкам меню.(работа на всплытие)
var headerNav = document.querySelector('.header__nav');
var elem      = document.querySelectorAll('.header__nav>li>a');

headerNav.addEventListener('click',function(e){
	removeClassEl(addClassEl);

// Функция находит все елементы с классом active и удаляет его,
// после чего выполняет функцию коллбэк addClassEl
	function removeClassEl(addClassEl){
		for(var i = 0;i<elem.length;i++){
			elem[i].classList.remove('active');
		};
		addClassEl();
	}
// Добавляем класс целевому елементу
	function addClassEl(){
		e.target.classList.add('active');
	}
});