let home = 0
let guest = 0

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")


function addPoints1Home(){
    home += 1
    homeScore.textContent = home
}

function addPoints2Home(){
    home += 2
    homeScore.textContent = home
}

function addPoints3Home(){
    home += 3
    homeScore.textContent = home
}

function addPoints1Guest(){
    guest += 1
    guestScore.textContent = guest
}

function addPoints2Guest(){
    guest += 2
    guestScore.textContent = guest
}

function addPoints3Guest(){
    guest += 3
    guestScore.textContent = guest
}