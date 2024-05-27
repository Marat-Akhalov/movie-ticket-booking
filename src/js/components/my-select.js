const selectForm = document.querySelector('#select-movie');
const select = document.querySelector('#select-open');
const selectList = document.querySelector('#select-list');

select.addEventListener('click', e => {
  selectList.classList.toggle('select-movie__list--active');
});
