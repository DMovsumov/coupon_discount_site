import {Slider} from '../slider'
import { gliderFunc } from '../analitics/analitic'


Slider.loadSlide()
.then(renderListSlider)

const slider = document.getElementById('sldier_skidwood')

export function renderListSlider(data) {
    const keyDelete = Object.keys(data)
    const objData = keyDelete.reduce((j, k) => {
        j[k] = k
        return j
    }, {})

    for(let i in data){
        slider.insertAdjacentHTML('afterbegin', `<div class="item_glider">
        <img src="${data[i].img}" alt="">
        <div class="item_glider_info_coupon">
            <div class="item_glider_desc">
                <span class="item_glider_desc_title">${data[i].shop}</span>
                <span class="item_glider_desc_desc">${data[i].desc}</span>
            </div>
            <a href="${data[i].url}" class="item_glider_link">Перейти</a>
        </div>
    </div>`)
        const itemGlider = document.querySelector('.item_glider').addEventListener('click', (e) => {
            e.preventDefault()
            window.open(data[i].url);
        })

        const link_slider = document.querySelector('.item_glider_link').addEventListener('click', (e) => {
            e.preventDefault()
            window.open(e.target.href);
        })
    }
    
    gliderFunc()
}