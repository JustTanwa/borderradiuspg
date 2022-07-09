const points = {
  h1: 'h1_slider',
  h2: 'h2_slider',
  h3: 'h3_slider',
  h4: 'h4_slider',
  v1: 'v1_slider',
  v2: 'v2_slider',
  v3: 'v3_slider',
  v4: 'v4_slider',
};
const values = document.querySelectorAll('.value>span');
const [hLeft, hRight, hlBottom, hrBottom, vLeft, vRight, vlBottom, vrBottom] =
  values;
const sliders = document.querySelectorAll('input[type=range]');

const container = document.querySelector('.container');
container.addEventListener('input', (e) => {
  switch (e.target.id) {
    case points.h1:
      hLeft.textContent = e.target.value;
      break;
    case points.h2:
      hRight.textContent = e.target.value;
      break;
    case points.h3:
      hrBottom.textContent = e.target.value;
      break;
    case points.h4:
      hlBottom.textContent = e.target.value;
      break;
    case points.v1:
      vLeft.textContent = e.target.value;
      break;
    case points.v2:
      vRight.textContent = e.target.value;
      break;
    case points.v3:
      vrBottom.textContent = e.target.value;
      break;
    case points.v4:
      vlBottom.textContent = e.target.value;
      break;
    default:
      break;
  }
});
