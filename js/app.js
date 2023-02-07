const navMenu = document.querySelector('.nav_wrapper')
const burger = document.querySelector('#burger')
const burgerImg = document.querySelector('.burger-img')
burger.addEventListener('click', () => {
  if (navMenu.classList.toggle('open')) {
    burgerImg.src = './img/cancel.png'
    burger.classList.add('fixed')
  } else {
    burgerImg.src = './img/burger.png'
    burger.classList.remove('fixed')
  }
  console.log('message')
})
