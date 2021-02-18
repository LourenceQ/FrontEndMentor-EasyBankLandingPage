const header = document.querySelector('.header');
const body = document.querySelector ('body');
const btnHamburguer = document.querySelector('#btnHamburguer');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');


btnHamburguer.addEventListener('click',function(){
    console.log('click Hamburguer');

    if(header.classList.contains('open')){// close hamburguer menu
        body.classList.remove('noscroll');
        header.classList.remove('open') ;
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        
     }
     else{// open hamburuer menu
        body.classList.add('noscroll');
         header.classList.add('open');         
         fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
         });        
     }    
});