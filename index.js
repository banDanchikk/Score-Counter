let homeScore = 0
let guestScore = 0

hsText = document.getElementById("homeScore")
gsText = document.getElementById("guestScore")

function homeAdd1(){
    homeScore +=1
    hsText.innerText = homeScore
}
function homeAdd2(){
    homeScore +=2
    hsText.innerText = homeScore
}
function homeAdd3(){
    homeScore +=3
    hsText.innerText = homeScore
}

function guestAdd1(){
    guestScore +=1
    gsText.innerText = guestScore
}
function guestAdd2(){
    guestScore +=2
    gsText.innerText = guestScore
}
function guestAdd3(){
    guestScore +=3
    gsText.innerText = guestScore
}