document.addEventListener('DOMContentLoaded', () => {
  startWindowResize();
  window.addEventListener('resize', startWindowResize);
});


function startWindowResize() {
  let windowWidth = document.documentElement.clientWidth;
  if (windowWidth < 992) {
    const slider = ItcSlider.getOrCreateInstance('.itc-slider');
  }
}