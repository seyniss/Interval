const container = document.querySelector('#container')
const title = document.querySelector('.title')
const playBtn = document.querySelector('#play')
const stopBtn = document.querySelector('#stop')

function getRandomColor(){
    let hex="#"+Math.random().toString(16).slice(2,8).toUpperCase()


    return hex
}

function bgChange(){
    let randomColor = getRandomColor();
    
    container.style.backgroundColor=randomColor
    title.textContent=randomColor
    
}
let play = setInterval(bgChange,1000)




playBtn.addEventListener('click',()=>{
    if(!play){
        play = setInterval(bgChange,1000)
    }
})
stopBtn.addEventListener('click',()=>{
    if(!play){
        setInterval(bgChange,1000)
    }
    clearInterval(play)
    play=null 
})