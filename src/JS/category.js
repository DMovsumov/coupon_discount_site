//Добавление новой категории

export class Category {
    static create(category) {
        return fetch(`https://skidwood-5a4ed.firebaseio.com/category.json`, {
            method: 'POST',
            body: JSON.stringify(category),
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

    static updateCategory(category) {
        return fetch(`https://skidwood-5a4ed.firebaseio.com/category.json`, {
            method: 'PUT',
            body: JSON.stringify(category),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    
}

Category.loadCategory().then(renderListCategory)


function renderListCategory(data) {
    const printAllCategory = document.querySelector('.main_add_category-all_category')

    const keyDelete = Object.keys(data)
    const objData = keyDelete.reduce((j, k) => {
        j[k] = k
        return j
    }, {})
    
    for(let i in data){
        printAllCategory.insertAdjacentHTML('beforeend', `<div class="all_category-block" data-id="${objData[i]}">
        <input type="text" class="all_category_name" value="${data[i]}" readonly="readonly">
        <button class="all_category_minus all_category_icon"></button>
        </div>`)

        const deleteCategoryBtn = document.querySelectorAll('.all_category_minus')
        
        deleteCategoryBtn.forEach((element) => {
            element.addEventListener('click', (e) => {
                e.preventDefault()
                e.target.parentElement.remove()
                let id = e.target.parentElement.getAttribute('data-id')
                delete data[id]
                Category.updateCategory(data)
            })
        })
    }
}



const categoryForm = document.getElementById('category_add')
const submitCattegoryBtn = document.getElementById('submit_category')

submitCattegoryBtn.disabled = false

categoryForm.addEventListener('submit', (e) => {
    e.preventDefault()
    submitCattegoryBtn.disabled = true
    const categoryname = categoryForm.querySelectorAll('.main_add_category_name')
    categoryname.forEach(e => {
        const allCategory = []
        allCategory.push(e.value)
        Category.create(allCategory)
        .then(() => {
            submitCattegoryBtn.disabled = false
            categoryname.forEach(e => {
                e.value = ''
            })
        })
    })
})



const plusCategory = () => {
    const plusCategory = document.querySelector('.main_add_category_plus')
    plusCategory.addEventListener('click', (e) => {
        e.preventDefault()
        plusCategory.insertAdjacentHTML('afterend', `<div>
        <input type="text" class="main_add_category_name" placeholder="Название категории" minlength="2">
        <button class="main_add_category_minus main_add_category_icon"></button>
        </div>`)
        minusCategory()
    })
}

plusCategory()
const minusCategory = () => {
    const minusCategory = document.querySelectorAll('.main_add_category_minus')
    minusCategory.forEach((elem) => {
        elem.addEventListener('click', (e) => {
            e.preventDefault()
            elem.parentElement.remove()              
        })
    })
}

