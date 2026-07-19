/* -----------------------------
   Loading Screen
------------------------------ */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList
            .add("hide");

    }, 2000);

});


/* -----------------------------
   Countdown
------------------------------ */

const startDate = new Date("2026-08-08T00:00:00");

function updateCountdown(){

    const now = new Date();

    const diff = now - startDate;

    if(diff < 0){

        document.getElementById("days").innerHTML="0";
        document.getElementById("hours").innerHTML="0";
        document.getElementById("minutes").innerHTML="0";
        document.getElementById("seconds").innerHTML="0";

        return;

    }

    const days = Math.floor(diff / (1000*60*60*24));

    const hours = Math.floor(
        diff%(1000*60*60*24)/(1000*60*60)
    );

    const minutes = Math.floor(
        diff%(1000*60*60)/(1000*60)
    );

    const seconds = Math.floor(
        diff%(1000*60)/1000
    );

    document.getElementById("days").innerHTML=days;

    document.getElementById("hours").innerHTML=hours;

    document.getElementById("minutes").innerHTML=minutes;

    document.getElementById("seconds").innerHTML=seconds;

}

setInterval(updateCountdown,1000);

updateCountdown();


/* -----------------------------
   Floating Hearts
------------------------------ */

const heartContainer = document.querySelector(".hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💖";

    heart.style.left = Math.random()*100+"vw";

    heart.style.fontSize =
        (20+Math.random()*25)+"px";

    heart.style.animationDuration =
        (8+Math.random()*6)+"s";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },15000);

}

setInterval(createHeart,350);


/* -----------------------------
   Typing Letter
------------------------------ */

const message =

`ถึงวิว ❤️

ขอบคุณที่เข้ามาในชีวิตของเค้า

หนึ่งเดือนที่ผ่านมาอาจจะเป็นช่วงเวลาสั้น ๆ

แต่สำหรับเค้า...

มันเป็นช่วงเวลาที่มีความสุขมากที่สุด

ขอบคุณที่คอยอยู่ข้างกัน

คอยยิ้ม คอยรับฟัง

คอยเป็นกำลังใจให้กันเสมอ

เค้าหวังว่า

จาก 1 เดือน

จะกลายเป็น 1 ปี

10 ปี

และตลอดไป

รักวิวนะ ❤️`;

let i = 0;

function typing(){

    if(i < message.length){

        document
        .getElementById("typing")
        .innerHTML += message.charAt(i);

        i++;

        setTimeout(typing,45);

    }

}

typing();
