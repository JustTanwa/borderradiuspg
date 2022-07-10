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
const [hLeft, hRight, hrBottom, hlBottom, vLeft, vRight, vrBottom, vlBottom] =
  values;

const blob = document.querySelector('.blob');

const css = document.querySelector('.css-code>span');

css.textContent = `${hLeft.textContent}px ${hRight.textContent}px ${hrBottom.textContent}px ${hlBottom.textContent}px / ${vLeft.textContent}px ${vRight.textContent}px ${vrBottom.textContent}px ${vlBottom.textContent}px`;

const sliders = document.querySelectorAll('input[type=range]');

function update() {
  blob.style.borderRadius = `${hLeft.textContent}px ${hRight.textContent}px ${hrBottom.textContent}px ${hlBottom.textContent}px / ${vLeft.textContent}px ${vRight.textContent}px ${vrBottom.textContent}px ${vlBottom.textContent}px`;
  css.textContent = `${hLeft.textContent}px ${hRight.textContent}px ${hrBottom.textContent}px ${hlBottom.textContent}px / ${vLeft.textContent}px ${vRight.textContent}px ${vrBottom.textContent}px ${vlBottom.textContent}px`;
}
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

  update();
});

const copy = document.querySelector('.css-code');
const copied_tp = document.querySelector('.copied_tp');
copy.onclick = (e) => {
  const x = e.clientX;
  const y = e.clientY;
  copied_tp.style.top = y;
  copied_tp.style.left = x;
  copied_tp.style.display = 'block';
  setTimeout(() => {
    copied_tp.style.display = 'none';
  }, 1000);
  navigator.clipboard.writeText(copy.textContent);
};

const reset = document.getElementById('reset_btn');
reset.onclick = () => {
  sliders.forEach((slider) => (slider.value = 0));
  hLeft.textContent = 0;
  hRight.textContent = 0;
  hrBottom.textContent = 0;
  hlBottom.textContent = 0;
  vLeft.textContent = 0;
  vRight.textContent = 0;
  vrBottom.textContent = 0;
  vlBottom.textContent = 0;

  update();
};
