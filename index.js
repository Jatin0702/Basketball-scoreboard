let Home = 0
let Away = 0

let HomeScore = document.getElementById("Home-score")
let AwayScore = document.getElementById("Away-score")


function addPoints1Home(){
    Home += 1
    HomeScore.textContent = Home
}

function addPoints2Home(){
    Home += 2
    HomeScore.textContent = Home
}

function addPoints3Home(){
    Home += 3
    HomeScore.textContent = Home
}

function addPoints1Away(){
    Away += 1
    AwayScore.textContent = Away
}

function addPoints2Away(){
    Away += 2
    AwayScore.textContent = Away
}

function addPoints3Away(){
    Away += 3
    AwayScore.textContent = Away
}