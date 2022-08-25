let botao=document.querySelector('.navicon');
let menu=document.querySelector('nav');

botao.addEventListener('click', e => {Menu()});
    
    function Menu() {
        
        if (botao.className === "navicon") {
            botao.className += " active";
            menu.className += " active";
          

        } else {
            botao.className = "navicon";
            menu.className = "";
        }

    }