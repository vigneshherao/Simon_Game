let gameOrder = [];
let userGameOrder = [];
let btns = ["yellow","red","green","purple"];
let level = 0;
let started = false;

let h5 = document.querySelector("h5");
document.addEventListener("keypress",()=>{
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

function levelUp(){
    level++;
    h5.innerText = `level ${level}`;

    let indexOfButtons = Math.floor(Math.random()*3);
    let color = btns[indexOfButtons];
    let colorSel = document.querySelector(`.${color}`);
    gameFlash(colorSel);

}