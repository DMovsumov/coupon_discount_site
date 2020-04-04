// import { Coupon } from "../coupon"

const headerModule = document.querySelector('.header')
const mainModule = document.querySelector('.main')
const modalLogin = document.createElement('div')
const main = document.querySelector('body')

modalLogin.classList.add('modal_login')

// headerModule.style.display = 'none'
// mainModule.style.display = 'none'

export function LoginOnLoad() {
    main.insertAdjacentElement('afterbegin', modalLogin)
    modalLogin.insertAdjacentHTML('afterbegin', getAuthForm())
}

function getAuthForm() {
    return `<form class="auth">
    <span>Введите логин и пароль:</span>
    <input type="email" name="" id="auth_email" placeholder="Email">
    <input type="password" name="" id="auth_password" placeholder="Пароль">
    <button type="submit" id="auth_submit">Войти</button>
    </form>`
}

function getNotAccess() {
    return `<p class="error">У вас нет доступа</p>`
}

export function authWithEmailAndPassword(email, password) {
    const apiKey = 'AIzaSyDc5-Nty4pljj-bQbB9YdCeYwW831RiWSo'
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({
            email, password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => data.idToken)
    .then(token => {
        if(token){
            modalLogin.style.display = 'none'
            main.disabled = false
            headerModule.style.display = 'block'
            mainModule.style.display = 'block'
        } else {
            document.querySelector('.auth').insertAdjacentHTML('beforeEnd', getNotAccess())
        }
    })
}
