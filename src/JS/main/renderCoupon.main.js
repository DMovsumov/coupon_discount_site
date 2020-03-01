import { Coupon } from '../coupon'
import { openModalCoupon } from '../analitics/openModalCoupons'


const mainCoupon = document.querySelector('.section_main')

export function renderCouponMain (data){
    Coupon.loadCoupon()
    .then(renderList)
}

function renderList(data) {
    console.log(data)
    const keyDelete = Object.keys(data)
    const objData = keyDelete.reduce((j, k) => {
        j[k] = k
        return j
    }, {})

    for(let i in data){            
        mainCoupon.insertAdjacentHTML('afterbegin', `<div class="card_item" data-id="${objData[i]}">            
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
                    <span class="card_cheks-date">${data[i].date}</span>
                </div>
                <div class="card_count">
                    <div class="card_icon icon_count"></div>
                    <span class="card_count_click">25</span>
                </div>
            </div>
        </div>
    </div>`)
        openModalCoupon()
        
        const openModalBtn = document.querySelector('.open_info_coupon')
        openModalBtn.addEventListener('click', (e) => {
            e.preventDefault()
            modalCoupon(mainCoupon, data[i].typeInfo, data[i].type, data[i].shop, data[i].desc, data[i].url)
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
    }
}

const action = `<div class="section_main_modal-coupon">
<div class="modal_content">
    <div class="close_modal">&times;</div>
    <section class="modal_header">
        <div class="modal_type-info">
            <div class="modal_type-info-text">-50%</div>
            <div class="modal_type-info-type">Промокод</div>
            
        </div>
        <div class="modal_info-coupon">
            <div class="modal_info-coupon-shop">Перекресток</div>
            <div class="modal_info-coupon-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur facilis, nam explicabo inventore deleniti porro.</div>
        </div>
    </section>
    <section class="modal_main">
        <p>Промокод не требуется. Для того чтобы воспользоваться акцией, просто перейдите на сайт по кнопке ниже.</p>
        <a href="" class="modal_main-link_coupon" data-newWindow>Перейти на сайт</a>
    </section>
</div>
</div>`