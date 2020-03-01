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