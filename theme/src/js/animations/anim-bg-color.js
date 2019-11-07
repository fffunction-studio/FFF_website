import { CoreModule, CoreScrollScene } from '../core'
import anime from 'animejs'

class AnimBgColor extends CoreModule {
  init(options) {
    const target = options.target || '.anim-bg-color'
    const elements = document.querySelectorAll(target)
    const main = document.querySelector('.main')
    const scenes = []

    elements.forEach((element) => {
      const delay =
        element.getAttribute('data-anim-delay') > 0
          ? element.getAttribute('data-anim-delay')
          : 0
      const fromColor = 
      element.getAttribute('data-anim-from-color') != ''
      ? element.getAttribute('data-anim-from-color')
      : '#f0f'
      const toColor = element.getAttribute('data-anim-to-color') != ''
      ? element.getAttribute('data-anim-to-color')
      : '#0f0'
      const duration =
        element.getAttribute('data-anim-duration') > 0
          ? element.getAttribute('data-anim-duration')
          : 800
          const hook =
          parseFloat(element.getAttribute('data-anim-hook')) > 0
            ? parseFloat(element.getAttribute('data-anim-hook'))
            : 0.5

      console.log(element.getAttribute('data-anim-from-color'))

      scenes.push(
        new CoreScrollScene({
          triggerElement: element,
          triggerHook: hook,
          enter: (event) => {
          console.log("TCL: AnimBgColor -> init -> enter", element)
            anime({
              targets: main,
              backgroundColor: toColor,
              easing: 'easeInOutSine',
              delay: delay,
              duration: duration
            })
          },
          leave: (event) => {
          console.log("TCL: AnimBgColor -> init -> leave", element)
            anime({
              targets: main,
              backgroundColor: fromColor,
              easing: 'easeInOutSine',
              delay: delay,
              duration: duration
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

export const animBgColor = new AnimBgColor()
