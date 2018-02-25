
var a=[];
var turn = false;
var xwin=0;
var xlost=0;
var owin=0;
var olost=0;
var game='on';
populateArray();
function play(event){
  if (!event.target.innerText) {
    document.getElementById('status').innerText='Game in progress';
    event.target.innerText = turn ? "O" : "X";
    turn= !turn;
    var x=event.target.id;
    a[x]=document.getElementById(x).innerText;
    if(game=='on'){
      verify(a[x]);
    }
    else{
      document.getElementById(x).innerText='';
      alert('This Game is Over. Click Restart for new Game!');
    }
  }
}
function populateArray (){
for (var i=0; i<10; i++) {
    a.push(Math.round(Math.random() * 50))
  }
}
function verify(p){
  if ( (a[0] == a[1]  && a[1]==a[2])  || (a[3] == a[4] && a[4]==a[5]) || (a[6] == a[7] && a[7]==a[8]) ||
       (a[0] == a[3]  && a[3]==a[6])  || (a[1] == a[4] && a[4]==a[7]) || (a[2] == a[5] && a[5]==a[8]) ||
       (a[0] == a[4]  && a[4]==a[8])  || (a[2] == a[4] && a[4]==a[6]) ){
          console.log('Match!!');
          document.getElementById('ticTableid').style.color='red';
          decider(p);
          game ='over';
          return true;
  }
  else console.log('NO one wins!');
}
function decider (p) {
  if (p=='X') {
    xwin++;
    olost++;
    document.getElementById('status').innerText='Player 1 wins';
    document.getElementById('Xwin').innerText=xwin.toString();
    document.getElementById('Olost').innerText=olost.toString();
  }
  else  {
    owin++;
    xlost++;
    document.getElementById('status').innerText='Player 2 wins';
    document.getElementById('Owin').innerText=owin.toString();
    document.getElementById('Xlost').innerText=xlost.toString();
  }
}
function newGame(){
 xwin=0;
 xlost=0;
 owin=0;
 olost=0;
 document.getElementById('Xwin').innerText=xwin.toString();
 document.getElementById('Olost').innerText=olost.toString();
 document.getElementById('Owin').innerText=owin.toString();
 document.getElementById('Xlost').innerText=xlost.toString();
 Restart();
}
function Restart() {
  game='on';
  a=[];
  populateArray();
  document.getElementById('status').innerText='';

  for(var i=0;i<10 ; i++) {
      if(document.getElementById(i).innerText!='') {
      document.getElementById(i).innerText='';
      }
    document.getElementById('ticTableid').style.color='black';
  }
}
