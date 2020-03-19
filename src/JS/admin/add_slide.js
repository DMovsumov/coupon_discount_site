import { isValid } from "./Validation"
import { Slider } from "../slider"

const formSlide = document.getElementById('add_slide-form')
const inputSlide = formSlide.querySelectorAll('.input_slide')
const slideBtn = formSlide.querySelector('#submit_slide')

const deleteSlide = document.getElementById('delete_slide')

slideBtn.disabled = false

formSlide.addEventListener('submit', addSlideToDb)

export function addSlideToDb(e){    
    e.preventDefault()
    
    const iteration = (inputSlide) => {        
        for(let iter of inputSlide){
            return iter.value            
        }
    }

    if(isValid(iteration(inputSlide))){
        const slide = {
            shop: inputSlide[0].value,
            desc: inputSlide[1].value,
            img: inputSlide[2].value,
            url: inputSlide[3].value,
            date: inputSlide[4].value,
        }

        slideBtn.disabled = true
        Slider.createSlide(slide).then(() => {
            for(let iter of inputSlide){
                iter.value = ''            
            }
            slideBtn.disabled = false
        })
        
    }
    
}

deleteSlides()
export function deleteSlides() {
    Slider.loadSlide()
    .then(renderListSlides)
}

function renderListSlides(data) {
    const keyDelete = Object.keys(data)
    const objData = keyDelete.reduce((j, k) => {
        j[k] = k
        return j
    }, {})

    for(let i in data){
        deleteSlide.insertAdjacentHTML('beforeend', `<tr class="slide_table"  data-id="${objData[i]}">
        <th><a class="delete_line">&times;</a></th>
        <th>${data[i].shop}</th>
        <th class="desc_slide_table">${data[i].desc}</th>
        <th><a href="${data[i].img}">Перейти</a></th>
        <th><a href="${data[i].url}">Перейти</a></th>
        <th>${data[i].date}</th>
    </tr>`)

        const deleteLine = document.querySelectorAll('.delete_line')

        deleteLine.forEach(i => i.addEventListener('click', (e) => {
            let id = e.target.parentElement.parentElement.getAttribute('data-id')
            delete data[id]
            Slider.updateSlide(data)
            e.target.parentElement.parentElement.remove()
        }))
    }
}
