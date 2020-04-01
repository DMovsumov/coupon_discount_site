import { Mail } from "../mail"

export function renderModalAppeal(section) {
    section.insertAdjacentHTML('afterbegin', ` <div class="main_modal-appeal">
    <form action="" class="main_form">
        <label for="" class="main_label add_labels">Тема обращения:
            <nav class="table_change">
                <button class="change_item_link" value="Сотрудничество">Сотрудничество</button>
                <button class="change_item_link" value="Предложение">Предложение</button>
                <button class="change_item_link" value="Техническая пробема">Техническая пробема</button>
                <button class="change_item_link" value="Другое">Другое</button>
            </nav>
        </label>
</form>
</div>`)
    
    const tableChange = document.querySelector('.table_change')
    

    changeFunc(tableChange)
}

const changeFunc = (btn) => {
    const changeBtn = btn.querySelectorAll('.change_item_link')
    const formMail = document.querySelector('.main_form')

    changeBtn.forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault()
            const add_labels = document.querySelector('.add_labels')
            if(e.target.value == 'Сотрудничество'){
                const add_info = document.querySelectorAll('.add_info')
                add_info.forEach(e => e.remove())
                add_labels.insertAdjacentHTML('afterend', `<div class="add_info"><label for="" class="main_label">О компании:
                    <input type="text" class="main_input" placeholder="Название компании">
                    <input type="text" class="main_input" placeholder="Вид деятельности">
                    <input type="url" class="main_input" name="" id="" placeholder="Ссылка на сайт">
                </label>
                <label for="" class="main_label contacts_label">
                    Контактные данные:
                    <div class="family_name">
                        <input type="text" class="main_input" name="" id="" placeholder="Имя">
                        <input type="text" class="main_input" name="" id="" placeholder="Фамилия">
                    </div>
                    <input type="email" class="main_input" name="" id="" placeholder="E-mail">
                </label>
                <label for="" class="main_label country_label">Страна размещения:
                <select class="header_country fa">
                <option value="Все">Все</option>
                <option value="Россия" class="header_country_option">Россия</option>
                <option value="Украина">Украина</option>
                <option value="Казахстан">Казахстан</option>
                <option value="Беларусь">Беларусь</option>
                </select></label>
                <label for="" class="main_label category_label">Категория
                <select name="type" class="category select_category" id="select_category">
                    <option value="Техника">Техника</option>
                    <option value="Развлечения">Развлечения</option>
                    <option value="Финансы">Финансы</option>
                    <option value="Путешествия">Путешествия</option>
                    <option value="Товары">Товары</option>
                    <option value="Услуги">Услуги</option>
                    <option value="CashBack">CashBack</option>
                    <option value="Онлайн магазины">Онлайн магазины</option>
                    <option value="Авто">Авто</option>
                    <option value="Обучение">Обучение</option>
                    <option value="Еда">Еда</option>
                    <option value="Спорт">Спорт</option>
                    <option value="Азарт">Азарт</option>
                    <option value="Для взрослых">Для взрослых</option>
                </select>
                </label>
                <label for="" class="main_label">
                Подкатегория: <input type="text" class="main_input" placeholder="Название подкатегории">
                </label>
            <label for="" class="main_label type_label">Тип:
                <select name="type" class="type select_type" id="select_type">
                    <option value="Акция">Акция</option>
                    <option value="Купон">Купон</option>
                </select>
            </label>
            <label for="" class="main_label">Введите промокод: 
                <input type="text" class="main_input promo_input" placeholder="Введите промокод" disabled="true">
            </label>
            <label for="" class="main_label">Напишите нам всю информацию о вашем предложении:
                <textarea name="" id="" cols="30" rows="10" class="main_area"></textarea>
            </label>
            <button type="submit" class="main_button">Отправить запрос</button>
            </div>`)
                const selectType = document.querySelector('.select_type')
                selectType.addEventListener('change', (e) => {
                    if(e.target.value == 'Купон'){
                        const promoInput = document.querySelector('.promo_input').disabled = false
                        } else {
                        const promoInput = document.querySelector('.promo_input').disabled = true
                    }
                })
                const typeMail = e.target.value
                formMail.addEventListener('submit', (e) => {
                    e.preventDefault()
                    const mainInput = document.querySelectorAll('.main_input')
                    const country = document.querySelector('.header_country')
                    const category = document.querySelector('.select_category')
                    const type = document.querySelector('.select_type')
                    const area = document.querySelector('.main_area')

                    submitMail(mainInput, typeMail, country, category, type, area)
                })
            } else if(e.target.value == 'Предложение'){
                const add_info = document.querySelectorAll('.add_info')
                add_info.forEach(e => e.remove())
                add_labels.insertAdjacentHTML('afterend', `<div class="add_info"><label for="" class="main_label contacts_label">
                    Введите ваш E-mail:
                    <input type="email" class="main_input" name="" id="" placeholder="E-mail">
                </label>
                <label for="" class="main_label">Тема предложения:
                    <input type="text" class="main_input" placeholder="Тема предложения">
                </label>
            <label for="" class="main_label">Напишите нам всю информацию о вашем предложении:
                <textarea name="" id="" cols="30" rows="10" class="main_area"></textarea>
            </label>
            <button type="submit" class="main_button">Отправить запрос</button>
            </div>`)
                
                const typeMail = e.target.value
                formMail.addEventListener('submit', (e) => {
                    e.preventDefault()
                    const mainInput = document.querySelectorAll('.main_input')
                    const area = document.querySelector('.main_area')

                    submitMail(mainInput, typeMail, area)
                })
            }else if(e.target.value == 'Техническая пробема'){
                const add_info = document.querySelectorAll('.add_info')
                add_info.forEach(e => e.remove())
                add_labels.insertAdjacentHTML('afterend', `<div class="add_info"><label for="" class="main_label contacts_label">
                    Введите ваш E-mail:
                    <input type="email" class="main_input" name="" id="" placeholder="E-mail">
                        </label>
                        <label for="" class="main_label">Тема ошибки:
                            <input type="text" class="main_input" placeholder="Тема предложения">
                        </label>
                    <label for="" class="main_label">Напишите нам подробнее о вашей ошибке:
                        <textarea name="" id="" cols="30" rows="10" class="main_area"></textarea>
                    </label>
                    <label for="" class="main_label">Ссылка на картинку с ошибкой:
                        <input type="url" class="main_input" name="" id="" placeholder="Ссылка на картинку ошибки">
                    </label>
                    <button type="submit" class="main_button">Отправить запрос</button>
                    </div>`)
                
                const typeMail = e.target.value
                formMail.addEventListener('submit', (e) => {
                    e.preventDefault()
                    const mainInput = document.querySelectorAll('.main_input')
                    const area = document.querySelector('.main_area')
    
                    submitMail(mainInput, typeMail, area)
                })
            } else if(e.target.value == 'Другое'){
                const add_info = document.querySelectorAll('.add_info')
                add_info.forEach(e => e.remove())
                add_labels.insertAdjacentHTML('afterend', `<div class="add_info"><label for="" class="main_label    contacts_label">
                    Введите ваш E-mail:
                    <input type="email" class="main_input input_other" name="" id="" placeholder="E-mail">
                    </label>
                    <label for="" class="main_label">Тема:
                    <input type="text" class="main_input input_other" placeholder="Тема">
                    </label>
                    <label for="" class="main_label">Информация:
                    <textarea name="" id="" cols="30" rows="10" class="main_area"></textarea>
                    </label>
                    <button type="submit" class="main_button">Отправить запрос</button>
                    </div>`)
                
                const typeMail = e.target.value
                formMail.addEventListener('submit', (e) => {
                    e.preventDefault()
                    const mainInput = document.querySelectorAll('.main_input')
                    const area = document.querySelector('.main_area')

                submitMail(mainInput, typeMail, area)
                })
            }
        })
    })   
}

function submitMail(input, change, ...other) {

    if(change == 'Сотрудничество'){
        const mail = {
            TypeMail: change,
            CompanyName: input[0].value,
            TypeOfActivity: input[1].value,
            SiteUrl: input[2].value,
            ContactName: input[3].value,
            ContactFamily: input[4].value,
            ContactEmail: input[5].value,
            Country: other[0].value,
            category: other[1].value,
            subCategory: input[6],
            type: other[2].value,
            promo: input[7].value,
            text: other[3].value
        }
        Mail.create(mail)
    } else if (change == 'Предложение' || change == 'Другое') {
        const mail = {
            TypeMail: change,
            ContactEmail: input[0].value,
            Theme: input[1].value,
            text: other[0].value
        }
        Mail.create(mail)
    } else if (change == 'Техническая пробема') {
        const mail = {
            TypeMail: change,
            ContactEmail: input[0].value,
            Theme: input[1].value,
            ScreenShot: input[2].value,
            text: other[0].value
        }
        Mail.create(mail)
    }
    
}