//JS code goes here


var turn = false;
// var
function play(event){
  if (!event.target.innerText)
  {
    event.target.innerText = turn ? "O" : "1";
    turn= !turn;

  }

}
