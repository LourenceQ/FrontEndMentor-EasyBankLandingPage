const header = document.querySelector('.header');
const btnHamburguer = document.querySelector('#btnHamburguer');


btnHamburguer.addEventListener('click',function(){
    console.log('click Hamburguer');

    if(header.classList.contains('open')){
        header.classList.remove('open') ;
     }
     else{
         header.classList.add('open');
     }    
});