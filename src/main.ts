import './style.css'

// Menu mobile
const navigation = document.querySelector<HTMLUListElement>('.navigation')!
const hamburger = document.querySelector<HTMLDivElement>('.hamburger')!

hamburger.addEventListener('click', () => {
  navigation.classList.toggle('active')
  hamburger.classList.toggle('active')
})

// Fechar menu ao clicar nos links (mobile)
const navLinks = document.querySelectorAll('.navigation a')
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('active')
    hamburger.classList.remove('active')
  })
})

// Fechar menu ao clicar fora dele (mobile)
document.addEventListener('click', (e) => {
  if (window.innerWidth < 768 && !hamburger.contains(e.target as Node) && !navigation.contains(e.target as Node)) {
    navigation.classList.remove('active')
    hamburger.classList.remove('active')
  }
})

// Funcionalidade dos indicadores do banner
const dots = document.querySelectorAll('.dot')
const bannerArrows = document.querySelectorAll('.banner-arrows button')

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    // Remove active de todos os dots
    dots.forEach(d => d.classList.remove('active'))
    // Adiciona active ao dot clicado
    dot.classList.add('active')
  })
})

// Navegação do banner (setas)
bannerArrows.forEach((button) => {
  button.addEventListener('click', () => {
    const currentActive = document.querySelector('.dot.active')
    const currentIndex = Array.from(dots).indexOf(currentActive as Element)
    
    // Determina se é botão anterior ou próximo
    const isNext = button.textContent?.includes('>')
    let newIndex
    
    if (isNext) {
      newIndex = (currentIndex + 1) % dots.length
    } else {
      newIndex = currentIndex === 0 ? dots.length - 1 : currentIndex - 1
    }
    
    // Atualiza os indicadores
    dots.forEach(d => d.classList.remove('active'))
    dots[newIndex].classList.add('active')
  })
})