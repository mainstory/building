import {
   burgerMenu,
} from "./chunks/burgerMenu.js"
import {
   headerAnimation,
} from "./chunks/headerAnimation.js"
import {
   popup,
} from "./chunks/popup.js"
import {
   spoilers,
} from "./chunks/spoilers.js"
import {
   footerSpoilers,
} from "./chunks/footerSpoilers.js"
import {
   anchors,
} from "./chunks/anchors.js"



burgerMenu()
headerAnimation()
popup()
spoilers()
footerSpoilers()
anchors()





const preloader = document.querySelector('[data-preloader]')
setTimeout(() => {

   preloader.classList.add('_close')

   document.querySelector('body').style.paddingRight = `0px`
   document.querySelector('body').style.overflowY = `auto`

   // функции
   new WOW(
      {
         mobile: false,
      }
   ).init();

}, 1000)

