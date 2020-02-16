const selectType = document.getElementById('select_type')
const promocode = document.getElementById('promocode')

selectType.addEventListener('change', (e) => {
    e.preventDefault()

    if(selectType.value == 'Купон'){
        promocode.disabled = false
        promocode.classList.add('promocode_isActive')
    } else {
        promocode.disabled = true
        promocode.classList.remove('promocode_isActive')
    }
    
})