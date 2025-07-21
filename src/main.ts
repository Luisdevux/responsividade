import './style.css'

const navigation = document.querySelector<HTMLUListElement>('.navegacao')!
const hamburger = document.querySelector<HTMLDivElement>('.menu-hamburguer')!

hamburger.addEventListener('click', () => {
  navigation.classList.toggle('active')
  hamburger.classList.toggle('active')
})

const navLinks = document.querySelectorAll('.navegacao a')
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('active')
    hamburger.classList.remove('active')
  })
})

document.addEventListener('click', (e) => {
  if (window.innerWidth < 768 && !hamburger.contains(e.target as Node) && !navigation.contains(e.target as Node)) {
    navigation.classList.remove('active')
    hamburger.classList.remove('active')
  }
})

const dots = document.querySelectorAll('.ponto')
const bannerArrows = document.querySelectorAll('.destaque-setas button')

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    dots.forEach(d => d.classList.remove('active'))
    dot.classList.add('active')
  })
})

bannerArrows.forEach((button) => {
  button.addEventListener('click', () => {
    const currentActive = document.querySelector('.ponto.active')
    const currentIndex = Array.from(dots).indexOf(currentActive as Element)
    
    const isNext = button.textContent?.includes('>')
    let newIndex
    
    if (isNext) {
      newIndex = (currentIndex + 1) % dots.length
    } else {
      newIndex = currentIndex === 0 ? dots.length - 1 : currentIndex - 1
    }
    
    dots.forEach(d => d.classList.remove('active'))
    dots[newIndex].classList.add('active')
  })
})