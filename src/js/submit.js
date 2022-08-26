

/*
    Получить кнопку
    Добавить обработчик события клик
    открыть модальное окно
    сохранить состояние
*/
let submitWindowOpenState = false; // окно Оствить заявку закрыто по умолчанию

const submitBtn = document.querySelector('.submit-btn');
const submitBtnsBlock = document.querySelector('.submit-block-btns');

const modalWindowSudmit = document.querySelector('.modal-window--submit');
const modalWindow = document.querySelector('.modal-window');

const modalBackground = document.querySelector('.modal');

submitBtnsBlock.addEventListener('click', (event) => {
    if(event?.target?.classList.contains('submit-btn')) {
        //Отобразить окно "Заполнить заявку"
        //Отобразить модальное окно

        if(!submitWindowOpenState ) {
            modalWindowSudmit.classList.add('modal-window--active');
            modalWindowSudmit.classList.remove('modal-window--inactive');
            modalBackground.classList.add('modal-active');
        } else {
            modalWindowSudmit.classList.add('modal-window--inactive');
            modalWindowSudmit.classList.remove('modal-window--active');
            modalBackground.classList.remove('modal-active');
        }

        submitWindowOpenState = !submitWindowOpenState;
    }

    if(event?.target?.classList.contains('check-repair-status-btn')) {
        //Отобразить окно "Проверить статус"
        //Отобразить модальное окно
       
    }
});

modalWindow.addEventListener('click', (event) => {
    if(event?.target?.classList.contains('model-window__close-btn')) {
        modalWindow.classList.remove('modal-window--active');
        modalWindow.classList.add('modal-window--inactive');
        modalBackground.classList.remove('modal-active');
    }
});
