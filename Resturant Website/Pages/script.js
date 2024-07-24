const loginDialog = document.getElementById("loginDialog");
const headText = document.querySelector(".head-text");
const button = document.getElementById("login");


loginDialog.addEventListener("click",()=>{
    document.body.classList.add("openDialog");
    document.body.classList.add("hide");
});

button.addEventListener("click",()=>{
    document.body.classList.add("hideDialog");
    document.body.classList.remove("hide");
})


// Slider  Part 

let scrollContainer = document.querySelector(".fav-item-gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click",()=>{
    scrollContainer.scrollLeft += 300;
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.style.transtion="0.5s";
});

backBtn.addEventListener("click",()=>{
    scrollContainer.scrollLeft -= 300;
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.style.transtion="0.5s";
})

