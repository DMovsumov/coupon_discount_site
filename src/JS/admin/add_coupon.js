import {isValid} from './Validation'
import {Coupon} from '../coupon'
import { Category } from '../category'

const form = document.querySelector('#form_add_coupon')
const input = form.querySelectorAll('.input')
const selectType = form.querySelector('#select_type')
const selectCategory = form.querySelector('#select_category')
const selectCountry = form.querySelector('#select_country')
const promoCode = form.querySelector('#promocode')
const submitBtn = form.querySelector('#submit_add')


submitBtn.disabled = false

loadsCategoryTru()
function loadsCategoryTru() {
    Category.loadCategory()
    .then(loadAllCategory)
}



function loadAllCategory(data) {
    const skidwoodCategory = document.querySelector('.skidwood_collections')

    for(let i in data) {
        skidwoodCategory.insertAdjacentHTML('beforeend', `<div class="skidwood_coll">
        <label class="skidwood_checkbox">
            <input type="checkbox" class="checkbox_category" value="${data[i]}">${data[i]}
        </label>
    </div>`)
    }
}

form.addEventListener('submit', submitCoupon)


function submitCoupon(event){
    event.preventDefault()

    const allCategory = []
    const checkboxCategory = document.querySelectorAll('.checkbox_category:checked')
    checkboxCategory.forEach((elem) => {
        allCategory.push(elem.value)
    })
    console.log(allCategory);

    const iteration = (input) => {        
        for(let iter of input){
            return iter.value            
        }
    }
        if(isValid(iteration(input))) {
            const coupon = {
                shop: input[0].value,
                type: selectType.value,
                category: selectCategory.value,
                promocode: promoCode.value,
                subCategory: input[1].value,
                country: selectCountry.value,
                url: input[2].value,
                typeInfo: input[3].value,
                subDesc: input[4].value,
                desc: input[5].value,
                date: input[6].value,
                img: input[7].value,
                category: allCategory
            }
            
            
            submitBtn.disabled = true

            

            Coupon.create(coupon).then(() => {
                for(let iter of input){
                    iter.value = ''            
                }
                submitBtn.disabled = false
            })
        }
    
}


