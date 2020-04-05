import { Article } from "../article"

const deleteArticleItems = document.querySelector('.delete_article_items')
const pagination = document.querySelector('#pagination')

DeleteArticle()
export function DeleteArticle() {
    Article.loadArticles()
    .then(renderListArticles)
}


let numberOnPage = 10

function renderListArticles(data) {
    const keyDelete = Object.keys(data)

    let countOfItems = Math.ceil(keyDelete.length / numberOnPage) 
    
    for(let i = 1; i <= countOfItems; i++){
        pagination.insertAdjacentHTML('beforeend', `<li>${i}</li>`)
    }

    const li = document.querySelectorAll('#pagination li')

    for(let item of li) {
        item.addEventListener('click', (e) => {
            let pageNum = + e.target.innerHTML
            let start = (pageNum - 1) *numberOnPage
            let end = start + numberOnPage

            let notes = Object.entries(data).slice(start, end)
            
            deleteArticleItems.innerHTML = ''
            notes.forEach(el => {
                deleteArticleItems.insertAdjacentHTML('beforeend', `<li class="article_item" data-id=${el[0]}>
                <img src="${el[1].img}" alt="">
                <div class="text_info">
                    <h3>${el[1].header}.</h3>
                    <p>${el[1].subDesc}</p>
                    <span class="category"><strong>${el[1].category}</strong></span>
                    <span><strong>${el[1].date}</strong></span>
                    <a href="" class="delete_btn"></a>
                </div>
            </li>`)

            })

            const deleteBtn = document.querySelectorAll('.delete_btn')
                deleteBtn.forEach(el => el.addEventListener('click', (e) => {
                    e.preventDefault()
                    e.target.parentElement.parentElement.remove()
                    e.target.parentElement.parentElement.classList.add('deleted')
                    let id = e.target.parentElement.parentElement.getAttribute('data-id')
                    delete data[id]
                    Article.updateArticle(data)
                })
            )
        })
    }
    
}