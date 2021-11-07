const hamburgerBtn = document.querySelector('#hamburgerBtn'); 
const body = document.querySelector('body'); 
const header = document.querySelector('header'); 
const fadeElems = document.querySelector('.has-fade'); 


hamburgerBtn.addEventListener('click', function(){
    console.log('click hamburger'); 

    if(header.classList.contains('open')) { // closed Hamburger menu
        body.classList.remove('noscroll'); 
        header.classList.remove('open'); 
        fadeElems.classList.remove('fade-in');
        fadeElems.classList.add('fade-out'); 
    }

    else { // open hamburger menu
        body.classList.add('noscroll'); 
        header.classList.add('open'); 
        fadeElems.classList.add('fade-in'); 
        fadeElems.classList.remove('fade-out'); 
    }
}); 