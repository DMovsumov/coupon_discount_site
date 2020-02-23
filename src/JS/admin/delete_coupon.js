import { Coupon } from "../coupon";

const table = document.getElementById('delete_table')
const filters = document.querySelectorAll('.filters')
const sortBtn = document.getElementById('submit_sort')


function renderList(data) {
    const keyDelete = Object.keys(data)
    const objData = keyDelete.reduce((j, k) => {
        j[k] = k
        return j
    }, {})   
    
    for(let i in data){
        table.insertAdjacentHTML('beforeend', `<tr class="coupon_table" data-id="${objData[i]}">
        <th class="delete_line"></th>
        <th>${data[i].country}</th>
        <th>${data[i].shop}</th>
        <th>${data[i].type}</th>
        <th>${data[i].category}</th>
        <th>${data[i].subCategory}</th>
        <th>${data[i].promocode}</th>
        <th>${data[i].typeInfo}</th>
        <th>${data[i].subDesc}</th>
        <th><a href="${data[i].url}">Ссылка</a></th>
        <th>${data[i].date}</th>
        </tr>`)
        const couponTable = table.querySelectorAll('.delete_line')
        const deleteBtn = document.createElement('div')
        deleteBtn.classList.add('delete_btn')
        deleteBtn.textContent = 'Удалить'
        couponTable.forEach(i => i.appendChild(deleteBtn))

        deleteBtn.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.classList.add('deleted')
            let id = e.target.parentElement.parentElement.getAttribute('data-id')
            delete data[id]
            Coupon.updateCoupon(data)
        })
    }

    return data
}

export function DeleteCoupon(){
    Coupon.loadCoupon()
    .then(renderList)
}


