const hoursHand = document.querySelector('.clock-h')
const minutesHand = document.querySelector('.clock-m')
const secondsHand = document.querySelector('.clock-s')
const dateblock = document.querySelector('.day')

function clock() {
    let now = new Date()
    let h = now.getHours()
    let m = now.getMinutes()
    let s = now.getSeconds()

    let sAngle = s * 6
    let mAngle = m * 6 +s*0.1
    let hAngle = h*30 + m*.5


    secondsHand.style.transform = `rotate(${sAngle}deg)`
    minutesHand.style.transform = `rotate(${mAngle}deg)`
    hoursHand.style.transform = `rotate(${hAngle}deg)`
    setTimeout(clock,500)
}
function day() {
    let now = new Date()
    let mth = now.getMonth()
    let d = now.getDay()

    let year = ['jan',
                'fab',
                'mch',
                'apr', 
                'may',
                'jun',
                'jul',
                'aug',
                'sep',
                'oct',
                'nov',
                'dec',]


   
     

    // 1способ
    // Находим день
    // if (d < 10) { d = '0' +d}
    // Находим месяц
    // mth++
    // if (mth < 10) { mth = '0'+mth}
    // dateblock.textContent = ` ${d} . ${mth} `
    

    // 2способ
    
    // mth = (++mth < 10) ? '0' + mth : mth
    // d = (d < 10) ? '0' +d : d
    // dateblock.textContent = ` ${d} . ${mth} `
  
    // 3 способ
    // dateblock.textContent = ` ${(d < 10) ? '0' +d : d} . ${mth = (++mth < 10) ? '0' + mth : mth} `
    // console.log(d, mth)

    // 4 способ
    console.log(mth, year[mth])
    // mth = year[mth]

    
    dateblock.textContent = `${(d < 10) ? '0' +d : d} ${year[mth]}`

    setTimeout(day, 1000)
}
day()
clock()


