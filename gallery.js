import Masonry from 'masonry-layout';

const grid = document.querySelector('.gallery-wall');
const masonry = new Masonry(grid, {
  itemSelector: '.art',
  columnWidth: 200,
  gutter: 10
});