//storing local 
if( localStorage.getItem("score")==undefined){
    alert("This is the first round on this Device");

}
else{
    var s=localStorage.getItem("score");
    var n=localStorage.getItem("name");
    // localStorage.clear();
    alert("The Highest Score is scored by "+n+" which is "+s);
}
//val will store the score of the game
var val = 0;
var check=0;
//position of ball is i and j
var i = 20, j = 725;
var ball = document.getElementById('ball');
//if ci=check ith position and cj=check jth position
var ci = 0, cj = 0;
//Below function is for movement of ball 
function ballMovement() {
    //storing window height and width 
    const height = window.innerHeight;
    var width = screen.width;
    //called setinterval function 
    var id = setInterval(function () {
        if (j + 20 >= rodp && j + 20 < rodp + 160 && check != 0) {

            if (i - 20 == 0 || i + 20 >= height - 20) {
                if (ci == 0) {
                    ci = 1;
                }
                else {
                    ci = 0;
                }
                val=val+10;
                // alert("Your Score :"+val);
            }

        }
        else if ((i<= 0 || i>= height-28)&& check != 0) {
            clearInterval(id);
            
            i = 20, j = 725;
            ball.style.top = i + 'px';
            ball.style.left = j + 'px';
            if( localStorage.getItem("score")==undefined){
                let n=prompt("what is your name??");
                localStorage.setItem("score", val);
                localStorage.setItem("name", n);
                alert(n+" your first game score is: "+val);
            }
            else{
                if(parseInt(localStorage.getItem("score"))<val){
                    let n=prompt("what is your name??");
                    localStorage.setItem("score", val);
                    localStorage.setItem("name", n);
                    alert(n+" Your New Highest Score is:"+val);
                }
                else{
                    
                    let n=localStorage.getItem("name");
                    let v=localStorage.getItem("score");
                    alert(n+" is ahead of you with "+v+" score points but your score is "+val);
                }
            }
            rodp = 650;   val = 0; check=0;ci=0;cj=0;
            document.getElementById('rod1').style.left = rodp + 'px';
            document.getElementById('rod2').style.left = rodp + 'px';
            return ;


        }
        //check if ball in inside screen in y direction
        else if (i + 22 > height) {
            ci = 1;
        }
        else if (i < 0) {
            ci = 0;
        }
        check=1;
        //check if ball is inside screen x direction
        if (j + 22 > width) {
            cj = 1;
        }
        else if (j < 0) {
            cj = 0;
        }
        //we will position the ball accoring to the condition they satisfy
        if (ci == 0 && cj == 0) {
            i += 10;
            j += 10;
            ball.style.top = i + 'px';
            ball.style.left = j + 'px';
        }
        else if (ci == 1 && cj == 0) {
            i -= 10;
            j += 10;
            ball.style.top = i + 'px';
            ball.style.left = j + 'px';
        }
        else if (ci == 0 && cj == 1) {
            i += 10;
            j -= 10;
            ball.style.top = i + 'px';
            ball.style.left = j + 'px';
        }
        else if (ci == 1 && cj == 1) {
            i -= 10;
            j -= 10;
            ball.style.top = i + 'px';
            ball.style.left = j + 'px';
        }
    }, 50);
}
//below function is for movement of both the rod
var rodp = 650;                                                                   //position of rod on x direction
function rodMovement() {
    window.addEventListener("keypress", function (event) {
        //if a is pressed the rods should move left without leaving the screen
        if (event.key == "a" && rodp > 0) {
            rodp -= 10;
            document.getElementById('rod1').style.left = rodp + 'px';
            document.getElementById('rod2').style.left = rodp + 'px';
        }
        //if d is pressed the rods should move right without leaving the screen
        if (event.key == "d" && rodp + 160 < window.innerWidth) {
            rodp += 10;
            document.getElementById('rod1').style.left = rodp + 'px';
            document.getElementById('rod2').style.left = rodp + 'px';
        }
    });
}
//game starts here after click on enter
window.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        
        ballMovement();
        rodMovement();
    }
});

console.log(screen.height, screen.width);