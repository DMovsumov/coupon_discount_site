export class Mail {
    static create(mail){
        return fetch(`https://skidwood-5a4ed.firebaseio.com/mail.json`, {
            method: 'POST',
            body: JSON.stringify(mail),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
    }

    static loadMail() {
        return fetch(`https://skidwood-5a4ed.firebaseio.com/mail.json`)
        .then(response => response.json())
        .then(data => data)
    }

    static updateMail(coupon) { //Запрос PUT необходим при удалении 
        fetch(`https://skidwood-5a4ed.firebaseio.com/mail.json`,{
            method: 'PUT',
            body: JSON.stringify(mail),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}