import { CoreModule, CoreScrollScene } from '../core'
import anime from 'animejs'

class AnimMoveIn extends CoreModule {
  init(options) {
    let target = options.target ? options.target : '.anim-move-in'
    let elements = document.querySelectorAll(target)
    let scenes = []

    elements.forEach((element) => {
      const delay =
        element.getAttribute('data-anim-delay') > 0
          ? element.getAttribute('data-anim-delay')
          : 0
      const distance =
        element.getAttribute('data-anim-distance') > 0
          ? element.getAttribute('data-anim-distance')
          : 48
      const duration =
        element.getAttribute('data-anim-duration') > 0
          ? element.getAttribute('data-anim-duration')
          : 600
      const hook =
        parseFloat(element.getAttribute('data-anim-hook')) > 0
          ? parseFloat(element.getAttribute('data-anim-hook'))
          : 0.75
      const once =
        element.getAttribute('data-anim-once') == 'true' ? true : false

      element.style.transform = 'translateY(' + distance + 'px)'
      element.style.opacity = 0

      scenes.push(
        new CoreScrollScene({
          triggerElement: element,
          triggerHook: hook,
          enter: (event) => {
            anime({
              targets: element,
              translateY: [distance, 0],
              opacity: [0, 1],
              easing: 'easeOutQuart',
              duration: duration,
              delay: delay
            })
          },
          leave: (event) => {
            anime({
              targets: element,
              translateY: [0, distance],
              opacity: [1, 0],
              easing: 'easeInOutCirc',
              duration: duration
            })
          },
          once: once
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

export const animMoveIn = new AnimMoveIn()
