import { scrollController } from './scroll-controller'
import ScrollMagic from 'scrollmagic'

class CoreScrollScene {
  constructor(options) {
    options = options || {}
    this.triggerElement = options.triggerElement || null
    this.log = options.log || false

    this.offset =
      options.offset ||
      (() => {
        return 0
      })

    if (typeof this.offset == 'number') {
      this.offset = () => {
        return options.offset
      }
    }
    this.triggerHook = options.triggerHook || 1
    this.duration = options.duration || 0
    this.enter = options.enter || (() => {})
    this.leave = options.leave || (() => {})
    this.once = options.once || false
  }

  init() {
    this.scene = new ScrollMagic.Scene({
      triggerElement: this.triggerElement,
      triggerHook: this.triggerHook,
      offset: this.offset()
    })

    this.scene.on('enter', () => {
      this.enter()
      if (this.once) {
        this.destroy()
      }
    })
    this.scene.on('leave', this.leave)

    if (this.log) {
      this.scene.on('change update progress start end enter leave', this.update)
    }

    scrollController.addScene(this.scene)
  }

  update(event) {
    console.log(event)
  }

  destroy() {
    scrollController.removeScene(this.scene)
  }
}

export { CoreScrollScene }
