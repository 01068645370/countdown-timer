let eHour = document.getElementById('eHour');
let eMinute = document.getElementById('eMinute');
let eSecound = document.getElementById('eSecound');
let inputHour = document.getElementById('numHour');
let inputMinute = document.getElementById('numMinute');
let inputSecound = document.getElementById('numSecound');
let startBtn = document.getElementById('s-btn');
let stoptBtn = document.getElementById('sp-btn');
let pausetBtn = document.getElementById('p-btn');
let countdown;
let totalTime;

startBtn.addEventListener('click',function(){
    
    let hours=parseInt(eHour.value);
    let minutes=parseInt(eMinute.value);
    let seconds=parseInt(eSecound.value);
    
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        alert('Please enter valid numbers for hours, minutes, and seconds.');
        return;
    }

    totalTime=hours*3600+minutes*60+seconds;

    countdown = setInterval(() => {

        if (totalTime <= 0) {
            clearInterval(countdown);
            alert('Countdown is finished!');
            return;
        }

        let displayHours=Math.floor(totalTime/3600);
        let displayMinutes=Math.floor((totalTime % 3600)/60);
        let displaySeconds=Math.floor(totalTime % 60);

            document.getElementById('numHour').textContent = displayHours.toString().padStart(2, '0');
            document.getElementById('numMinute').textContent = displayMinutes.toString().padStart(2, '0');
            document.getElementById('numSecound').textContent = displaySeconds.toString().padStart(2, '0');

        totalTime--;
    } , 1000);

});



stoptBtn.addEventListener('click',function(){
    clearInterval(countdown);
});



pausetBtn.addEventListener('click',function(){

    countdown = setInterval(() => {

        if (totalTime <= 0) {
            clearInterval(countdown);
            alert('Countdown is finished!');
            return;
        }

        let displayHours=Math.floor(totalTime/3600);
        let displayMinutes=Math.floor((totalTime % 3600)/60);
        let displaySeconds=Math.floor(totalTime % 60);

            document.getElementById('numHour').textContent = displayHours.toString().padStart(2, '0');
            document.getElementById('numMinute').textContent = displayMinutes.toString().padStart(2, '0');
            document.getElementById('numSecound').textContent = displaySeconds.toString().padStart(2, '0');

        totalTime--;
    } , 1000);
})

