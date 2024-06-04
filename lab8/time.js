function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;

    const second = today.getSeconds();
    const secondDisplay = document.getElementById('second');
    const stick = document.getElementById('stick');

   
    secondDisplay.innerHTML = second.toString();
   
    const secondDeg = ((second / 60) * 360) + 90; 
    stick.style.transform = `rotate(${secondDeg}deg)`;
}
setInterval(showTime, 1000);
