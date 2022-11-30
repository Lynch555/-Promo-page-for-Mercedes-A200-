const linksHead = document.querySelectorAll('.menu-list__link');
const mainScroll = document.querySelector('.main__scroll');
const newArray = [...linksHead, mainScroll]; // Для практики мы не сразу обединили 'linksHead'
// и 'mainScroll ', теперь мы используем спред оператор 'newArray'.СПРЕД ОПЕРАТОР - обьеденит все элементы 'linksHead' и добавит к ним 'mainScroll '. Таким образом мы добавили новый массив который их обьединит.

newArray.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const ID = e.target.getAttribute('href').substr(1);
    // Плавный скролл стандартный JS
    // document.getElementById(ID).scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start'
    // });


    // Кроссбраузерный скрипт скрола.Который мы взяли из библиотеки
    seamless.scrollIntoView(document.getElementById(ID), {
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  });
});