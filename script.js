document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button')
  const navBar = document.querySelector('.nav-bar')
  const navBarContainer = document.querySelector('.show-item-mobile')
  const showcaseWrapper = document.querySelector('.showcase-wrapper')
  const arrowLeft = document.querySelector('.arrow-left')
  const arrowRight = document.querySelector('.arrow-right')
  const productCard = document.querySelector('.product-card')
  const header = document.querySelector('header')

  const cardWidth = productCard.offsetWidth + 20

  menuButton.addEventListener('click', () => {
    navBar.classList.toggle('active')
    navBarContainer.classList.toggle('active')
    header.classList.toggle('expanded')
  })

  arrowLeft.addEventListener('click', () => {
    showcaseWrapper.scrollBy({
      left: -cardWidth,
      behavior: 'smooth'
    })
  })

  arrowRight.addEventListener('click', () => {
    showcaseWrapper.scrollBy({
      left: cardWidth,
      behavior: 'smooth'
    })
  })

  toggleArrows = () => {
    const maxScrollLeft =
      showcaseWrapper.scrollWidth - showcaseWrapper.clientWidth
    arrowLeft.style.display = showcaseWrapper.scrollLeft > 0 ? 'block' : 'none'
    arrowRight.style.display =
      showcaseWrapper.scrollLeft < maxScrollLeft ? 'block' : 'none'
  }

  showcaseWrapper.addEventListener('scroll', toggleArrows)

  toggleArrows()
})
