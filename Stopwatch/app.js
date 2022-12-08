var min = 0;
var sec = 0;
var milisec = 0;
var Displaymin = document.getElementById('min');
var Displaysec = document.getElementById('sec');
var Displaymilisec = document.getElementById('milisec');
var interval;

function timer() {
    milisec++;
    Displaymilisec.innerHTML = milisec;

    if (milisec == 10) {
        sec++;
        milisec = 0;
        if (sec == 60) {
            min++;
            sec = 0;
        }
    }


    Displaymilisec.innerHTML = milisec;
    Displaysec.innerHTML = sec;
    Displaymin.innerHTML = min;



}


function starttimer() {
    interval = setInterval(function() {

        timer();


    }, 100)

}

function pausetimer() {
    clearInterval(interval)
}

function resettimer() {
    pausetimer()
    min = 0;
    sec = 0;
    milisec = 0;
    Displaymin.innerHTML = min;
    Displaysec.innerHTML = sec;
    Displaymilisec.innerHTML = milisec;
}