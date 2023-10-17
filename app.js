let Colors = ["yellow","green","red","purple"];
let h5 = document.querySelector("h5");
let started = false;
let level = 0;
document.addEventListener("keypress",()=>{
    if(started == false){
        console.log("game is started");
        started = true;
        LevelUp();
    }
})

function LevelUp(){
    level++;
    h5.innerText = `Level ${level}`;
    let randomColor = Math.floor(Math.random()*3);
    let color = Colors[randomColor];
    let rand = document.querySelector(`.${color}`);
    console.log(randomColor);

    BtnFLash(rand);
}

function BtnFLash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500)
}


function BtnPress(){
    console.log("clicked");
};

let fourButtons = document.querySelectorAll(".box");

for(fourBtns of fourButtons){
    fourBtns.addEventListener("click",BtnPress);
}