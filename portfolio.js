document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("web").addEventListener("click", () => {
    const spider = document.getElementById("spider");

    // Set the GIF to visible and reset its opacity
    spider.style.display = "block";
    spider.style.opacity = 0;

    // Fade in
    let fadeIn = setInterval(() => {
      if (spider.style.opacity < 1) {
        spider.style.opacity = parseFloat(spider.style.opacity) + 0.1;
      } else {
        clearInterval(fadeIn);

        // Wait for the GIF to play once, then fade out
        const gifDuration = 2900;
        setTimeout(() => {
          let fadeOut = setInterval(() => {
            if (spider.style.opacity > 0) {
              spider.style.opacity = parseFloat(spider.style.opacity) - 0.1;
            } else {
              clearInterval(fadeOut);
              spider.style.display = "none";
            }
          }, 50);
        }, gifDuration);
      }
    }, 50);
  });
});