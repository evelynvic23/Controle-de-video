// Redimensionamento

var changeSize = (w, h) => {
    var vid = document.getElementById("video1");
    vid.width = w;
    vid.height = h;
}

// PLAY e PAUSE

var play_pause = () => {
    var vid = document.getElementById("video1");
    var but = document.getElementById("play_pause");
    if(vid.paused){
        vid.play();
        but.innerHTML = "&nbsp;PAUSE&nbsp;";
    }else{
        vid.pause();
        but.innerHTML = "&nbsp;PLAY&nbsp;";
    }
}

// Informações

var init = () => {
    var vid = document.getElementById("video1");
    vid.oncanplay = () => showInfo("oncanplay");
    vid.onpause = () => showInfo("onpause");
    vid.onplay = () => showInfo("onplay");
    vid.onended = () => showInfo("onended");
    vid.ontimeupdate = () => showInfo("ontimeupdate");
    vid.onvolumechange = () => showInfo("onvolumechange");
}

var showInfo = (event) => {
    var vid = document.getElementById("video1");
    var div = document.getElementById("div1");

    div.innerHTML = "Source: " + vid.currentSrc + "<br>"
        + "Duration: " + formatTime(vid.duration) + "<br>"
        + "Position: " + formatTime(vid.currentTime) + "<br>"
        + "Muted: " + (vid.muted?"true":"false") + "<br>"
        + "Volume: " + vid.volume + "<br>"
        + "Playback rate: " + vid.playbackRate + "<br>"
        + "Paused: " + (vid.paused?"true":"false") + "<br>"
        + "Ended: " + (vid.ended?"true":"false") + "<br>"
        + "Last Event: " + event;
console.log(event);

}

var formatTime = (time) => {
    var sec = parseInt(time);
    var ms =  parseInt((time - sec)*100);
    var min = parseInt(sec / 60);

    sec = sec % 60;

    return(min<10?'0': '')+min+':'+(sec<10?'0':'')+sec+'.'+(ms<10?'0':'')+ms;
}
