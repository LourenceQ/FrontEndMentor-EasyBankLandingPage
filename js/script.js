const header = document.querySelector('.header');
const btnHamburguer = document.querySelector('#btnHamburguer');
const overlay = document.querySelector('.overlay');


btnHamburguer.addEventListener('click',function(){
    console.log('click Hamburguer');

    if(header.classList.contains('open')){// close hamburguer menu
        header.classList.remove('open') ;
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
     }
     else{// open hamburuer menu
         header.classList.add('open');
         overlay.classList.remove('fade-out');
         overlay.classList.add('fade-in');
     }    
});