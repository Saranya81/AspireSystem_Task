
document.getElementById("rollButton").addEventListener("click", rollDice);
function rollDice(){
  var diceValue1=Math.floor(Math.random()*6)+1;
  var imageSrc="images/"+"dice"+diceValue1+".png";
  var image1=document.querySelectorAll("img")[0];
  image1.setAttribute("src",imageSrc);
  
  var diceValue2=Math.floor(Math.random()*6)+1;
  var imageSrc2="images/"+"dice"+diceValue2+".png";
  var image1=document.querySelectorAll("img")[1];
  image1.setAttribute("src",imageSrc2);

  
  if(diceValue1>diceValue2){
   document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
  }
  else if (diceValue1<diceValue2) {
    document.querySelector("h1").innerHTML="🚩Player 2 Wins!";
  }
  else{
    document.querySelector("h1").innerHTML=" Draw,Try Again!";
  }
}
  



  
  
  