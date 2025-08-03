// top product btn scrollers

function scrollHorizontally(containerSelector, direction) {
  const container = document.querySelector(containerSelector);
  const scrollAmount = 300;

  if (container) {
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }
}