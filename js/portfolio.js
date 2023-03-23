(function() {
    // //////////// Главная, меняем задний фон///////////////
    let background = document.querySelectorAll(".bg-container")
    let spanShadow = document.querySelectorAll(".left_content_box span")
    let i = 0;

    function animationBg() {
        for (let j = 0; j < background.length; ++j) {
            background[j].classList.remove('show-bg');
        };
        background[i].classList.add('show-bg')
    }

    function animShadowSpan(){
        for (let j = 0; j < spanShadow.length; ++j) {
            spanShadow[j].classList.remove('span_shadow_animate');
        };
        spanShadow[i].classList.add('span_shadow_animate')
    }

    // //////////////////////////////////////
    let promise = new Promise(function(resolve,reject){
        setInterval(() => {
            if (i == background.length-1) i = 0;                           
            else{ ++i };
            resolve(animationBg(),animShadowSpan());           
        }, 4000)
    })
})()
