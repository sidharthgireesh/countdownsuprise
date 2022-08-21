 const daysEL = document.getElementById('days')
 const hoursEL = document.getElementById('hours')
 const minsEL = document.getElementById('mins')
 const secondsEL = document.getElementById('seconds')
 

 const text1 = document.getElementById('text1')

 const birthday = new Date('10/25/2022');
 let timerId
 
 function countdown() {
    const birthDate = new Date(birthday);
    const currentDate = new Date();

    const totalSeconds = (birthDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24; 
    const mins = Math.floor(totalSeconds / 60) % 60; 
    const seconds = Math.floor(totalSeconds) % 60;

    daysEL.innerHTML = days;
    hoursEL.innerHTML = formatTime(hours);
    minsEL.innerHTML = formatTime(mins);
    secondsEL.innerHTML = formatTime(seconds);

   




    if (totalSeconds <= -days){
        text1.innerHTML = "Happy Birthday Apputy <br> <br> <br> Thank you for been in my life!"
        clearInterval(timerId)
        return
    }


    if (totalSeconds <= -days){

        text1.innerHTML = "Happy Birthday Apputy!!!"
        clearInterval(timerId)
        return
    }
 }

 function formatTime(time){
    return time < 10 ? `0${time}` : time;
 }

 function showDiv(){
    document.getElementById("text1").style.visibility="visible";
 }
 setTimeout("showDiv()", 60000)




 //call function
setInterval(countdown, 1000);

countdown();
 