var randomNumber1 = Math.floor((Math.random())*6+1);

document.getElementById("img1").src = "images/dice"+randomNumber1+".png";

var randomNumber2 = Math.floor((Math.random())*6+1);

document.getElementById("img2").src = "images/dice"+randomNumber2+".png";


if (randomNumber1 == randomNumber2){
  document.getElementById("result").innerHTML = "DRAW";
}
else if (randomNumber1 < randomNumber2){
  document.getElementById("result").innerHTML = "Cierra wins";
}
else {
  document.getElementById("result").innerHTML = "Edwin wins";
}
