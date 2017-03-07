var box1 = document.getElementById("color1");
var box2 = document.getElementById("color2");
var box3 = document.getElementById("color3");
var box4 = document.getElementById("color4");
var box5 = document.getElementById("color5");
var box6 = document.getElementById("color6");

var reset =document.getElementById("reset");
var hard=false; //look into this
var difficulty=3;
var newcolor=[];
var answer;
var select=false;
var statement="";

reset.addEventListener('click', colorChange);

document.getElementById("hard").addEventListener('click', sethard);
document.getElementById("easy").addEventListener('click', seteasy);
reset.addEventListener('mouseover',function(){
    reset.className="active";
})
reset.addEventListener('mouseout',function(){
    reset.className="";
})

function colorChange() {
    for (var i = 0; i < difficulty; i++) {
        newcolor[i]= randomColor();
    }
    box1.style.backgroundColor = newcolor[0];
    box2.style.backgroundColor = newcolor[1];
    box3.style.backgroundColor = newcolor[2];
    if (hard==true) {
        box4.style.backgroundColor = newcolor[3];
        box5.style.backgroundColor = newcolor[4];
        box6.style.backgroundColor = newcolor[5];
    }
    answer = newcolor[Math.floor(Math.random() * difficulty)];
    document.getElementById("numDisplay").innerHTML=answer;
    document.getElementById("answer").innerHTML = "";
    
    select=false;
    reset.innerHTML = "NEW COLORS"
    setVisibility();

    document.getElementById("color1").addEventListener('click', function(){
        if(select==false) {
            if (newcolor[0]==answer) {
                statement = "That's right!";
                select=true;
                reset.innerHTML = "PLAY AGAIN?";
                winState();
            }
            else {
                statement = "Nope! Try Again!";
                box1.style.visibility = 'hidden';
            }
            document.getElementById("answer").innerHTML = statement;
        }
    });
        
    document.getElementById("color2").addEventListener('click', function(){
        if (select == false) {
            if (newcolor[1]==answer) {
                statement = "That's right!";
                select=true;
                reset.innerHTML = "PLAY AGAIN?";
                winState();
            }
            else {
                statement = "Nope! Try Again!";
                box2.style.visibility = 'hidden';
            }
            document.getElementById("answer").innerHTML = statement;
        }
    });
        
    document.getElementById("color3").addEventListener('click', function(){
        if (select==false) {
            if (newcolor[2]==answer) {
                statement = "That's right!";
                select=true;
                reset.innerHTML = "PLAY AGAIN?";
                winState();
            }
            else {
                statement = "Nope! Try Again!";
                box3.style.visibility = 'hidden';
            }
            document.getElementById("answer").innerHTML = statement;
        }
    });
    
    if (hard==true){
        document.getElementById("color4").addEventListener('click', function(){
        if(select==false) {
            if (newcolor[3]==answer) {
                statement = "That's right!";
                select=true;
                reset.innerHTML = "PLAY AGAIN?";
                winState();
            }
            else {
                statement = "Nope! Try Again!";
                box4.style.visibility = 'hidden';
            }
            document.getElementById("answer").innerHTML = statement;
        }
    });
        
    document.getElementById("color5").addEventListener('click', function(){
        if (select == false) {
            if (newcolor[4]==answer) {
                statement = "That's right!";
                select=true;
                reset.innerHTML = "PLAY AGAIN?";
                winState();
            }
            else {
                statement = "Nope! Try Again!";
                box5.style.visibility = 'hidden';
            }
            document.getElementById("answer").innerHTML = statement;
        }
    });
        
    document.getElementById("color6").addEventListener('click', function(){
        if (select==false) {
            if (newcolor[5]==answer) {
                statement = "That's right!";
                select=true;
                reset.innerHTML = "PLAY AGAIN?";
                winState();
            }
            else {
                statement = "Nope! Try Again!";
                box6.style.visibility = 'hidden';
            }
            document.getElementById("answer").innerHTML = statement;
        }
    });
    }

}
function winState(){
    setVisibility();
    box1.style.backgroundColor = answer;
    box2.style.backgroundColor = answer;
    box3.style.backgroundColor = answer;
    if (hard==true) {
        box4.style.backgroundColor = answer;
        box5.style.backgroundColor = answer;
        box6.style.backgroundColor = answer;
    }
    else {
        box4.style.visibility = 'hidden';
        box5.style.visibility = 'hidden';
        box6.style.visibility = 'hidden';
    }
}
function setVisibility() {
    box1.style.visibility = 'visible';
    box2.style.visibility = 'visible';
    box3.style.visibility = 'visible';
    if (hard==true) {
        box4.style.visibility = 'visible';
        box5.style.visibility = 'visible';
        box6.style.visibility = 'visible';
    }
    else {
        box4.style.visibility = 'hidden';
        box5.style.visibility = 'hidden';
        box6.style.visibility = 'hidden';
    }
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = "RGB(" + r + "," + g + "," + b + ")";
    return color;
}
function sethard() {
    document.getElementById("easy").className="";
    document.getElementById("hard").className="active";
        difficulty=6;
        hard=true;
        colorChange();
}
function seteasy() {
    document.getElementById("hard").className="";
    document.getElementById("easy").className="active";
    difficulty=3;
    hard=false;
    colorChange();
}


window.onload=colorChange;
/*function randomColor() {
    var chars = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
}*/