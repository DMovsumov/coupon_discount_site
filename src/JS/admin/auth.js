

const modalLogin = document.createElement('div')
const main = document.querySelector('body')

modalLogin.style.width = '100%'
modalLogin.style.height = '100%'
modalLogin.classList.add('modal_login')
modalLogin.style.backgroundColor = '#fff'
modalLogin.style.zIndex = '100'
modalLogin.style.position = 'absolute'
modalLogin.style.display = 'flex'
modalLogin.style.alignItems = 'center'
modalLogin.style.justifyContent = 'center'

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
}
