const awesome = document.querySelector('[data-element="awesome"]');
const intrinsicSwitch = document.querySelector('#intrinsic-switch');
const paragraph = document.querySelector('pre');

const text = `
        <pre>
          This is a pre formatted

          sentence and will be 

          seen just the way it was typed

          I CAN DO IT!!!!

          yES i can~ ! ! - ==+
        </pre>
`;

// Set sizing attribute based on switch
intrinsicSwitch.addEventListener('change', () => {
  awesome.setAttribute(
    'data-sizing',
    intrinsicSwitch.checked ? 'intrinsic' : 'extrinsic'
  );
});

paragraph.addEventListener('mouseenter', e => {
  // console.log(e.target.innerHTML);
  let temp = e.target.innerHTML;
  let rep = `
  <pre><bdo dir="rtl">
  ${temp}
  </bdo></pre>
  `;
  // console.log(rep);
  paragraph.innerHTML = rep;
});

paragraph.addEventListener('mouseleave ', e => {
  paragraph.innerHTML = text;
});
