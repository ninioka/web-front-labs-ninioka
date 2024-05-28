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
    const weekDay = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

    date.innerHTML = `Текущий день: ${today.getDate()}<br>
                    Текущий месяц: ${month[today.getMonth()]}<br>
                    Текущий год: ${today.getFullYear()}<br>
                    Текущий день недели: ${weekDay[today.getDay()]}`;
}