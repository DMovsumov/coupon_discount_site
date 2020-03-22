// Plugins and analitic for app Skidwood
import * as Glider from './glider'
import {renderCouponMain} from '../main/renderCoupon.main'
import { Coupon } from '../coupon'
import { validDate } from '../admin/Validation'
import { renderListSlider } from '../main/renderSlider'

// Фильтрация по категориям
const headerNavLink = document.querySelectorAll('.header-nav_link')
const linkAll = document.querySelector('.link_all')
const country = document.querySelector('.header_country')
const searchCoupons = document.getElementById('search_coupons')

country.addEventListener('change', (e) => {
  const allItems = document.querySelectorAll('.card_item')
  const filter = e.target.value
  
  
  allItems.forEach(elem => {
    if(elem.getAttribute('country') != filter){
      elem.style.display = 'none'
    } else {
      elem.style.display = 'flex'
    }
  })
})

headerNavLink.forEach(elem => {
  elem.addEventListener('click', (e) => {
    e.preventDefault()
    let filter = e.target.innerText.trim()
    
    const allItems = document.querySelectorAll('.card_item')

    allItems.forEach(elem => {
        if(elem.getAttribute('category') != filter){
          elem.style.display = 'none'
        } else {
          elem.style.display = 'flex'
        }
    })
  })
})

linkAll.addEventListener('click', (e) =>{
  e.preventDefault()
  const allItems = document.querySelectorAll('.card_item')

  allItems.forEach(elem => {
    if(elem.style.display = 'none') {
      elem.style.display = 'flex'
    }
  })
})

searchCoupons.oninput = function() {
  let value = this.value.trim()
  const allItems = document.querySelectorAll('.card_item')
  
  if( value != '') {
    allItems.forEach(elem => {
      const searchItems = elem.querySelectorAll('.card_search_items')
      console.log(searchItems);
      
      searchItems.forEach(element => {
        if(element.innerText.search(value) == -1){
          elem.style.display = 'none'
        } else {
          elem.style.display = 'flex'
        }
      })
    })
  } else {
    allItems.forEach(elem => {
      elem.style.display = 'flex'
    })
  }
}

// function sortSearch(element, hide, value) {
//   element.forEach(e => {
//     if(e.innerText.search(value) == -1){
//       hide.style.display = 'none'
//     } else {
//       hide.style.display = 'flex'
//     }
//   })
// }

export function gliderFunc() {
  new Glider(document.querySelector('.glider_fire'), {
    slidesToScroll: 1,
    slidesToShow: 5,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }, responsive: [
      {
        // screens greater than >= 1200px
        breakpoint: 1201,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      },{
        // screens greater than >= 992px
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      },{
        // screens greater than >= 768px
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      },{
        // screens greater than >= 768px
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
});
}







