var winner=["Lipsa","Twinkle","Ashu","Nandu"];
function name(player1,player2){
  var player11=player1.slice(0,1).toUpperCase()+player1.slice(1,player1.length).toLowerCase();
  var player22=player2.slice(0,1).toUpperCase()+player2.slice(1,player2.length).toLowerCase();
  
document.querySelectorAll("p")[0].innerHTML=player11;
document.querySelectorAll("p")[1].innerHTML=player22;

if(winner.includes(player11)){
 var Randomnumber1=6;
  document.querySelectorAll("img")[0].setAttribute("src","https://miro.medium.com/max/320/1*15_KIo9vPHULoA98NYT9jQ.png");
}
else{

var number1=[1,2,3,4,5,6];
var dicegame1=Math.floor(Math.random()*number1.length);
 Randomnumber1=number1[dicegame1];
switch(Randomnumber1){
  case 1:
  document.querySelectorAll("img")[0].setAttribute("src","https://miro.medium.com/max/320/1*5i3bBsz_bMcGQ-UgDMCzQA.png");
  break ;
  case 2:
     document.querySelectorAll("img")[0].setAttribute("src","https://miro.medium.com/max/512/1*dqZhjZbsbEBDXzKQPAagXw.png");
  break ;
  case 3:
    document.querySelectorAll("img")[0].setAttribute("src","https://miro.medium.com/max/320/1*DrPdeWaJON0XbtmiEZc3jw.png");
  break ;
  case 4:
       document.querySelectorAll("img")[0].setAttribute("src","https://miro.medium.com/max/320/1*5w7bpE0KdwXc21zUQoOtOw.png");
  break ;
  case 5:
    document.querySelectorAll("img")[0].setAttribute("src","https://miro.medium.com/max/320/1*UYR8l1h7AI4MNtJWAugyjg.png");
  break ;
  case 6:
    document.querySelectorAll("img")[0].setAttribute("src","https://miro.medium.com/max/320/1*15_KIo9vPHULoA98NYT9jQ.png");
  break ;
 default :
 document.write("invalid");
}
}

if(winner.includes(player22)){
  var Randomnumber2=6;
  document.querySelectorAll("img1")[1].setAttribute("src","https://miro.medium.com/max/320/1*15_KIo9vPHULoA98NYT9jQ.png");
}
else{

var number2=[1,2,3,4,5,6];
var dicegame2=Math.floor(Math.random()*number2.length);
Randomnumber2=number2[dicegame2];
switch(Randomnumber2){
  case 1:
  document.querySelectorAll("img")[1].setAttribute("src","https://miro.medium.com/max/320/1*5i3bBsz_bMcGQ-UgDMCzQA.png");
  break ;
  case 2:
     document.querySelectorAll("img")[1].setAttribute("src","https://miro.medium.com/max/512/1*dqZhjZbsbEBDXzKQPAagXw.png");
  break ;
  case 3:
    document.querySelectorAll("img")[1].setAttribute("src","https://miro.medium.com/max/320/1*DrPdeWaJON0XbtmiEZc3jw.png");
  break ;
  case 4:
       document.querySelectorAll("img")[1].setAttribute("src","https://miro.medium.com/max/320/1*5w7bpE0KdwXc21zUQoOtOw.png");
  break ;
  case 5:
    document.querySelectorAll("img")[1].setAttribute("src","https://miro.medium.com/max/320/1*UYR8l1h7AI4MNtJWAugyjg.png");
  break ;
  case 6:
    document.querySelectorAll("img")[1].setAttribute("src","https://miro.medium.com/max/320/1*15_KIo9vPHULoA98NYT9jQ.png");
  break ;
 default :
 document.write("invalid");
}
}

 if(Randomnumber1>Randomnumber2){
  document.querySelector("h1").innerHTML="⛳ "+player11 + " is winner";
}
else if(Randomnumber1<Randomnumber2){
 document.querySelector("h1").innerHTML=player22+" is winner ⛳";
}
else{
 document.querySelector("h1").innerHTML="⛳oops you both are winner⛳";
}
return;
}
name(prompt("player 1 name"),prompt("player 2 name"));
