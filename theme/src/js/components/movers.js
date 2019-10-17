import { CoreModule } from '../core/core-module';
import { CoreScrollScene } from '../core/core-scroll-scene';

class Movers extends CoreModule {
  init() {
    this.movers = document.querySelectorAll('.mover')

    this.movers.forEach(mover => {
      let scenes = []
      scenes.push(
        new CoreScrollScene({
          offset: () => {
            return 0
          },
          enter: (event) => {
            mover.classList.add('move-in')
          },
          leave: (event) => {
            mover.classList.remove('move-in')
          },
          triggerElement: mover,
          triggerHook: 0.9
        })
      )
      super.scrollScenes = scenes
    })

    return super.init()
  }

  destroy() {
    return super.destroy()
  }
}

export const movers = new Movers()