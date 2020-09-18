const container = document.querySelector('.app-container')
const text = document.querySelector('#text')

const totalTime = 7500
const breatheTime = (totalTime/5) * 2
const holdTime = totalTime / 5

function breatheAnimation(){
    text.innerHTML = 'Breath In'
    container.className = 'grow container'

    setTimeout( () =>{
        text.innerHTML = 'Hold'
        
        setTimeout( () =>{
            text.innerHTML = 'Breath Out'
            container.className = 'shrink container'

        }, holdTime)
    },breatheTime)
    
}

setInterval(breatheAnimation, totalTime)