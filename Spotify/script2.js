console.log("Welcome to Spotify");
// Initializing the Variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3')
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Warriyo Oppenhiemer Can't",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Who-said i am not beautiful",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Love you zindagi Aaj ya kal",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Heaven Huma things i know",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Who-said you are not worth ",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"That's a price ... of Beauty",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Bhula Dena Mujhe Jo alvida",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Zoobi Doobi Zoobi Doobi p",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"Jaane Nhi Denge Tujhe, Jaane ",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"Haathi Mera Saathi Sath dena ",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},
]
 
songItems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByTagName('span')[0].innerHTML=songs[i].songName;
})

// audioElement.play();

// audioElement.play();

// Handle Play Pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})