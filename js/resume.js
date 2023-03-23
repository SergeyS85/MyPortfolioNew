// ///////////// Резюме /////////////////
    let resume = document.querySelectorAll('.resume');
    let resume_block = document.querySelector('.resume_block')

    function showResume() {
        for(let i = 0;i < resume.length;i++){
            resume[i].addEventListener('click', function() {
            resume_block.style.display = 'block'
          })
        }
        
    }

    function closeResume() {
        let btnClose = document.querySelector('.close_resume');
        btnClose.onclick = function() {
            resume_block.style.display = 'none';
        }
    }
    showResume();
    closeResume();
