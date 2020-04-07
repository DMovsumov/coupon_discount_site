import '../../style/scss_style/style.scss'
import '../../style/views/journal.scss'
import Masonry from 'masonry-layout'
import { Article } from '../article'

const main = document.querySelector('.main')
const pagination = document.querySelector('#pagination')



renderArticlesList()    


function renderArticlesList() {
    Article.loadArticles()
    .then(renderArticle)
}

let numberOnPage = 5

function renderArticle(data) {
    const keyDelete = Object.keys(data)

    const db = Object.entries(data)
    
    let countOfItems = Math.ceil(keyDelete.length / numberOnPage)

    //Создаем li
    for(let i = 1; i <= countOfItems; i++){
        pagination.insertAdjacentHTML('beforeend', `<li>${i}</li>`)
    }

    const li = document.querySelectorAll('#pagination li')

    //TODO: фильтрацию на странице


    //Показываем 1 страницу по загрузке.
    let endShow = 0 + numberOnPage
    let startShow = db.slice(0, endShow)
    startShow.forEach(el => {
        show(el)
        li[0].classList.add('active')
    })

    // По нажатию на пагинацию показываем соответсвующую информацию.
    li.forEach(element => {
        element.addEventListener('click', (e) => {
            let active = pagination.querySelector('#pagination li.active')
            if(active){
                active.classList.remove('active')
            }
            e.target.classList.add('active')
            
            
            let pageNum = + e.target.innerHTML
            let start = (pageNum - 1) *numberOnPage
            let end = start + numberOnPage

            let articles = db.slice(start, end)

            main.innerHTML = ''
            

            articles.forEach(el => {
                show(el)
            })
        })
    })
}

//Функция показа информации
function show(el) {
    main.insertAdjacentHTML('beforeend', `<article class="main_item_arcticle" category="${el[1].category}">
        <div class="article_img">
                <img src="${el[1].img}" alt="">
        </div>
            <div class="article_info">
                <h3>${el[1].header}</h3>
                <p>${el[1].subDesc}</p>
            </div>
            <div class="article_date">
            <div class="calendar_icon"></div><span>${el[1].date}</span>
        </div>
    </article>`)

    let mnsry = new Masonry(main, {
        itemSelector: '.main_item_arcticle',
        columnWidth: '.main_item_arcticle',
        gutter: 20
    })
}

