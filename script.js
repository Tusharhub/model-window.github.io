'use stict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closemodalbtn = document.querySelector('.close-modal');
const openmodalbtn = document.querySelectorAll('.show-modal');

const openmodal = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closemodal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < openmodalbtn.length; i++)
  openmodalbtn[i].addEventListener('click', openmodal);

closemodalbtn.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);

document.addEventListener('keydown', function (e) {
  if (!modal.classList.contains('hidden'));
  console.log(e.key);
  if (e.key === 'Escape') {
    closemodal();
  }
});
