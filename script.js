function secret(){
let p=prompt("❤️ Love Code ❤️");

if(p==="1402"){

// MESSAGE
alert("14 Şubat — Sen hayatı güzelleştiren en özel detaysın ❤️");

// MUSIC BOOST
let m=document.getElementById("music");
if(m){
m.volume=1;
m.play().catch(()=>{});
}

// SCREEN GLOW
document.body.style.boxShadow="0 0 120px #ff2a6d inset";
setTimeout(()=>{
document.body.style.boxShadow="0 0 40px #ff2a6d inset";
},2000);

// HEART EXPLOSION EFFECT
for(let i=0;i<60;i++){
let heart=document.createElement("div");
heart.innerHTML="💖";
heart.style.position="fixed";
heart.style.left=Math.random()*window.innerWidth+"px";
heart.style.top=Math.random()*window.innerHeight+"px";
heart.style.fontSize=(Math.random()*30+20)+"px";
heart.style.zIndex=9999;
heart.style.pointerEvents="none";
heart.style.animation="heartFloat 3s linear forwards";
document.body.appendChild(heart);

setTimeout(()=>heart.remove(),3000);
}

}else{
alert("Access Denied");
}
}
