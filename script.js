// css class for different card image
const CARD_TECHS = [
  'html5',
  'css3',
  'js',
  'sass',
  'nodejs',
  'react',
  'linkedin',
  'heroku',
  'github',
  'aws'
];

// only list out some of the properties,
// add more when needed
const game = {
  score: 0,
  level: 1,
  timer: 60,
  timeWidth:100,
  preSelected:null,
  checkMatching:false,
  gameStart:false,
  cardFilpNum: 0,
  timerDisplay: null,
  scoreDisplay: null,
  levelDisplay: null,
  timerInterval: null,
  startButton: null

  // and much more
};

setGame();

/*******************************************
/     game process
/******************************************/
function setGame() {
  // register any element in your game object
}
var statusButton = document.querySelector(".game-stats__button");
var gameInstruction = document.querySelector(".game-instruction");
var gameBoard = document.querySelector(".game-board");
var timebar = document.querySelector(".game-timer__bar");
var scorebar= document.querySelector(".game-stats__score--value");
var levelbar= document.querySelector(".game-stats__level--value");



function handleCardFlip() {}

function nextLevel() {
  if(game.level==1){
    game.level++
    gameBoard.innerHTML= '<div class="card html5" data-tech="html5"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card css3" data-tech="css3"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card react" data-tech="react"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card linkedin" data-tech="linkedin"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card sass" data-tech="sass"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card linkedin" data-tech="linkedin"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card js" data-tech="js"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card sass" data-tech="sass"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card css3" data-tech="css3"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card nodejs" data-tech="nodejs"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card heroku" data-tech="heroku"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card html5" data-tech="html5"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card heroku" data-tech="heroku"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card js" data-tech="js"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card react" data-tech="react"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card nodejs" data-tech="nodejs"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div>';
    gameBoard.style.gridTemplateColumns = "repeat(4, 1fr)";
    
    levelbar.innerHTML=game.level;
    
    game.timeWidth=100;
   
      cards = document.querySelectorAll(".card");
      bindCardClick();
      game.timer=60;

  }
  if(game.level==3){
    game.level++
    gameBoard.innerHTML= ' <div class="card css3" data-tech="css3"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card aws" data-tech="aws"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card html5" data-tech="html5"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card css3" data-tech="css3"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div> </div><div class="card html5" data-tech="html5"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card sass" data-tech="sass"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card aws" data-tech="aws"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card react" data-tech="react"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card linkedin" data-tech="linkedin"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card sass" data-tech="sass"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card linkedin" data-tech="linkedin"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card js" data-tech="js"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card sass" data-tech="sass"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card css3" data-tech="css3"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card nodejs" data-tech="nodejs"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card heroku" data-tech="heroku"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card github" data-tech="github"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card heroku" data-tech="heroku"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card js" data-tech="js"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card react" data-tech="react"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card nodejs" data-tech="nodejs"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card css3" data-tech="css3"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card react" data-tech="react"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card linkedin" data-tech="linkedin"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card sass" data-tech="sass"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card linkedin" data-tech="linkedin"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card js" data-tech="js"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card html5" data-tech="html5"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card github" data-tech="github"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card nodejs" data-tech="nodejs"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card heroku" data-tech="heroku"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card html5" data-tech="html5"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card heroku" data-tech="heroku"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card js" data-tech="js"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card react" data-tech="react"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card nodejs" data-tech="nodejs"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div>';
  
    gameBoard.style.gridTemplateColumns = "repeat(6, 1fr)";
    game.timeWidth=100;
    levelbar.innerHTML=3;
    cards = document.querySelectorAll(".card");
      bindCardClick();
      game.timer=60;
 

  }

}
/*******************************************
/     UI update
/******************************************/
function updateScore() {
  game.score+=game.timer;
      game.scoreDisplay=game.score;
      scorebar.innerHTML=game.scoreDisplay;
}



function handleGameOver(gameinterval) {

  alert("Congratulations, your score is "+game.score);
  clearInterval(gameinterval);
  
}

function updateTimerDisplay(timer) {


    game.timer--
    game.timerDisplay=game.timer;
    timebar.innerHTML=game.timerDisplay+"s";
    game.timeWidth-=1/60*100;
    timebar.style.width=game.timeWidth+"%"
    if(game.timerDisplay==-1){   
      handleGameOver(timer);
    }
    }


function startGame() {
  var timeCount = setInterval(function(){
    game.timer--
    game.timerDisplay=game.timer;
    timebar.innerHTML=game.timerDisplay+"s";
    game.timeWidth-=1/60*100;
    timebar.style.width=game.timeWidth+"%"
    if(game.timerDisplay==0){
     
      handleGameOver(timeCount);
    
   
 
    }
  }
    
  , 1000);

  
  game.gameStart=true;   
  gameInstruction.remove();
  gameBoard.innerHTML= '<div class="card css3" data-tech="css3"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card html5" data-tech="html5"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card css3" data-tech="css3"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div> </div><div class="card html5" data-tech="html5"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div>'
  gameBoard.style.gridTemplateColumns = "repeat(2,1fr)";
  statusButton.innerHTML="End Game"

    
   
  cards = document.querySelectorAll(".card");
  bindCardClick();

  
  statusButton.removeEventListener('click',StartButtonClick);
  statusButton.addEventListener('click',EndButtonClick);
  
  
  
}


function bindStartButton() { 



    statusButton.addEventListener("click", StartButtonClick)
    
}
function StartButtonClick(){
 

  startGame();
       

}

function EndButtonClick(time){
 handleGameOver(time);
 statusButton.innerHTML="Start Game"
 statusButton.removeEventListener('click',EndButtonClick);
 statusButton.addEventListener("click", StartButtonClick)
 game.timerDisplay=game.timer;

}






bindStartButton();




function unBindCardClick(card) {
  card.removeEventListener('click',handleCardClick);

}

function handleCardClick(){
  if(game.checkMatching){
    return;
  }
  this.classList.add('card--flipped');
  const currentSelected =this;
  //check click same card
  if(currentSelected ===game.preSelected){
    currentSelected.classList.remove('card--flipped');
    game.preSelected =null;
    return;
  }
  //check second card
  if(game.preSelected){
    //match
    if(game.preSelected.dataset.tech===currentSelected.dataset.tech){
      console.log("match");
      unBindCardClick(game.preSelected);
      unBindCardClick(currentSelected);
      updateScore();

      game.cardFilpNum+=1;
      console.log(game.cardFilpNum);
      if(game.cardFilpNum>1){
        
        nextLevel();
    
      }
      if(game.cardFilpNum==10){
        game.level=3;
        
        nextLevel();
     
      }
    
      game.preSelected=null;
      return;
    }
    game.checkMatching=true;
    //not match display card for 1 sec
    setTimeout(()=>{
      
      currentSelected.classList.remove('card--flipped');
      game.preSelected.classList.remove('card--flipped');    
      game.preSelected=null;
      game.checkMatching =false;
    },1000);
    return;

  }

  game.preSelected=currentSelected;
}



function bindCardClick() {
  cards.forEach(card => {
    card.addEventListener('click',handleCardClick);
  
  });



}
