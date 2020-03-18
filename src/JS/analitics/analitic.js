// Plugins and analitic for app Skidwood
import * as Glider from './glider'
import {renderCouponMain} from '../main/renderCoupon.main'
import { Coupon } from '../coupon'
import { validDate } from '../admin/Validation'

// Фильтрация по категориям
const headerNavLink = document.querySelectorAll('.header-nav_link')
const linkAll = document.querySelector('.link_all')


headerNavLink.forEach(elem => {
  elem.addEventListener('click', (e) => {
    e.preventDefault()
    let filter = e.toElement.innerText.trim()
    
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






