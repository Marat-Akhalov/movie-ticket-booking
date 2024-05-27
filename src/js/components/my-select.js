const selectForm = document.querySelector('#select-movie');
const select = document.querySelector('#select-open');
const selectList = document.querySelector('#select-list');

const toggleSelect = () => {
  selectList.classList.toggle('select-movie__list--active');
};

select.addEventListener('click', e => {
  toggleSelect();
});
