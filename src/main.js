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

  blob.style.borderRadius = `${hLeft.textContent}px ${hRight.textContent}px ${hrBottom.textContent}px ${hlBottom.textContent}px / ${vLeft.textContent}px ${vRight.textContent}px ${vrBottom.textContent}px ${vlBottom.textContent}px`;
  css.textContent = `${hLeft.textContent}px ${hRight.textContent}px ${hrBottom.textContent}px ${hlBottom.textContent}px / ${vLeft.textContent}px ${vRight.textContent}px ${vrBottom.textContent}px ${vlBottom.textContent}px`;
});

const copy = document.querySelector(".css-code");
copy.onclick = () => {
  navigator.clipboard.writeText(copy.textContent);
}

