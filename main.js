//collect one random number inside  one variable
var y= Math.floor(Math.random()*100+1)


//no of times to guess that number
var guess=1;

document.getElementById("submitguess").onclick=function(){

    // user enter a number


    var x =document.getElementById("guessField").value;


    if(x==y){
        alert("Congratulations!! you have got the number in  " + guess + "Times.")
    }

    else if(x>y){
        guess++;
        alert("Sorry!! Try a smaller Number!");
    }

    else{
        guess++;
        alert("Sorry!! Try a larger Number!");
    }
}

