function playPause(){

        document.getElementById('music').paused
        ? document.getElementById('music').play()
        : document.getElementById('music').pause()

        document.querySelector('.audio-wire-1').style.animationPlayState === "paused"
        ? document.querySelector('.audio-wire-1').style.animationPlayState = "running"
        : document.querySelector('.audio-wire-1').style.animationPlayState = "paused"
        
        document.querySelector('.audio-wire-2').style.animationPlayState === "paused"
        ? document.querySelector('.audio-wire-2').style.animationPlayState = "running"
        : document.querySelector('.audio-wire-2').style.animationPlayState = "paused"

        document.querySelector('.audio-wire-3').style.animationPlayState === "paused"
        ? document.querySelector('.audio-wire-3').style.animationPlayState = "running"
        : document.querySelector('.audio-wire-3').style.animationPlayState = "paused"

        document.querySelector('.audio-wire-4').style.animationPlayState === "paused"
        ? document.querySelector('.audio-wire-4').style.animationPlayState = "running"
        : document.querySelector('.audio-wire-4').style.animationPlayState = "paused"

        document.querySelector('.audio-wire-5').style.animationPlayState === "paused"
        ? document.querySelector('.audio-wire-5').style.animationPlayState = "running"
        : document.querySelector('.audio-wire-5').style.animationPlayState = "paused"

        document.querySelector('.audio-wire-6').style.animationPlayState === "paused"
        ? document.querySelector('.audio-wire-6').style.animationPlayState = "running"
        : document.querySelector('.audio-wire-6').style.animationPlayState = "paused"

        document.querySelector('.audio-wire-7').style.animationPlayState === "paused"
        ? document.querySelector('.audio-wire-7').style.animationPlayState = "running"
        : document.querySelector('.audio-wire-7').style.animationPlayState = "paused"

        document.querySelector('.audio-wire-8').style.animationPlayState === "paused"
        ? document.querySelector('.audio-wire-8').style.animationPlayState = "running"
        : document.querySelector('.audio-wire-8').style.animationPlayState = "paused"

        document.querySelector('.audio-wire-9').style.animationPlayState === "paused"
        ? document.querySelector('.audio-wire-9').style.animationPlayState = "running"
        : document.querySelector('.audio-wire-9').style.animationPlayState = "paused"
}