window.onload = () =>{
    let songs =[
        {
            name : 'dirift',
            artist :'formula 1',
            songPath :'./music/NEXEN TIRE - Formula DRIFT CM  (30sec).mp4',

        },

        {
            name : 'dirift',
            artist :'formula 1',
            songPath :'./music/NEXEN TIRE - Formula DRIFT CM  (30sec).mp4',

        },
        {
            name : 'dirift',
            artist :'formula 1',
            songPath :'./music/NEXEN TIRE - Formula DRIFT CM  (30sec).mp4',

        },
        {
            name : 'dirift',
            artist :'formula 1',
            songPath :'./music/NEXEN TIRE - Formula DRIFT CM  (30sec).mp4',

        },

]




    let songImg = document.getElementById('song-img');
    let songName = document.getElementById('song-name');
    let songArtist = document.getElementById('song-artist');
    let songNext = document.getElementById('song-next');



    //button
    let playBtn = document.getElementById('play-btn');
    let playBtnIcon = document.getElementById('play-icon');
    let prevBtn = document.getElementById('prev-btn');
    let nextBtn = document.getElementById('next-btn');



    //audio
    let audioPlayer = document.getElementById('audio-player');
    let nowSong;
    let nextSong;




playBtn.addEventListener('click',toggleplaysong)
nextBtn.addEventListener('click',()=> changeSong())
prevBtn.addEventListener('click',()=> changeSong(false))  

initplayer();
function initplayer(){
    nowSong =0;
    nextSong = nowSong++;
    updateplayer();
}

function updateplayer(){

    let song = songs[nowSong];
    console.log(songs[nowSong])
    songName.innerHTML = song.name;
    songArtist.innerHTML = song.artist;
    songNext.innerHTML = songs[nextSong].name + " by " + songs[nextSong].artist
    audioPlayer.src = song.songPath
}



//toggleplaysong
function toggleplaysong(){
    if(audioPlayer.paused){
        audioPlayer.play();
        playBtnIcon.classList.add('fa-pause')
        playBtnIcon.classList.remove('fa-play')

    }else{
        audioPlayer.pause();
        playBtnIcon.classList.remove('fa-pause')
        playBtnIcon.classList.add('fa-play')
    }
}






//changeSong
function changeSong(next = true){
    if(next){
        nowSong++;
        nextSong = nowSong +1;
        if(nowSong > songs.length -1){
            nowSong = 0;
            nextSong = nowSong + 1
        }
        if(nextSong > songs.length -1){
            nextSong =0;
        }

    }else{
        nowSong--;
        nextSong = nowSong+1
        if(nowSong <0){
            nowSong =  songs.length -1
            nextSong =0
        }
    }
    updateplayer();
    toggleplaysong();

}
}
TweenMax.from('.player',2,{opacity:0,scale:0,width:0,ease:Back.easeOut})
//TweenMax.StaggerFrom('.player',5,{y:"0%"opacity:0.5,scale:0.5},0.5,"-=0.5")
TweenMax.to('.player',1,{y:"0%",scale:1,opacity:1},"-=50")
