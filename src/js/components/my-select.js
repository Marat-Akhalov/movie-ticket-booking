const elements = {
  selectForm: document.querySelector('#select-movie'),
  selectList: document.querySelector('#select-list'),
  select: document.querySelector('#select-open'),
};

let isSelectOpen = false;

const onClickOutside = (el, callback) => {
  document.addEventListener('click', e => {
    if (!el.contains(e.target)) callback();
  });
};

const toggleSelectList = () => {
  elements.selectList.classList.toggle('select-movie__list--active');
  isSelectOpen = !isSelectOpen;
  elements.select.setAttribute('aria-expanded', `${isSelectOpen}`);
};

const closeSelectList = () => {
  elements.selectList.classList.remove('select-movie__list--active');
  isSelectOpen = !isSelectOpen;
  elements.select.setAttribute('aria-expanded', `${isSelectOpen}`);
};

const handleOptionClick = e => {
  const option = e.target.closest('.select-movie__option');

  if (!option) return;

  elements.select.textContent = option.textContent;
  closeSelectList();
};

elements.selectList.addEventListener('click', handleOptionClick);
elements.select.addEventListener('click', toggleSelectList);
