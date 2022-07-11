// Cuando hago click .button, .nav TOGGLE 'ACTIVO'

const button = document.querySelector('.button')
const nav    = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})