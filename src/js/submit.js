

/*
    Получить кнопку
    Добавить обработчик события клик
    открыть модальное окно
    сохранить состояние
*/
let submitBtnState = false; // окно Оствить заявку закрыто по умолчанию

const submitBtn = document.getElementsByClassName('submit-btn');
const submitBtnsBlock = document.getElementsByClassName('submit-block-btns');

console.log('submitBtnsBlock', submitBtnsBlock);
submitBtnsBlock[0].addEventListener('click', (event) => {
    console.log('event', event.target);
    if(event?.target?.classList.contains('submit-btn')) {
        //Открыть окно Заполнить заявку
    }

    if(event?.target?.classList.contains('check-repair-status-btn')) {
        //Открыть окно Проверить статус
    }
});

