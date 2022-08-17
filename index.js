let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

const home1Point = () => {
    let currentScore = Number(homeScore.textContent)
    homeScore.textContent = currentScore + 1
}

const home2Point = () => {
    let currentScore = Number(homeScore.textContent)
    homeScore.textContent = currentScore + 2
}

const home3Point = () => {
    let currentScore = Number(homeScore.textContent)
    homeScore.textContent = currentScore + 3
}

const guest1Point = () => {
    let currentScore = Number(guestScore.textContent)
    guestScore.textContent = currentScore + 1
}

const guest2Point = () => {
    let currentScore = Number(guestScore.textContent)
    guestScore.textContent = currentScore + 2
}

const guest3Point = () => {
    let currentScore = Number(guestScore.textContent)
    guestScore.textContent = currentScore + 3
}

const clearScore = () => {
    homeScore.textContent = 0  
    guestScore.textContent = 0
}