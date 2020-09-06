var num =6;
var colors =generateRandomColor(num);
var resetButton =document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colorCode = document.getElementById("colorCode");
var message = document.querySelector("#message");
var modeButtons = document.querySelectorAll(".mode");
var heading= document.querySelector("#heading");
colorCode.textContent=pickedcolor;

for(var i=0;i<modeButtons.length;i++){
    modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        modeButtons[2].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent=="Easy"){
            num=2;
        }else if(this.textContent=="Medium"){
            num=4
        }else{
            num=6;
        }
        reset();
    });
}

for(var i=0;i<squares.length;i++){
    squares[i].style.background=colors[i];

    squares[i].addEventListener("click",function(){
        if(this.style.background===pickedcolor){
            message.textContent="Correct!!!";
            resetButton.textContent="Play Again?";
            changeColor(pickedcolor);
            heading.style.background=pickedcolor;
        }else{
            this.style.background="white";
            message.textContent="Try Again";
        }
    });
}

resetButton.addEventListener("click",function(){
    reset();
});

function reset(){
    colors=generateRandomColor(num);
    pickedcolor=pickcolor();
    colorCode.textContent=pickedcolor;
    resetButton.textContent="New Colors";
    message.textContent="";
    for(var i=0;i<squares.length;i++){
        if(i < num){
        squares[i].style.display="block";
        squares[i].style.background=colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
    heading.style.background="rgb(161, 65, 176)";
}

function changeColor(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=color;
    }
}

function pickcolor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColor(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr[i]=randomColor();
    }
    return arr;
}

function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}