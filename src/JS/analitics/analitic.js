// Plugins and analitic for app Skidwood
import * as Glider from './glider'

new Glider(document.querySelector('.glider_fire'), {
    slidesToScroll: 1,
    slidesToShow: 5,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
});






