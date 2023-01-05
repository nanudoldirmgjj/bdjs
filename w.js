/*
Задание 1

Реализовать переключение блоков с помощью табов.

Пример результата:

https://ucarecdn.com/fb2606ba-...



ПОРЯДОК РАБОТЫ

1. Подготовить верстку. 


2. Создаем переменные и собираем в коллекции все кнопки и все блоки с контентом.

3. Перебираем все кнопки и вешаем на них обработчик клика. При клике запускается функция openTab, в нее передаем 2 параметра - event и id блока (id блока = дополненный id кнопки, по которой пришелся клик).

4. Описываем функцию openTab, которая показывает блок. Она принимает два параметра - event и id (событие - нужно для определения кнопки, по которой пришелся клик, и id - нужно для определения нужного блока). Внутри этой функции:
- перебираем все кнопки и убираем у них класс active (используем forEach и стрелочный синтаксис)
- перебираем все блоки и скрываем их (используем forEach и стрелочный синтаксис)

- определяем кнопку, по которой кликнули (event.target) и добавляем ей класс active
- находим по id блок, связанный с активной кнопкой, и показываем его. 
*/

const buts = document.querySelectorAll('button');
const tabs = document.querySelectorAll('div');

function openTab(event, id) {
    buts.forEach(Element => {
        Element.classList.remove('active');
        if (Element == event.target) {
            Element.classList.add('active');
        }
    })
    tabs.forEach(Element => {
        Element.classList.remove('active');

    })
    for (let i = 0; i < 3; i++) {
        if (tabs[i].id == id + 'c') {
            tabs[i].classList.add('active');
        }
    }
}

buts.forEach(item => {
    item.addEventListener('click', (event) => {
        for (let i = 0; i < 3; i++) {
            if (event.target == buts[i]) {
                openTab(event, buts[i].id);
            }
        }
    })
})


/*
Задание 2

Сверстать любую простую страничку и реализовать смену темы.

В шапке делаем кнопку «Тёмная тема», при нажатии этой кнопки странице (тегу body) присваивается доп. класс (напр. dark-theme) и начинают работать стили тёмной темы. Сама кнопка меняется на «Светлая тема», при нажатии которой доп. класс с body удаляется.
*/

const dark = document.getElementById('dark');
const body = document.querySelector('body');

dark.addEventListener('click', () => {
    if (!dark.classList.contains('act')) {
        dark.classList.add('act');
        body.classList.add('fullBlack');
    }
    else {
        dark.classList.remove('act');
        body.classList.remove('fullBlack');
    }
})


/*
Задание 3

3.1. Цифровые часы

Создать виджет-часы, как в примере ЗДЕСЬ.

Вам понадобится каждую секунду (через setInterval) запускать функцию, которая будет забирать время из объекта Date и выводить в разметку. Цвета и т.п. прописать в CSS.
*/
let watch = setInterval(() => {
    let now = new Date().toLocaleTimeString();
    let clock = document.getElementById("clock");
   clock.innerHTML = now;
}, 1000);