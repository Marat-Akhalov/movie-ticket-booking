const seatsContainer = document.querySelector('.hall__seats-place');

console.log(seatsContainer);
seatsContainer.addEventListener('click', e => {
  const target = e.target.closest('.hall__seat:not(.hall__seat--occupied)');

  if (!target) return;

  target.classList.toggle('hall__seat--selected');
});
