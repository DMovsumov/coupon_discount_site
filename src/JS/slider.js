export class Slider {
    static createSlide(slide) {
        return fetch(`https://skidwood-5a4ed.firebaseio.com/slide.json`, {
            method: 'POST',
            body: JSON.stringify(slide),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
    }

    static loadSlide() {
        return fetch(`https://skidwood-5a4ed.firebaseio.com/slide.json`)
        .then(response => response.json())
        .then(data => data)
    }

    static updateSlide(slide) {
        return fetch(`https://skidwood-5a4ed.firebaseio.com/slide.json`, {
            method: 'PUT',
            body: JSON.stringify(slide),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}