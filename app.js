let gameOrder = [];
let userGameOrder = [];
let btns = ["yellow","red","green","purple"];
let level = 0;
let started = false;
let boxButton = document.querySelectorAll(".box");
let h5 = document.querySelector("h5");
let highest = document.querySelector("h3");
document.addEventListener("keypress",()=>{
    if(started == false){
        started = true;
        levelUp();
    }
});
document.addEventListener("touchend",()=>{
    if(started == false){
        started = true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000)
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },700)
}

function levelUp(){
    console.log(userGameOrder)
    userGameOrder = [];
    level++;
    h5.innerText = `level ${level}`;

    let indexOfButtons = Math.floor(Math.random()*3);
    let color = btns[indexOfButtons];
    let colorSel = document.querySelector(`.${color}`);
    gameOrder.push(color);
    gameFlash(colorSel);
}

function userClickedBtn(){
    let btn = this;
    let colorId = btn.getAttribute("id");
    userGameOrder.push(colorId);
    userFlash(btn);
    checkColor(userGameOrder.length-1);
}
for(buttonClick of boxButton){
   buttonClick.addEventListener("click",userClickedBtn);
}
function checkColor(idx){
    if(gameOrder[idx]===userGameOrder[idx]){
        if(gameOrder.length == userGameOrder.length){
            setTimeout(levelUp(), 1000);
        }
    }
    else{
        h5.innerHTML = `Game Over ,<b> Score - ${level}</b> <br> Press any key to start! `;
        let background = document.querySelector("body");
        background.style.backgroundColor = "red";
        setTimeout(function(){
            background.style.backgroundColor = "white";
        },500);
        highest.innerText = `Highest Score is : ${level}`;
        reset();
    }
}
function reset(){
    started = false;
    level = 0;
    gameOrder = [];
    userGameOrder = [];
}
