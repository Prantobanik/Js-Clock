setInterval(() => {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var hoursRotating = hours * 30 + minutes / 2;
    var minutesRotating = minutes * 6;
    var secondsRotating = seconds * 6; 
    document.querySelector("#hour-hand").style.transform= `rotate(${hoursRotating}deg)`;
    document.querySelector("#minute-hand").style.transform= `rotate(${minutesRotating}deg)`;
    document.querySelector("#second-hand").style.transform= `rotate(${secondsRotating}deg)`;
}, 1000);