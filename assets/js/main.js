function divDate(){return document.querySelector('#date')};
function divClock(){return document.querySelector('#clock')};
function getDate() {
    const weekDay = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const monthName = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const time = new Date();
    const week = time.getDay();
    const month = time.getMonth();
    const year = time.getFullYear();
    let day = time.getDate();
    if (day < 10) day = "0" + day;
    return `${weekDay[week]}, ${day} de ${monthName[month]} de ${year}`;
};
function getHour() {
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    return `${hours}:${minutes}:${seconds}`;  
};
setInterval(() => {
    divDate().innerHTML = getDate();
    divClock().innerHTML = getHour();
}, 1000);
