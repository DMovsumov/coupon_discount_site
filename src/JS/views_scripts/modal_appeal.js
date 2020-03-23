export function renderModalAppeal(section) {
    section.insertAdjacentHTML('afterbegin', ` <div class="main_modal-appeal">
    <form action="" class="main_form">
        <label for="" class="main_label">Тема обращения:
            <nav class="table_change">
                <button class="change_item_link active" value="Сотрудничество">Сотрудничество</button>
                <button class="change_item_link" value="Предложение">Предложение</button>
                <button class="change_item_link" value="Техническая пробема">Техническая пробема</button>
                <button class="change_item_link" value="Другое">Другое</button>
            </nav>
        </label>
        <label for="" class="main_label">О компании:
            <input type="text" class="main_input" placeholder="Название компании">
            <input type="text" class="main_input" placeholder="Вид деятельности">
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
        <input type="text" class="main_input" placeholder="Введите промокод">
    </label>
    <label for="" class="main_label">Напишите нам всю информацию о вашем предложении:
        <textarea name="" id="" cols="30" rows="10" class="main_area"></textarea>
    </label>
    <button type="submit" class="main_button">Отправить запрос</button>
</form>
</div>`)
    
    const tableChange = document.querySelector('.table_change')


    changeFunc(tableChange)
}

const changeFunc = (btn) => {
    const changeBtn = btn.querySelectorAll('.change_item_link')

    changeBtn.forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault()
            
            switch(e.target.value){
                case 'Сотрудничество':
                    console.log('Сотрудничество');
                break
                case 'Предложение':
                    console.log('Предложение');
                break
                case 'Техническая пробема':
                    console.log('Тех проблем');
                break
                case 'Другое':
                    console.log('Другое');
                break
            }
        })
        
    })   
}