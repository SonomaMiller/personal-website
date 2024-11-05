document.addEventListener("DOMContentLoaded", function () {
    id("title").textContent = "";
    const grid = document.querySelector('#gallery-wall');
    const paintings = document.querySelectorAll('.art img');
    const masonry = new Masonry(grid, {
      itemSelector: '.art',
      columnWidth: 200,
      gutter: 10
    });

    paintings.forEach(painting => {
        painting.addEventListener('mouseover', function() {
            let src = painting.src;
            let fileName = src.substring(src.lastIndexOf('/') + 1);
            fileName = decodeURIComponent(fileName).replace('.jpg', '');
            id("title").textContent = fileName;
        });
    });


    paintings.forEach(painting => {
        painting.addEventListener('click', function() {
            let src = painting.src;
            let fileName = src.substring(src.lastIndexOf('/') + 1);
            fileName = decodeURIComponent(fileName).replace('.jpg', '');
            id("title").textContent = fileName;
        });
    });

    function id(id) {
        return document.getElementById(id);
    }
});