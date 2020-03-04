export function openModalCoupon() {
    const item = document.querySelectorAll('.card')
  
    item.forEach((element) => {
      element.addEventListener('mouseover', () => {
        const openInfo = element.querySelector('.open_info_coupon')
        openInfo.classList.remove('notShow')

      })
      element.addEventListener('mouseout', () => {
        const openInfo = element.querySelector('.open_info_coupon')
        openInfo.classList.add('notShow')
      })
    })
}

export const removeModal = (btn_section) => {
    const closeBtn = document.querySelector(btn_section)
    // Закрывает модальное окно при клике на кнопку закрыть
    closeBtn.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.remove()

    
    })
    // Закрывает модальное окно при клике на любую область
    window.addEventListener('click', (e) => {
        if(e.target.classList.contains('section_main_modal-coupon')){
            e.target.remove()
        }    
    })
}

export const copyPromocode = (btn_copy, input_promocode) => {
    const copyPromocodeBtn = document.querySelector(btn_copy)
    const inputPromocode = document.querySelector(input_promocode)

    copyPromocodeBtn.addEventListener('click', () => {
        const range = document.createRange()
        range.selectNode(inputPromocode)
        window.getSelection().addRange(range);
        try{
            document.execCommand('copy')
            copyPromocodeBtn.parentElement.parentElement.parentElement.insertAdjacentHTML('afterend', `<div class="section_main_modal-coupon check_access">
            <div class="modal_accept">
                <i class="fas fa-check"></i>
                Промокод скопирован
            </div>
        </div>`)
            setTimeout(()=> {
                document.querySelector('.check_access').remove()
            }, 1500)
        } catch {
            console.log('Not copy')
        }

        window.getSelection().removeAllRanges();
    })

}


