import '../../style/scss_style/style.scss'
import '../../style/views/partners.scss'
import '../../style/views/modal_appeal.scss'

import {renderModalAppeal} from './modal_appeal'
const main = document.querySelector('.main')
const btn = document.querySelector('.clicks').addEventListener('click', (e)=> {
    e.preventDefault()
    renderModalAppeal(main)
})