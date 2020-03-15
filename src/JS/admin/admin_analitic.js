//Плагины, переключение вкладок...

import { DeleteCoupon } from "./delete_coupon"

const selectType = document.getElementById('select_type')
const promocode = document.getElementById('promocode')

const skidwoodNav = document.querySelector('.header_skidwood_site-nav')
const mainAddCoupon = document.querySelector('.main_add-coupon')
const mainDeleteCoupon = document.querySelector('.main_delete_coupon')
const mainAddCategory = document.querySelector('.main_add_category')


skidwoodNav.addEventListener('click', ShowSection)


function ShowSection(e) {
    e.preventDefault()
    console.log(e.toElement.id)   

    if(e.toElement.id == 'skidwood_add_coupon') {
        showsEl(mainAddCoupon)
        if(!mainDeleteCoupon.classList.contains('notShow')){
            showsEl(mainDeleteCoupon)
        }else if (!mainAddCategory.classList.contains('notShow')){
            showsEl(mainAddCategory)
        }
    } else if(e.toElement.id == 'skidwood_delete_coupon') {
        showsEl(mainDeleteCoupon)
        DeleteCoupon()
        if(!mainAddCoupon.classList.contains('notShow')){
            showsEl(mainAddCoupon)
        }else if (!mainAddCategory.classList.contains('notShow')){
            showsEl(mainAddCategory)
        }
    } else if(e.toElement.id == 'skidwood_add_collections'){
        showsEl(mainAddCategory)
        if(!mainAddCoupon.classList.contains('notShow')){
            showsEl(mainAddCoupon)    
        }else if (!mainDeleteCoupon.classList.contains('notShow')){
            showsEl(mainDeleteCoupon)
        }
    }
}


// Появление поля при выборе промокода
selectType.addEventListener('change', (e) => {
    e.preventDefault()

    if(selectType.value == 'Купон'){
        promocode.disabled = false
        promocode.classList.add('promocode_isActive')
    } else {
        promocode.disabled = true
        promocode.classList.remove('promocode_isActive')
    }
    
})

//Показывает или скрывает секцию
const showsEl = (section) => {
    if(section.classList.contains('notShow')){
        section.classList.remove('notShow')
    } else if (section.classList.contains('notShow') == false){
        section.classList.add('notShow')
    }
}


//Добавить еще категорию





    

