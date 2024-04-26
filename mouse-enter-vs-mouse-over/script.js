const leftBox = document.querySelector('.left');
const leftP = document.querySelector('.left p');
const rightBox = document.querySelector('.right');
const rightP = document.querySelector('.right p');

leftBox.addEventListener('mouseenter', enterLeft);
leftBox.addEventListener('mouseleave', leaveLeft);
leftP.addEventListener('mouseenter', enterP);
leftP.addEventListener('mouseleave', leaveP);

rightBox.addEventListener('mouseover', overRight);
rightBox.addEventListener('mouseout', outRight);
rightP.addEventListener('mouseover', overP);
rightP.addEventListener('mouseout', outP);

function enterP(e) {
  e.currentTarget.style.border = '4px solid orange';
  console.log('mouseenter p');
}
function leaveP(e) {
  e.currentTarget.style.border = '4px solid black';
  console.log('mouseleave p');
}
function overP(e) {
  e.currentTarget.style.border = '4px solid orange';
  console.log('mouseover p');
}
function outP(e) {
  e.currentTarget.style.border = '4px solid black';
  console.log('mouseout p');
}

function enterLeft(e) {
  e.currentTarget.classList.add('ablue');
  console.log('mouseenter left box add blue');
}
function leaveLeft(e) {
  e.currentTarget.classList.remove('ablue');
  console.log('mouseleave left box remove blue');
}
function overRight(e) {
  e.currentTarget.classList.add('ayellow');
  console.log('mouseover right box add yellow');
}
function outRight(e) {
  e.currentTarget.classList.remove('ayellow');
  console.log('mouseout right box remove yellow');
}
