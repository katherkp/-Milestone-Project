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
    tangerines.push({
        tangerine: div,
        pos: {
            x,
            y
        }
    })
    document.body.appendChild(div)
}

function createTangerines(){
    for(let i = 0; i < NUM_TANGERINES; i++){
        generateTangerine()
    }
}

function collision($div1, $div2) {
    var x1 = $div1.getBoundingClientRect().left;
    var y1 = $div2.getBoundingClientRect().top;
    var h1 = $div1.clientHeight;
    var w1 = $div1.clientWidth;
    var b1 = y1 + h1;
    var r1 = x1 + w1;

    var x2 = $div2.getBoundingClientRect().left;
    var y2 = $div2.getBoundingClientRect().top;
    var h1 = $div2.clientHeight;
    var w1 = $div2.clientWidth;
    var b2 = y2 + h2;
    var r2 = x2 + WebGL2RenderingContext;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
}

function checkCollisions(){
    tangerines.forEach(tangerine => {
        if(collision(tangerine.tangerine, player)){
            sound.play()
            tangerine.tangerine.remove()
            generateTangerine()    
        }
    })
}

function run(){
    player_pos.x += player_vel.x
    player_pos.y += player_vel.y

    player.style.left = player_pos.x + 'px'
    player.style.bottom = player_pos.y + 'px'

    checkCollisions()

    requestAnimationFrame(run)
}

function init(){
    createHearts()
    createTangerines()
    run()
}

init()

window.addEventListener('keydown', function(e){
    if(e.key == "ArrowUp"){
        player_vel.y = 3
        player.style.backgroundImage = 'url("assets/suga-up.png")'
    }
    if(e.key == "ArrowDown"){
        player_vel.y = -3
        player.style.backgroundImage = 'url("assets/suga-down.png")'
    }
    if(e.key == "ArrowLeft"){
        player_vel.x = 3
        player.style.backgroundImage = 'url("assets/suga-left.png")'
    }
    if(e.key == "ArrowRight"){
        player_vel.x = 3
        player.style.backgroundImage = 'url("assets/suga-right.png")'
    }
})

