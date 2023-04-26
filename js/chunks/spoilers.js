function spoilers() {

   // расположить

   // data-spoilers-section
   // data-spoiler
   // data-spoiler-button
   // data-spoiler-content

   const body = document.querySelector('[data-spoilers-section]')

   if (body) {

   


      body.addEventListener('click', (event) => {
         const eventTarget = event.target

         if (eventTarget.closest('[data-spoiler-button]')) {

            const wrapper = eventTarget.closest('[data-spoiler]')
            const targetContent = wrapper.querySelector('[data-spoiler-content]')

            if (targetContent.classList.contains('_active')) {
               // если нажали на активный то свернуть его
               targetContent.classList.remove('_active')
               targetContent.style.maxHeight = '0'
               targetContent.closest('[data-spoiler]').classList.remove('_active')
            } else {
               // если нажали на не активный то свернуть активные
               const contents = body.querySelectorAll('[data-spoiler-content]')
               contents.forEach((content) => {
                  if (content === targetContent) {
                     // а таргет открыть
                     content.classList.add('_active')
                     content.style.maxHeight = content.scrollHeight + 'px'
                     content.closest('[data-spoiler]').classList.add('_active')

                  } else {
                     // то свернуть активные
                     content.classList.remove('_active')
                     content.style.maxHeight = '0'
                     content.closest('[data-spoiler]').classList.remove('_active')

                  }
               })
            }

         }

         if (eventTarget.closest('[data-spoiler-content-button]')) {
            const spoiler = eventTarget.closest('[data-spoiler]')

            spoiler.querySelector('[data-spoiler-text]').innerText = eventTarget.innerText

            const contents = body.querySelectorAll('[data-spoiler-content]')
            contents.forEach((content) => {

               // то свернуть все
               content.classList.remove('_active')
               content.style.maxHeight = '0'
               content.closest('[data-spoiler]').classList.remove('_active')

            })

         }

         if (!eventTarget.closest('[data-spoiler]')) {
            const contents = body.querySelectorAll('[data-spoiler-content]')
            contents.forEach((content) => {

               // то свернуть все
               content.classList.remove('_active')
               content.style.maxHeight = '0'
               content.closest('[data-spoiler]').classList.remove('_active')

            })
         }

      })

      // корекция высоты при девтулзе
      window.addEventListener('resize', (event) => {
         const activeSpoiler = document.querySelector('[data-spoiler-content]._active')
         if (activeSpoiler) {
            activeSpoiler.style.maxHeight = activeSpoiler.scrollHeight + 'px'
         }
      })

      document.querySelector('[main-block-submit]').addEventListener('click', (event) => {
         event.preventDefault()
         const datas = document.querySelectorAll('[data-spoiler-text]')
         datas.forEach((data) => {
            console.log(data.innerText);
         })
      })
      

   }


}

export { spoilers }