import gsap from 'gsap';

export function buttonsAnimation() {
  let buttons = document.querySelectorAll('.button');

  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        duration: .3,
        backgroundColor: '#e7d8a5',
        ease: 'power1.out'
      })
    })

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        duration: .3,
        backgroundColor: '#dbd7c2',
        ease: 'power1.out'
      })
    })
  })
}