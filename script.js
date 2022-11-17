
console.log('game is ready somehow');
let music = new Audio();
let audioTurn = new Audio();
let gameOverAudio = new Audio();

let turn = "❌";
let gameOver = false;
// function to change the turn
const changeTurn = () => {
  return turn==='❌' ? '⭕' : '❌';
}

// function to check for a win[who is the winner]
const checkWin = () => {
  let boxtexts = document.getElementsByClassName('boxtext');
  let wins = [
    [0,1,2 , 5,5,0], [3,4,5 , 5,15,0], [6,7,8 , 5,25,0],
    [0,3,6 , -5,15,90], [1,4,7 , 5,15,90], [2,5,8 , 15,15,90],
    [0,4,8 , 5,15,45], [2,4,6 , 5,15,135]
  ]
  wins.forEach(e => {
    if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText)
      && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText)
      && (boxtexts[e[0]].innerText !== ''))  {
        document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " WON";
        gameOver = true;

        document.querySelector('.imgBox')
        .getElementsByTagName('img')[0].style.width = "200px";

        // line animations depending on the conditions of the win situations
        document.querySelector('.line').style.width = "23vw";
        document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      }
  })
}

// game logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
  let boxText = element.querySelector('.boxtext');
  element.addEventListener('click', (e) => {
    if(boxText.innerText === '') {
      boxText.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if(!gameOver) {
        document.getElementsByClassName('info')[0].innerText = "Turn for "+turn;
      }
    }
  })
})


// adding the reset feature
let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
  // let res = prompt('Are you really want to reset, [type yes to confirm]');
  // if(res == 'yes' || res == 'YES') {
    let boxValues = document.querySelectorAll('.boxtext');
    Array.from(boxValues).forEach(element => {
      element.innerText = '';
    })
    turn = '❌';
    gameOver = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for "+turn;
    document.querySelector('.imgBox')
    .getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.line').style.width = "0";
  // }
})
