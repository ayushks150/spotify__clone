let songIndex = 0;
let audioElement = new Audio('123.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');


//playing music
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =  1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity =  0;
    }

})

//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar - agge bdhte jayega
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

//progressbar mai jahan click kre wahi se ganna suru ho
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})