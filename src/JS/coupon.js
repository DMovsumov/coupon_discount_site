export class Coupon {
    static create(coupon) {
        return fetch(`https://skidwood-5a4ed.firebaseio.com/coupon.json`, {
            method: 'POST',
            body: JSON.stringify(coupon),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
    }

    static loadCoupon() {
        return fetch(`https://skidwood-5a4ed.firebaseio.com/coupon.json`)
        .then(response => response.json())
        .then(data => data)
    }

    static updateCoupon(coupon) { //Запрос PUT необходим если удаляешь сразу больше одного купона
        fetch(`https://skidwood-5a4ed.firebaseio.com/coupon.json`,{
            method: 'PUT',
            body: JSON.stringify(coupon),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}