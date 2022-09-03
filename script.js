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



