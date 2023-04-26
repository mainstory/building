
function burgerMenu() {

   //  базисное
   const open = document.querySelector('[data-burger-menu-open]')
   const menu = document.querySelector('[data-menu]')
   const shadow = document.querySelector('[data-burger-menu-shadow]')
   const close = document.querySelector('[data-burger-menu-close]')
   const bodyburgerMenu = document.querySelector('[data-burger-menu-body]')
   const burgerMenu = document.querySelector('[data-burger-menu]')
   const body = document.querySelector('body')

   if (document.querySelector('[data-burger-menu]')) {

      menu.style.display = "block"

      open.addEventListener('click', (event) => {
         // открыть
         burgerMenu.classList.add('_active')
         shadow.classList.add('_active')
         body.style.overflow = 'hidden'
      })
      close.addEventListener('click', (event) => {
         // зыкрыть
         burgerMenu.classList.remove('_active')
         shadow.classList.remove('_active')
         body.style.overflow = 'auto'

      })
      shadow.addEventListener('click', (event) => {
         // зыкрыть
         burgerMenu.classList.remove('_active')
         shadow.classList.remove('_active')
         body.style.overflow = 'auto'

      })

      // перекидывание меню
      if (window.innerWidth < 769) {

         // добавить одноразово
         const outerHTML = document.querySelector('[data-menu]').outerHTML
         document.querySelector('[data-menu]').remove()
         bodyburgerMenu.innerHTML = outerHTML
         bodyburgerMenu.classList.add('_active')


      } else {

         // убрать одноразово
         const outerHTML = document.querySelector('[data-menu]').outerHTML
         document.querySelector('[data-menu]').remove()
         document.querySelector('.header__logo').insertAdjacentHTML('afterend', outerHTML)
         bodyburgerMenu.classList.remove('_active')

      }

      // перекидывание меню
      window.addEventListener('resize', (event) => {
         if (window.innerWidth < 769) {

            // добавить одноразово
            if (!document.querySelector('[data-burger-menu-body]._active')) {
               const outerHTML = document.querySelector('[data-menu]').outerHTML
               document.querySelector('[data-menu]').remove()
               bodyburgerMenu.innerHTML = outerHTML
               bodyburgerMenu.classList.add('_active')
            }

         } else {

            // убрать одноразово
            if (document.querySelector('[data-burger-menu-body]._active')) {

               const outerHTML = document.querySelector('[data-menu]').outerHTML
               document.querySelector('[data-menu]').remove()
               document.querySelector('.header__logo').insertAdjacentHTML('afterend', outerHTML)
               bodyburgerMenu.classList.remove('_active')
            }


         }
      })

   }


}
export {
   burgerMenu,
}







