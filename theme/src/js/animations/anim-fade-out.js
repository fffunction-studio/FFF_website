import { CoreModule, CoreScrollScene } from '../core'
import anime from 'animejs'

class AnimFadeOut extends CoreModule {
  init(options) {
    const target = options.target || '.anim-fade-out'
    const elements = document.querySelectorAll(target)
    const scenes = []

    elements.forEach((element) => {
      const delay =
        element.getAttribute('data-anim-delay') > 0
          ? element.getAttribute('data-anim-delay')
          : 0

      scenes.push(
        new CoreScrollScene({
          triggerElement: element,
          triggerHook: 0.75,
          offset: () => {
            return element.offsetHeight
          },
          duration: '100px',
          enter: (event) => {
            anime({
              targets: element,
              opacity: [1, 0],
              easing: 'easeOutCirc',
              delay: delay
            })
          },
          leave: (event) => {
            anime({
              targets: element,
              opacity: [0, 1],
              easing: 'easeOutCirc',
              delay: delay
            })
          }
        })
      )
    })

    super.scrollScenes = scenes

    return super.init()
  }

  destroy() {
    return super.destroy()
  }
}

export const animFadeOut = new AnimFadeOut
