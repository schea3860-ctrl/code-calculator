// Function Calculator
function  addvalue(value){
    let screen=document.getElementById("screen");
        screen.value+=value;
}
function calculator(){
    let screen =document.getElementById("screen");
        screen.value=eval(screen.value);
}
function ClearScreen(){
    let screen=document.getElementById("screen");
        screen.value="";
}
function DeleteScreen(){
    let screen=document.getElementById("screen");
        screen.value=screen.value.slice(0,-1);
}

function MeMe(){
    let sava=  document.getElementById("meme");
        sava.innerText="I Love You!!";
}