const $button = document.querySelector('#show-menu');
const $header = document.querySelector('.header');
$button.addEventListener('click', ()=>{
  $header.ClassList.toggle('header--show');
})