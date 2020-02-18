export class Coupon {
    static create(coupon) {
        return fetch('https://skidwood-5a4ed.firebaseio.com/coupon.json', {
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
        .then(response => response)
        .then(data => {
            console.log(data)
        })
    }
}