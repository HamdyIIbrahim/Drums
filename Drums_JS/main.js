window.addEventListener('keydown',function(e){
    const audio =document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio) return ;
    audio.play();
    audio.currentTime =0;
    let ele = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    ele.classList.add("playing");
    this.setTimeout(() => {
        ele.classList.remove("playing");
    }, 200);
});