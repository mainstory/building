function footerSpoilers() {

   const mains = document.querySelectorAll('[data-footer-spoilers-section]')
   mains.forEach((main) => {
      
      function spoilers() {

         const eventTarget = event.target
   
         if (eventTarget.closest('[data-footer-spoiler-button]')) {
   
            const wrapper = eventTarget.closest('[data-footer-spoiler]')
            const targetContent = wrapper.querySelector('[data-footer-spoiler-content]')
   
            if (targetContent.classList.contains('_active')) {
               // если нажали на активный то свернуть его
               targetContent.classList.remove('_active')
               targetContent.style.maxHeight = '0'
               targetContent.closest('[data-footer-spoiler]').classList.remove('_active')
            } else {
               // если нажали на не активный то свернуть активные
               const contents = document.querySelectorAll('[data-footer-spoiler-content]')
               contents.forEach((content) => {
                  if (content === targetContent) {
                     // а таргет открыть
                     content.classList.add('_active')
                     content.style.maxHeight = content.scrollHeight + 'px'
                     content.closest('[data-footer-spoiler]').classList.add('_active')
   
                  } else {
                     // то свернуть активные
                     content.classList.remove('_active')
                     content.style.maxHeight = '0'
                     content.closest('[data-footer-spoiler]').classList.remove('_active')
   
                  }
               })
            }
   
         }
   
      }


      if (window.innerWidth < 553) {
         main.addEventListener('click', spoilers)
      } else {
         main.removeEventListener('click', spoilers)
   
         const elems = document.querySelectorAll('[data-footer-spoiler-content]')
         elems.forEach((spoiler) => {
            spoiler.style.maxHeight = ''
         })
   
      }
   
      // корекция высоты при девтулзе
      window.addEventListener('resize', (event) => {
   
         const activeSpoiler = document.querySelector('[data-footer-spoiler-content]._active')
         if (activeSpoiler) {
            activeSpoiler.style.maxHeight = activeSpoiler.scrollHeight + 'px'
         }
   
         if (window.innerWidth < 553) {
            main.addEventListener('click', spoilers)
         } else {
            main.removeEventListener('click', spoilers)
   
            const elems = document.querySelectorAll('[data-footer-spoiler-content]')
            elems.forEach((elem) => {
               elem.style.maxHeight = ''
   
               // то свернуть активные
               elem.classList.remove('_active')
               elem.closest('[data-footer-spoiler]').classList.remove('_active')
            })
   
   
   
         }
   
      })
   
   


   })





}
export { footerSpoilers }



