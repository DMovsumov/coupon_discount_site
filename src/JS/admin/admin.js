import '../../style/admin_scss/style_admin.scss'
import * as Validation from './add_coupon'
import { Coupon } from "../coupon"
import { LoginOnLoad, authWithEmailAndPassword } from './auth'
import {addSlideToDb} from './add_slide'
import * as Collect from './add_collections'

// Coupon.loadCoupon()

// window.addEventListener('load', openModal())


function openModal() {
    LoginOnLoad()
    document.querySelector('.auth').addEventListener('submit', authFormLog)
}

function authFormLog(e) {
    e.preventDefault()

    const email = e.target.querySelector('#auth_email').value
    const password = e.target.querySelector('#auth_password').value

    authWithEmailAndPassword(email, password)
}
