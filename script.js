console.log("welcome to spotify");
let audioSong = new Audio("songs/1.mp3");
let index = 0;
let masterPlay = document.getElementById("masterPlay");
let masterSongInfo = document.getElementById("masterSongInfo");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let sortPlay = Array.from(document.getElementsByClassName("sortPlay"));
let timeDurations=Array.from(document.getElementsByClassName("timeDuration"));
let songList = [
  {
    songName: "let me love you 1",
    filePath: "songs/1.mp3",
    songCover: "covers/1.jpg",
   
  },
  {
    songName: "let me love you 2",
    filePath: "songs/2.mp3",
    songCover: "covers/2.jpg",
  },
  {
    songName: "let me love you 3",
    filePath: "songs/3.mp3",
    songCover: "covers/3.jpg",
  },
  {
    songName: "let me love you 4",
    filePath: "songs/4.mp3",
    songCover: "covers/4.jpg",
  },
  {
    songName: "let me love you 5",
    filePath: "songs/5.mp3",
    songCover: "covers/5.jpg",
  },
  {
    songName: "let me love you 6",
    filePath: "songs/6.mp3",
    songCover: "covers/6.jpg",
  },
  {
    songName: "let me love you 7",
    filePath: "songs/7.mp3",
    songCover: "covers/7.jpg",
  },
  {
    songName: "let me love you 8",
    filePath: "songs/8.mp3",
    songCover: "covers/8.jpg",
  },
  {
    songName: "let me love you 9",
    filePath: "songs/9.mp3",
    songCover: "covers/9.jpg",
  },
  {
    songName: "let me love you 10",
    filePath: "songs/10.mp3",
    songCover: "covers/10.jpg",
  },
];

//listen to  event
masterPlay.addEventListener("click", () => {
  if (audioSong.paused || audioSong.currentTime <= 0) {
    audioSong.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioSong.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

audioSong.addEventListener("timeupdate", () => {
 
  //updateSeekbar
  let timePercent = (audioSong.currentTime / audioSong.duration) * 100;
  
  myProgressBar.value = timePercent;
});
myProgressBar.addEventListener("change", () => {
  audioSong.currentTime = (myProgressBar.value * audioSong.duration) / 100;
});

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songList[i].songCover;
  element.getElementsByClassName("songName")[0].innerText =
    songList[i].songName;
    
    
});
const makeAllPlay=()=>{
    sortPlay.forEach((element)=>{
 element.classList.remove("fa-pause-circle");
 element.classList.add("fa-circle-play");
    })
    
}

sortPlay.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    makeAllPlay();
    index=e.target.id;

    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-pause-circle");
    audioSong.src=`songs/${index}.mp3`;
    audioSong.currentTime=0;
    audioSong.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-pause-circle");
    masterSongInfo.innerText=songList[index-1].songName;
    gif.style.opacity = 1;
    // document.getElementsById("info").innerText=songList[index-1].songName;
  })
});
document.getElementById("next").addEventListener('click',()=>{
if(index>10){
    index=1;
}
else{
    index=index+1;
}
audioSong.src=`songs/${index}.mp3`;
audioSong.currentTime=0;
    audioSong.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-pause-circle");
    masterSongInfo.innerText=songList[index-1].songName;
})

document.getElementById("back").addEventListener('click',()=>{
    if(index<=1){
        index=1;
    }
    else{
        index=index-1;
    }
    audioSong.src=`songs/${index}.mp3`;
    audioSong.currentTime=0;
        audioSong.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-pause-circle");
        masterSongInfo.innerText=songList[index-1].songName;
        
    })

