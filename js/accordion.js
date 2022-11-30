const lists = document.querySelectorAll('.feature-sub');
const btns = document.querySelectorAll('.feature__link');


btns.forEach((btnItem, index) => {
  btnItem.addEventListener('click', () => {
    btns.forEach((btnItem) => {
      btnItem.classList.remove('feature__link_active');
    });

    btnItem.classList.add('feature__link_active');

    lists.forEach((listsItem) => {
      listsItem.classList.add('hidden');
    });

    lists[index].classList.remove('hidden');

    // Закрываем при клике активный элемент
    btns.forEach((btnItem, index) => {
      btnItem.addEventListener('click', () => {
        btnItem.classList.toggle('feature__link_active');
        lists[index].classList.toggle('hidden');
      });
    });
  });
});






// console.log(btn);