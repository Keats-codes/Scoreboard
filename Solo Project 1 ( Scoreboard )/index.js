let homePoints = document.getElementById("homePointsText")
let guestPoints = document.getElementById("guestPointsText")
let homeScore = 0
let guestScore = 0
let reset = 0

function onePointH(){ 
    homeScore += 1
    homePointsText.textContent = homeScore
}

function twoPointsH(){ 
    homeScore += 2
    homePointsText.textContent = homeScore
}

function threePointsH(){ 
    homeScore += 3
    homePointsText.textContent = homeScore
}

function onePointG(){ 
    guestScore += 1
    guestPointsText.textContent = guestScore
}

function twoPointsG(){ 
    guestScore += 2
    guestPointsText.textContent = guestScore
}

function threePointsG(){ 
    guestScore += 3
    guestPointsText.textContent = guestScore
}

function resetScore(){
    homePointsText.textContent = homeScore=0
    guestPointsText.textContent = guestScore=0
}