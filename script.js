'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const closeModal = () => {
   modal.classList.add('hidden')
   overlay.classList.add('hidden')
   // modal.style.display = 'none'
}

const openModal = () => {
   modal.classList.remove('hidden')
   overlay.classList.remove('hidden')
   // modal.style.display = 'block'
}

for(let i = 0; i < btnsShowModal.length; i++){
   console.log(btnsShowModal[i]);
   btnsShowModal[i].addEventListener('click', openModal)
   // () => {
   //    modal.classList.remove('hidden')  
   //    overlay.classList.remove('hidden')
   // }) 
}

btnCloseModal.addEventListener('click', closeModal)
// () => {
//    modal.classList.add('hidden')
//    overlay.classList.add('hidden')
// })

overlay.addEventListener('click', closeModal)
// () => {
//    modal.classList.add('hidden')
//    overlay.classList.add('hidden')
// })