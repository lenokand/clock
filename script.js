const hoursHand = document.querySelector('.clock-h')
const minutesHand = document.querySelector('.clock-m')
const secondsHand = document.querySelector('.clock-s')

function clock() {
    let now = new Date()
    let h = now.getHours()
    let m = now.getMinutes()
    let s = now.getSeconds()

    let sAngle = s * 6
    let mAngle = m * 6
    let hAngle = h*30 + m*.5

    secondsHand.style.transform = `rotate(${sAngle}deg)`
    minutesHand.style.transform = `rotate(${mAngle}deg)`
    hoursHand.style.transform = `rotate(${hAngle}deg)`
    setTimeout(clock,500)
}

clock()