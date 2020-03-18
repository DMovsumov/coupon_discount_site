//Добавление новой категории

export class Category {
    static create(collections) {
        return fetch(`https://skidwood-5a4ed.firebaseio.com/category.json`, {
            method: 'POST',
            body: JSON.stringify(collections),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
    }

    static loadCategory() {
        return fetch(`https://skidwood-5a4ed.firebaseio.com/category.json`)
        .then(response => response.json())
        .then(data => data)
    }

    static updateCategory(collections) {
        return fetch(`https://skidwood-5a4ed.firebaseio.com/category.json`, {
            method: 'PUT',
            body: JSON.stringify(collections),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    
}



