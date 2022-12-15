document.addEventListener('DOMContentLoaded', () => {
  startWindowResize();
  window.addEventListener('resize', startWindowResize);
});


function startWindowResize() {
  console.log('test');
  let windowWidth = document.documentElement.clientWidth;
  if (windowWidth < 992) {
    const slider = ItcSlider.getOrCreateInstance('.itc-slider');
  }
}