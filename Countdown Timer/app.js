// value of user input field
// var user = document.getElementById('user');
// value of h1
// var setTime = document.getElementById('set')


function start() {
    var userInput = user.value;
    if (userInput != 0) {
        v = setInterval(function() {
            userInput--;
            second.innerHTML = userInput % 60;
            minute.innerHTML = parseInt(userInput / 60);
            minute.style.color = "white";
            second.style.color = "white";
        }, 1000)
    }
}

function stop() {
    // userInput = 
    clearInterval(v)

}

// stopwatch