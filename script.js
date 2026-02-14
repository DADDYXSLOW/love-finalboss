// MUSIC UNLOCK
let musicStarted=false;
function startMusic(){
if(musicStarted) return;
let m=document.getElementById("music");
m.volume=0.8;
m.play().catch(()=>{});
musicStarted=true;
}
document.addEventListener("click",startMusic);
document.addEventListener("keydown",startMusic);

// TITLE TYPE
const title="DADDYXSLOW ❤️ MELİSAXSLOW";
let ti=0;
function typeTitle(){
if(ti<title.length){
document.getElementById("title").innerHTML+=title[ti];
ti++;
setTimeout(typeTitle,70);
}
}
typeTitle();

// LOVE WORDS SYSTEM (ORIGINAL)
const loveLines=[
"Sen geldiğinden beri dünya daha parlak.",
"Kalbim senin ismini ritim diye seçti.",
"Zaman akıyor ama ben hep sana doğru akıyorum.",
"09.04.2024 — Benim için hayatın başladığı gün.",
"Sen yanımdayken dünya susuyor, kalbim konuşuyor.",
"Biz tesadüf değiliz, biz kaderin imzasıyız."
];

let li=0;
function showLove(){
document.getElementById("loveText").innerText=loveLines[li];
li=(li+1)%loveLines.length;
}
setInterval(showLove,4000);
showLove();

// MATRIX
const mc=document.getElementById("matrix");
const mctx=mc.getContext("2d");
mc.width=window.innerWidth;
mc.height=window.innerHeight;

let letters="XSLOWLOVE01";
letters=letters.split("");

let size=14;
let cols=mc.width/size;
let drops=[];

for(let x=0;x<cols;x++) drops[x]=1;

function drawMatrix(){
mctx.fillStyle="rgba(0,0,0,0.05)";
mctx.fillRect(0,0,mc.width,mc.height);

mctx.fillStyle="#00ffe1";
mctx.font=size+"px monospace";

for(let i=0;i<drops.length;i++){
let t=letters[Math.floor(Math.random()*letters.length)];
mctx.fillText(t,i*size,drops[i]*size);

if(drops[i]*size>mc.height && Math.random()>0.975)
drops[i]=0;

drops[i]++;
}
}
setInterval(drawMatrix,35);

// PARTICLES
const pc=document.getElementById("particles");
const pctx=pc.getContext("2d");
pc.width=window.innerWidth;
pc.height=window.innerHeight;

let parts=[];

document.addEventListener("click",e=>{
for(let i=0;i<20;i++){
parts.push({
x:e.clientX,
y:e.clientY,
size:Math.random()*4+2,
speed:Math.random()*2+1
});
}
});

function drawParticles(){
pctx.clearRect(0,0,pc.width,pc.height);
parts.forEach(p=>{
p.y-=p.speed;
pctx.fillStyle="rgba(255,0,120,0.7)";
pctx.beginPath();
pctx.arc(p.x,p.y,p.size,0,Math.PI*2);
pctx.fill();
});
}
setInterval(drawParticles,40);

// CURSOR TRAIL
const cc=document.getElementById("cursor");
const cctx=cc.getContext("2d");
cc.width=window.innerWidth;
cc.height=window.innerHeight;

let trail=[];

document.addEventListener("mousemove",e=>{
trail.push({x:e.clientX,y:e.clientY});
if(trail.length>20) trail.shift();
});

function drawTrail(){
cctx.clearRect(0,0,cc.width,cc.height);
trail.forEach((p,i)=>{
cctx.beginPath();
cctx.arc(p.x,p.y,i*2,0,Math.PI*2);
cctx.fillStyle="rgba(0,255,200,"+(i/20)+")";
cctx.fill();
});
}
setInterval(drawTrail,30);

// SECRET MESSAGE
function secret(){
let p=prompt("Love Code?");
if(p==="0904"){
alert("Sen benim kalbimin en güvenli yerisin ❤️");
}else{
alert("Access Denied");
}
}
