const playBtn = document.querySelector(".play")
const pauseBtn = document.querySelector(".pause")
const video = document.querySelector("video")
const btnContainer = document.querySelector(".buttons")
const blockButton = document.querySelector(".block-button")

console.log(video)
pauseBtn.addEventListener("click", ()=>{
    video.pause()
    blockButton.classList.add("move-block-button")
    
})

playBtn.addEventListener("click", ()=>{
    video.play()
    blockButton.classList.remove("move-block-button")
    
})