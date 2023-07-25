console.log("Welcome to Spotify");
// Initializing the Variables
let songIndex = 1;
let audioElement = new Audio(`songs/${songIndex}.mp3`);
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let sname =document.getElementById('sname');

let songs = [
  {
    songName: "Warriyo Oppenhiemer Can't",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Who-said i am not beautiful",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Love you zindagi Aaj ya kal",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Heaven Huma things i know",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Who-said you are not worth ",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "That's a price ... of Beauty",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Bhula Dena Mujhe Jo alvida",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Zoobi Doobi Zoobi Doobi p",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Jaane Nhi Denge Tujhe, Jaane ",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Haathi Mera Saathi tu dena ",
    filePath: "songs/10.mp3",
    coverPath: "covers/10.jpg",
  },
];
//  console.log(audioElement);
songItems.forEach((element, i) => {
  // console.log(element,i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByTagName("span")[0].innerHTML = songs[i].songName;
});

// Handle Play Pause

masterPlay.addEventListener('click', () => {
  s;
  if (!audioElement.paused) {
    
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  } 
  else {
    audioElement.src = `songs/${songIndex}.mp3`;

    audioElement.currentTime = 0;
    audioElement.play();

   
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  }
});
// Listen to events
audioElement.addEventListener("timeupdate", () => {
  // console.log('timeUpdate');
  Progress = (audioElement.currentTime/audioElement.duration) * 100;
  console.log(Progress);
  myProgressBar.value = Progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlay = () => {
  // console.log(audioElement.pa)
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);

      if (!audioElement.paused) {
        makeAllPlay();
        audioElement.src = `songs/${songIndex}.mp3`;

        // audioElement.currentTime=0;
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
      } else {
        makeAllPlay();
        songIndex = parseInt(e.target.id);

        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");

        audioElement.src = `songs/${songIndex}.mp3`;

        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");

        gif.style.opacity = 1;
      }
    });
  }
);

next.addEventListener("click", () => {
  if (songIndex < 10) songIndex += 1;
  else songIndex = 1;

  audioElement.src = `songs/${songIndex}.mp3`;

  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
 
});

prev.addEventListener("click", () => {
  if (songIndex > 1) songIndex -= 1;
  else songIndex = 10;

  audioElement.src = `songs/${songIndex}.mp3`;

  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  
});

sname.innerHTML=songs[songIndex].songName;