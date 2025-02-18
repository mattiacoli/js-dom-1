const btnEL = document.querySelector('button')
const lampEL = document.querySelector('img')
const bodyEL = document.querySelector('body')

btnEL.addEventListener('click', function () {

  btnEL.classList.toggle('active')

  const buttonClass = btnEL.classList
  console.log(btnEL.classList);

  if (buttonClass.contains('active')) {
    lampEL.src = '../assets/img/yellow_lamp.png'
    bodyEL.className = 'bg-light'
    btnEL.innerText = 'SPEGNI'

  } else {
    lampEL.src = '../assets/img/white_lamp.png'
    bodyEL.className = "bg-dark"
    btnEL.innerText = 'ACCENDI'
    
  }

})


