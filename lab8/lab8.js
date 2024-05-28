function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = `Дата и время для русской локали: ${today.toLocaleString('ru-RU')}<br>
                    Дата и время для греческой локали: ${today.toLocaleString('el-GR')}<br>
                    Дата и время для американской локали: ${today.toLocaleString('en-US')}<br>
                    Дата и время для египетской локали: ${today.toLocaleString('ar-EG')}<br>                    
                    Дата и время для индийской локали: ${today.toLocaleString('mr-IN')}<br>                                 
                    Дата и время для корейской локали: ${today.toLocaleString('ko-KR')}<br>         
                    Дата и время для малазийской локали: ${today.toLocaleString('ms-MY')}<br>`;
                    
    let date = document.getElementById('date');
    const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const weekDay = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    date.innerHTML = `Текущий день: ${today.getDate()}<br>
                    Текущий месяц: ${month[today.getMonth()]}<br>
                    Текущий год: ${today.getFullYear()}<br>
                    Текущий день недели: ${weekDay[today.getDay()]}`;
}

function getWeekDay() {
    const weekDay = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value - 1;
    let year = document.getElementById('year').value;

    let date = new Date(year, month, day);   
    let getDay = date.getDay();

    let dayOFWeek = document.getElementById('getWeekDay');
    dayOFWeek.textContent = `День недели: ${weekDay[getDay]}`;

    if (day < 1 || day > 31 || isNaN(day)) {
        dayOFWeek.innerText = "Ошибка! Убедитесь, что поле заполнено корректно.";        
    }
    else if (month < 0 || month > 12 || isNaN(month)) {
        dayOFWeek.innerText = "Ошибка! Убедитесь, что поле заполнено корректно.";
    }
    else if (year < 1699 || isNaN(year)) {
        dayOFWeek.innerText = "Ошибка! Убедитесь, что поле заполнено корректно.";        
    }  
}