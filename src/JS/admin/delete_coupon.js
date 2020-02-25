import { Coupon } from "../coupon";

const table = document.getElementById('delete_table')

export function DeleteCoupon(){
    Coupon.loadCoupon()
    .then(renderList)
    .then(() => {
        loadFilters()
        sortFilters()
    })    
}

function renderList(data) {
    const keyDelete = Object.keys(data)
    const objData = keyDelete.reduce((j, k) => {
        j[k] = k
        return j
    }, {})   
    
    for(let i in data){            
        table.insertAdjacentHTML('beforeend', `<tr class="coupon_table sort_table" data-id="${objData[i]}">
        <th class="delete_line"></th>
        <th class="country_sort">${data[i].country}</th>
        <th>${data[i].shop}</th>
        <th class="sort_type">${data[i].type}</th>
        <th class="category_sort_th">${data[i].category}</th>
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
}


function loadFilters() {
    const formFilters = `<header class="main_delete_coupon_header">
    <form action="" class="sort_delete">
        <select name="type" class="type select_type sort_type select_filters" id="select_type_sort">
            <option value="">Не выбрано</option>
            <option value="Акция">Акция</option>
            <option value="Купон">Купон</option>
        </select>
        <select name="category" class="category select_category sort_category select_filters"
            id="select_category_sort">
            <option value="">Не выбрано</option>
            <option value="Техника">Техника</option>
            <option value="Развлечения">Развлечения</option>
            <option value="Финансы">Финансы</option>
            <option value="Путешествия">Путешествия</option>
            <option value="Товары">Товары</option>
            <option value="Услуги">Услуги</option>
            <option value="CashBack">CashBack</option>
            <option value="Онлайн магазины">Онлайн магазины</option>
            <option value="Авто">Авто</option>
            <option value="Обучение">Обучение</option>
            <option value="Еда">Еда</option>
            <option value="Спорт">Спорт</option>
            <option value="Азарт">Азарт</option>
            <option value="Для взрослых">Для взрослых</option>
        </select>
        <select name="country" class="country select_country sort_country select_filters"
            id="select_country_sort">
            <option value="">Не выбрано</option>
            <option value="Россия">Россия</option>
            <option value="Украина">Украина</option>
            <option value="Украина">Беларусь</option>
            <option value="Украина">Казахстан</option>
        </select>
        <input type="search" name="" id="search_sort" class="filters"
            placeholder="Название магазина, промокод, подкатегорию...">
        <input type="date" name="" class="date input filters" id="date_sort">
    </form>                    
    </header>`

    const filters = document.querySelector('.main_delete_coupon_header')
    filters.insertAdjacentHTML('afterBegin', formFilters)
}

function sortFilters() {
    const formSort = document.querySelector('.sort_delete')
    //Сортировка по типу
    const sortTypes = formSort.querySelector('#select_type_sort')
    const sort_type = document.querySelectorAll('.sort_type')
    //Сортировка по категории
    const selectCategories = formSort.querySelector('#select_category_sort')
    const category_sort = document.querySelectorAll('.category_sort_th')
    //Сортировка по стране
    const selectCountry = formSort.querySelector('#select_country_sort')
    const country_sort = document.querySelectorAll('.country_sort')
    //TODO: доделать сортировку поиска и по дате
    const search_sort = document.getElementById('#search_sort')

    
    sortTypes.addEventListener('change', (e) => {
        // e.preventDefault()
        sortFunction(e, sort_type)
    })

    selectCategories.addEventListener('change', (e) => {
        // e.preventDefault()
        sortFunction(e, category_sort)
    })

    selectCountry.addEventListener('change', (e) => {
        // e.preventDefault()
        sortFunction(e, country_sort)
    })
}

const sortFunction = (e, elementSort) => {
    if(e.target.value != null){           
        elementSort.forEach(function(elem) {
            if(elem.innerText.search(e.target.value) == -1){
                elem.parentElement.classList.add('notShow')
            } else {
                elem.parentElement.classList.remove('notShow')
            }
        })                
    } else {
        elementSort.forEach((elem) => {
            elem.parentElement.classList.remove('notShow')
        })
    }
}