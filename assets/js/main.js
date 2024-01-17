const skillsButton1 = document.querySelector('#skills__button-1')
const skillsButton2 = document.querySelector('#skills__button-2')

const cardsDisplay = document.querySelector('.cards__display-1')
const cardsDisplay2 = document.querySelector('.cards__display-2')


skillsButton2.addEventListener('click', () => {
  cardsDisplay.style.display = 'none'
  cardsDisplay2.style.display = 'flex'
})

skillsButton1.addEventListener('click', () => {
  cardsDisplay.style.display = 'flex'
  cardsDisplay2.style.display = 'none'
})
