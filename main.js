const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link=>{
link.addEventListener("click",()=>{
navLinks.classList.remove("active");
});
});

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
if(isPlaying){
bgMusic.pause();
musicBtn.innerHTML = "🎧 Music Off";
}else{
bgMusic.play();
musicBtn.innerHTML = "🎧 Music On";
}
isPlaying = !isPlaying;
});