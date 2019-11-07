import { CoreModule } from '../core/core-module';

class AnimUnderlineIn extends CoreModule {
  init(options) {
    let target = options.target ? options.target : '.anim-underline-in'
    this.elements = document.querySelectorAll(target)

    this.elements.forEach(element => {
      const duration =
        element.getAttribute('data-anim-duration') > 0
          ? element.getAttribute('data-anim-duration')
          : 300
      element.style.animationDuration = duration + 'ms'
      element.addEventListener('mouseenter', this.onMouseEnter)
      element.addEventListener('mouseleave', this.onMouseLeave)
      element.element = element
    })

    return super.init()
  }

  onMouseEnter() {
    this.element.classList.add('triggered')
    this.element.classList.add('active')

  }
  onMouseLeave() {
    this.element.classList.remove('active')
  }
}

export const animUnderlineIn = new AnimUnderlineIn()