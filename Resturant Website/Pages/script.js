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

