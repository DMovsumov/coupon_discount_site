export class Article {
    static create(article) {
        return fetch(`https://skidwood-5a4ed.firebaseio.com/articles.json`, {
            method: 'POST',
            body: JSON.stringify(article),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
    }

    static loadArticles() {
        return fetch(`https://skidwood-5a4ed.firebaseio.com/articles.json`)
        .then(response => response.json())
        .then(data => data)
    }

    static updateArticle(article) { //Запрос PUT необходим при удалении
        fetch(`https://skidwood-5a4ed.firebaseio.com/articles.json`,{
            method: 'PUT',
            body: JSON.stringify(article),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}