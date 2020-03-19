import { Coupon } from '../coupon'
import { openModalCoupon, removeModal, copyPromocode } from '../analitics/openModalCoupons'


const mainCoupon = document.querySelector('.section_main')

export function renderCouponMain(){
    Coupon.loadCoupon()
    .then(renderList)
}

function renderList(data) {
    const keyDelete = Object.keys(data)
    const objData = keyDelete.reduce((j, k) => {
        j[k] = k
        return j
    }, {})

    for(let i in data){
        let localeDate = new Date(data[i].date).toLocaleDateString()            
        mainCoupon.insertAdjacentHTML('afterbegin', `<div class="card_item" data-id="${objData[i]}" category="${data[i].category}" collections="${data[i].collections}" country="${data[i].country}">            
        <div class="card_cheks">
            <span class="card_cheks-type">${data[i].type}</span>
            <span class="card_cheks-type_info">${data[i].typeInfo}</span>
            <div class="card_line"></div>                
        </div>            
        <div class="card">            
            <div class="card_img" style="background-image: url(${data[i].img});"></div>
            <div class="card_text">
                <div class="card_text_name">${data[i].shop}</div>
                <div class="card_text_desc">${data[i].subDesc}  
            </div>
            
            </div>
            <a class="open_info_coupon notShow" href="">Открыть</a>
            <div class="card_info-icon">
                <div class="card_date">
                    <div class="card_icon icon_time"></div>
                    <span class="card_cheks-date">${localeDate}</span>
                </div>
                <div class="card_count">
                    <div class="card_icon icon_count"></div>
                    <span class="card_count_click">25</span>
                </div>
            </div>
        </div>
        </div>`)
        const dateValid = document.querySelector('.card_cheks-date')
        const dateNow = new Date().toLocaleDateString()
        if(dateNow > dateValid.innerText){
            let id = dateValid.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id')
            delete data[id]
            Coupon.updateCoupon(data)            
        }
        
        openModalCoupon()
        
        const openModalBtn = document.querySelector('.open_info_coupon')
        openModalBtn.addEventListener('click', (e) => {
            e.preventDefault()
            modalCoupon(mainCoupon, data[i].typeInfo, data[i].type, data[i].shop, data[i].desc, data[i].url, 
                data[i].promocode)
        })

        const cardItem = document.querySelector('.card_item').addEventListener('click', (e) => {
            e.preventDefault()
            modalCoupon(mainCoupon, data[i].typeInfo, data[i].type, data[i].shop, data[i].desc, data[i].url, 
                data[i].promocode)
        })
    }
}

function modalCoupon(...db){
    if(db[2] == 'Акция') {
        db[0].insertAdjacentHTML('afterbegin', `<div class="section_main_modal-coupon">
        <div class="modal_content">
            <div class="close_modal">&times;</div>
            <section class="modal_header">
                <div class="modal_type-info">
                    <div class="modal_type-info-text">${db[1]}</div>
                    <div class="modal_type-info-type">${db[2]}</div>
                    
                </div>
                <div class="modal_info-coupon">
                    <div class="modal_info-coupon-shop">${db[3]}</div>
                    <div class="modal_info-coupon-desc">${db[4]}</div>
                </div>
            </section>
            <section class="modal_main">
                <p>Промокод не требуется. Для того чтобы воспользоваться акцией, просто перейдите на сайт по кнопке ниже.</p>
                <a href="${db[5]}" class="modal_main-link_coupon" data-newWindow>Перейти на сайт</a>
            </section>
        </div>
        </div>`)
        const link_coupon = document.querySelector('.modal_main-link_coupon').addEventListener('click', (e) => {
            e.preventDefault()
            window.open(e.target.href);
        })
        removeModal('.close_modal')
    } else if(db[2] == 'Купон') {
        db[0].insertAdjacentHTML('afterbegin', `<div class="section_main_modal-coupon">
        <div class="modal_content">
            <div class="close_modal">&times;</div>
            <section class="modal_header">
                <div class="modal_type-info">
                    <div class="modal_type-info-text">${db[1]}</div>
                    <div class="modal_type-info-type">${db[2]}</div>
                    
                </div>
                <div class="modal_info-coupon">
                    <div class="modal_info-coupon-shop">${db[3]}</div>
                    <div class="modal_info-coupon-desc">${db[4]}</div>
                </div>
            </section>
            <section class="modal_main">
                <p>Скопируйте промокод ниже, или нажмите на кнопку копирования и он автоматический скопируется в ваш буфер обмена, затем перейдите на сайт и воспользуйтесь.</p>
                <div class="modal_promocode-main">
                    <button class="copy_promocode" type="submit"><i class="fas fa-copy"></i></button>
                    <input type="text" class="modal_promocode" value="${db[6]}" readonly="readonly">
                </div>
                <a href="${db[5]}" class="modal_main-link_coupon" data-newWindow>Перейти на сайт</a>
            </section>
        </div>
    </div>`)
        const link_coupon = document.querySelector('.modal_main-link_coupon').addEventListener('click', (e) => {
            e.preventDefault()
            window.open(e.target.href);
        })
        removeModal('.close_modal')
        copyPromocode('.copy_promocode', '.modal_promocode')
    }
}