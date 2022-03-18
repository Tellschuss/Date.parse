let deadline = '2020-12-30';

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),// С помощью Dare.parse получаем миллисекунды
        seconds = Math.floor((t / 1000) % 60),//Получаем секунды, с помощью остатка от деления
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t/1000/60/60) % 60),
        days = Math.floor((t/(1000*60*60*24)));
    return { //Возвращаем объект с миллисекундами, часами, минутами, секундами
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
        'days': days
    };
}

function setClock(id, endtime) { // Функция установки таймера, куда в качестве аргументов передается id блока с таймером и конечное время таймера
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        days = timer.querySelector('.days'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() { // функция для обновления таймера через каждую секунду
        let t = getTimeRemaining(endtime);
        days.textContent = t.days + ' D';
        hours.textContent = t.hours + ' H'; // присваеваем текстовый контент блокам, полученный из объекта
        minutes.textContent = t.minutes + ' M';
        seconds.textContent = t.seconds + ' S';
        if (t.seconds < 10) {
            seconds.textContent = '0' + t.seconds + ' S';
        }
        if (t.minutes < 10) {
            minutes.textContent = '0' + t.minutes + ' M';
        }
        if (t.hours < 10) {
            hours.textContent = '0' + t.hours + ' H';
        }
        if (t.days < 10) {
            days.textContent = '0' + t.days + ' D';
        }

        if(t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock('timer', deadline);
