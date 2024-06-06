//-----------side navigation code

let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

let navBar = document.querySelector(".navbar");
let body = document.querySelector("body");

menuBtn.onclick = function()
{
    menuBtn.style.opacity="0";
    menuBtn.style.pointerEvent="none";
    navBar.classList.add("active");
    body.style.overflow = "hidden";
}


cancelBtn.onclick = function()
{
    menuBtn.style.opacity="1";
    menuBtn.style.pointerEvent="auto";
    navBar.classList.remove("active");
    body.style.overflow = "auto";
}


//------------sticky navigation code

let val;
let nav = document.querySelector("nav");
let ScrollBtn = document.querySelector(".scroll-button a");
console.log(ScrollBtn)
window.onscroll = function()
{
    if(document.documentElement.scrollTop>20)
    {
        nav.classList.add("sticky");
        ScrollBtn.style.display = "block";
    }else
    {
        nav.classList.remove("sticky");
        ScrollBtn.style.display = "none";
    }
}

//---------Side Navigation Bar Close While We Click On Navigation Links

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0 ; i < navLinks.length; i++)
{
    navLinks[i].addEventListener("click", function()
    {
        menuBtn.style.opacity="1";
        menuBtn.style.pointerEvent="auto";
        navBar.classList.remove("active");
    });
}


//----------- Skills----------------
    //circular progress
    let progressBar = document.querySelector(".circular-progress");
    let valueContainer = document.querySelector(".value-container");
    
    let progressValue = 0;
    let progressEndValue = 85;
    let speed = 10;
    
    let progress = setInterval(() => {
        progressValue++;
        valueContainer.textContent = `${progressValue}%`;
        progressBar.style.background = `conic-gradient(#4d5bf9 ${progressValue * 3.6}deg, #cadcff ${progressValue * 3.6}deg)`;
    
        if (progressValue == progressEndValue) {
    clearInterval(progress);
        }
    }, speed);
    
    //for second td
    let progressBar1 = document.querySelector(".circular-progress1");
    let valueContainer1 = document.querySelector(".value-container1");
    
    let progressValue1 = 0;
    let progressEndValue1 = 80;
    
    let progress1 = setInterval(() => {
        progressValue1++;
        valueContainer1.textContent = `${progressValue1}%`;
        progressBar1.style.background = `conic-gradient(#4d5bf9 ${progressValue1 * 3.6}deg, #cadcff ${progressValue1 * 3.6}deg)`;
    
        if (progressValue1 == progressEndValue1) {
    clearInterval(progress1);
        }
    }, speed);
    
    //for third td
    let progressBar2 = document.querySelector(".circular-progress2");
    let valueContainer2 = document.querySelector(".value-container2");
    
    let progressValue2= 0;
    let progressEndValue2 = 78;
    
    let progress2 = setInterval(() => {
        progressValue2++;
        valueContainer2.textContent = `${progressValue2}%`;
        progressBar2.style.background = `conic-gradient(#4d5bf9 ${progressValue2 * 3.6}deg, #cadcff ${progressValue2 * 3.6}deg)`;
    
        if (progressValue2 == progressEndValue2) {
    clearInterval(progress2);
        }
    }, speed);
    
    //for fourth td
    let progressBar3 = document.querySelector(".circular-progress3");
    let valueContainer3 = document.querySelector(".value-container3");
    
    let progressValue3= 0;
    let progressEndValue3 = 45;
    
    let progress3 = setInterval(() => {
        progressValue3++;
        valueContainer3.textContent = `${progressValue3}%`;
        progressBar3.style.background = `conic-gradient(#4d5bf9 ${progressValue3 * 3.6}deg, #cadcff ${progressValue3 * 3.6}deg)`;
    
        if (progressValue3 == progressEndValue3) {
    clearInterval(progress3);
        }
    }, speed);