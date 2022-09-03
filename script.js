const NUM_HEARTS = 50
const NUM_TANGERINES = 7

const player = document.querySelector('player')
const player_pos = {
    x: parseInt(window.innerWidth / 2),
    y: parseInt(window.innerHeight / 2)
}

const player_vel = {
    x: 0,
    y: 0
}

const tangerines = []
const sound = new Audio('assets/meow.mp3')

function createHearts(){
    for(let i = 0; i < NUM_HEARTS; i+++){
        const div = document.createElement('div')
        div.classList.add('heart')
        div.style.left = Math.random() * 100 + '%'
        div.style.top = Math.random() * 100 + '%'
        document.body.appendChild(div)
    }
}

function generateTangerine(){
    const div = document.createElement('div')
    div.classList.add('tangerine')
    let x = Math.random() * 100 + '%'
    let y = Math.random() * 100 + '%'
    div.style.left = x
    div.style.top = y
    tangerines.push(
        
    )
}

