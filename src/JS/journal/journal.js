import '../../style/scss_style/style.scss'
import '../../style/views/journal.scss'
import Masonry from 'masonry-layout'
import { Article } from '../article'
import '../../style/scss_style/modal_article.scss'

const mainSection = document.querySelector('.main_section')
const main = mainSection.querySelector('.main')
const pagination = mainSection.querySelector('#pagination')




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
    filterArticles(db, data)


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
            modalArticleShow(data)
        })
    })

    modalArticleShow(data)
}

//Функция показа информации
function show(el) {
    main.insertAdjacentHTML('beforeend', `<article class="main_item_arcticle" data-id="${el[0]}" category="${el[1].category}">
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
        stamp: '.modal_article',
        gutter: 20
    })
}

const filterJournal = document.querySelectorAll('.filter_journal')
//Фукнция фильтрации статей
function filterArticles(db, data) {
    filterJournal.forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.preventDefault()
            const newFilterDb = []

            db.forEach(el => {
                if(el[1].category == e.target.innerText){
                    newFilterDb.push(el)
                }                
            })

            const liAll = document.querySelector('.link_all')
            liAll.addEventListener('click', renderArticlesList)
            
            const li = document.querySelectorAll('#pagination li').forEach(el => {el.remove()})

            main.innerHTML = ''
            newFilterDb.forEach(el => {
                show(el)
            })

            modalArticleShow(data)
        })
    })
}

// Открытие статьи
function modalArticleShow(data) {
    const mainItemArcticle = document.querySelectorAll('.main_item_arcticle')
    mainItemArcticle.forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.preventDefault()
            let id = elem.getAttribute('data-id')
            console.log(data[id]);

            main.style.display = 'none'
            pagination.style.display = 'none'
            mainSection.insertAdjacentHTML('beforeend', `<section class="modal_article">
                <h1 class="header_article_show"><strong>${data[id].header}</strong></h1>
                ${data[id].desc}
                <a href="" class="close_article">&times;</a>
            </section>`)

            const closeArticle = document.querySelector('.close_article').addEventListener('click', (e) => {
                e.preventDefault()
                e.target.parentElement.remove()
                main.style.display = 'block'
                pagination.style.display = 'flex'
            })
        })
    })
}

