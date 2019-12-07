import { CoreModule } from '../core/core-module'
import { CoreEventListener } from '../core/core-event'

class Footer extends CoreModule {
  init() {
    let events = []
    events.push(
      new CoreEventListener('barba-before-enter', this.toggleFooter)
    )
    super.eventListeners = events

    this.toggleFooter()
    
    return super.init()
  }

  toggleFooter() {
    let element = document.querySelector('.toggle-footer-off')
    console.log("TCL: Footer -> toggleFooter -> element", element)

    if (element) {
      document.getElementById('footer').classList.add('hidden')
    } else {
      document.getElementById('footer').classList.remove('hidden')
    }
  }
}

export const footer = new Footer()
