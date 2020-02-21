import { Coupon } from "../coupon";

const table = document.getElementById('delete_table')


function renderList(data) {
    const keyDelete = Object.keys(data).map(i => i)
    console.log(keyDelete)
    for(let i in data){
        table.insertAdjacentHTML('beforeend', `<tr class="coupon_table" data-id="">
        <th><div>Delete</div></th>
        <th>${data[i].country}</th>
        <th>${data[i].shop}</th>
        <th>${data[i].type}</th>
        <th>${data[i].category}</th>
        <th>${data[i].subCategory}</th>
        <th>${data[i].promocode}</th>
        <th>${data[i].typeInfo}</th>
        <th>${data[i].subDesc}</th>
        <th><a href="${data[i].url}">Перейти</a></th>
        <th>${data[i].date}</th>
        </tr>`) 
        // console.log(Object.keys(data[i]))
    }
}

export function DeleteCoupon(){
    Coupon.loadCoupon()
    .then(renderList)
}


