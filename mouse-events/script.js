const target = document.getElementById('mouseTarget');
const list = document.getElementById('unorderedList');
let enterCount = 0;
let leaveCount = 0;
const leaveText = `This is mouseleave event`;

target.addEventListener('mouseenter', e => {
  enterCount++;
  list.appendChild(document.createElement('li'));
  // list.appendChild(`<li>This is mouseenter event ${enterCount}</li>`);
  console.log(`Enter Count: ${enterCount}`);
});

target.addEventListener('mouseleave', e => {
  leaveCount++;
  console.log(`Leave Count: ${leaveCount}`);
});
