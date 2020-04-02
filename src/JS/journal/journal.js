import '../../style/scss_style/style.scss'
import '../../style/views/journal.scss'
import Masonry from 'masonry-layout'

const arcticles = document.querySelector('.main')

let mnsry = new Masonry(arcticles, {
    itemSelector: '.main_item_arcticle',
    columnWidth: '.main_item_arcticle',
    gutter: 20
})