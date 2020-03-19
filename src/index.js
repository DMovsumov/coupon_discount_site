import './style/scss_style/style.scss'
import './style/glider.css'
import { renderCouponMain } from './JS/main/renderCoupon.main'
import { Category } from './JS/category'


renderCouponMain()


const collections = document.querySelector('.section_top_category-sort')

Category.loadCategory()
.then(renderListCollection)
.then(() => {
    const collections = document.querySelectorAll('.category_sort_collections')
    collections.forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.preventDefault()
            const allItems = document.querySelectorAll('.card_item')
            let filter = e.target.innerText.trim()
        
            allItems.forEach(elem => {
                if(elem.getAttribute('collections').split(',').find(i => i == filter)){
                    elem.style.display = 'flex'                    
                } else {
                    elem.style.display = 'none'
                }
            })
        })
    })
})

function renderListCollection(data){
    for(let i in data){
        collections.insertAdjacentHTML('beforeend', `<div class="category-sort_block">
        <a href="" class="category_sort_collections">${data[i]}</a>
    </div>`)
    }
}


