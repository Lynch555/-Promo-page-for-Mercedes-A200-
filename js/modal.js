const modalBtn = document.querySelector('.more');
const modal = document.querySelector('.modal');

modalBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

// Способ закрытия окна лучше чем получение и закрытие окна на крестик и оверлэй.Мы повесим оброботчик события 'click'
// на само модальное окно на класс 'modal'.

// event.target - цель на которую мы произведем клик. Таким образом мы можем отследить класс того самого 'event.target' и если этот класс будет соответствовать тому что мы хотим мы будем закрывать модальное окно. А хотим мы закрывать модальное окно по элементам 'modalClose' и 'overlay'.
modal.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
    modal.classList.add('hidden');
  }
});