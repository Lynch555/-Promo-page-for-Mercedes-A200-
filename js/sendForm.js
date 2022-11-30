const form = document.querySelector('.form-test-drive');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let data = {};

  // Используем метод деструкткризация.Мы сразу при формировании переменной 'elem'
  // достанем нужные нам данные, свойства (name,
  //   value).
  for (let {
      name,
      value
    } of form.elements) {

    // а здесь обратимся не к 'elem' а к 'name и
    // value'

    if (name) {
      data[name] = value;
    }

  }

  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.status === 200 || response.status === 201) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    }).then(data => {
      alert('Данные успешно сохранены!'); // Окно благодарнрсти, модальное окно
      form.reset(); // Очищаем форму
    }).catch(error => {
      alert("Произошла ошибка, статус " + error.message);
    });
});