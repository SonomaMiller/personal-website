document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("title");
    const grid = document.getElementById("gallery_wall");
    const paintings = document.querySelectorAll('.art img');
    new Masonry(grid, {
      itemSelector: '.art',
      columnWidth: 200,
      gutter: 10
    });

    paintings.forEach(painting => {
        const fileName = painting.src.substring(painting.src.lastIndexOf('/') + 1);
        const paintingTitle = decodeURIComponent(fileName).replace('.jpg', '');
        function showTitle() {
            title.textContent = paintingTitle;
        }
        painting.addEventListener('mouseover', showTitle);
        painting.addEventListener('click', showTitle);
    });
});