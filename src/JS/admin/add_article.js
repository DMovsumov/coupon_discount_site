import { Article } from "../article"

const addArticleForm = document.getElementById('add_article_form')
const submit_form_article = addArticleForm.querySelector('#submit_form_article')

submit_form_article.disabled = false


addArticleForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const input = addArticleForm.querySelectorAll('input')
    const mytextArea = addArticleForm.querySelector('#mytextarea')

    const article = {
        header: input[0].value,
        subDesc: input[1].value,
        img: input[2].value,
        desc: tinymce.activeEditor.getContent()
    }
    
    submit_form_article.disabled = true
    
    Article.create(article)
    .then(() => {
        input.forEach(e => e.value = '')
        submit_form_article.disabled = false
    })
})
