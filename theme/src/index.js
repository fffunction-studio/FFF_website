import './css/style.css'

import 'zenscroll'

import { core } from './js/core'
import { header, nav, footer, barbaManager } from './js/layout'
import { images } from './js/components'
import { animHero, animOpenSesame, animMoveIn, animFadeIn, animFadeOut, animBgColor, animUnderlineIn, animMousePerspective } from './js/animations'

;(function() {
  core.attach(header, { element: document.querySelector('.header-main') })
  core.attach(nav, { element: document.querySelector('.nav-main') })
  core.attach(footer, {}, true)
  core.attach(barbaManager)

  core.attach(images, {}, true)

  core.attach(animHero, { target: '.anim-hero' }, true)
  core.attach(animOpenSesame, { target: '.anim-open-sesame' }, true)
  core.attach(animMoveIn, { target: '.anim-move-in' }, true)
  core.attach(animFadeIn, {}, true)
  core.attach(animFadeOut, {}, true)
  core.attach(animBgColor, {}, true)
  core.attach(animUnderlineIn, {}, true)
  core.attach(animMousePerspective, {}, true)

  core.init()
})()
