var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a0c0cf95-9367-425f-9ed4-8ecf09029ef9","d8c66670-9ac9-40f6-a20d-69504a3e78ed"],"propsByKey":{"a0c0cf95-9367-425f-9ed4-8ecf09029ef9":{"name":"soccer_yellow_1","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"ytEOs4XRkhViY12kIQigNehAg1Bn19Mu","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/a0c0cf95-9367-425f-9ed4-8ecf09029ef9.png"},"d8c66670-9ac9-40f6-a20d-69504a3e78ed":{"name":"gradient_23_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ISE_IJMV70UcL_QP6r8mHALHaOwKuOba/category_backgrounds/gradient_23.png","frameSize":{"x":400,"y":350},"frameCount":1,"looping":true,"frameDelay":2,"version":"ISE_IJMV70UcL_QP6r8mHALHaOwKuOba","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":350},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ISE_IJMV70UcL_QP6r8mHALHaOwKuOba/category_backgrounds/gradient_23.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var scene = createSprite(200, 200);
scene.setAnimation("gradient_23_1");

var ball = createSprite(200,200,10,10);
ball.setAnimation("soccer_yellow_1");

var playerPaddle = createSprite(390,200,10,100);
playerPaddle.shapeColor = "yellow";


var computerPaddle = createSprite(10, 200, 10, 100);
computerPaddle.shapeColor = "pink";





var gameState = "serve";



var compScore = 0;
var playerScore = 0;

createEdgeSprites();
  
function draw() {
  background("white");
  textSize(20);
  
  if (gameState == "serve") {
    text("Clique do mouse para lançar",120,180);
  }
  text(compScore, 170,20);
  text(playerScore, 230,20);
  
  playerPaddle.y = World.mouseY;
  
  computerPaddle.y = ball.y;
  
  if(ball.bounceOff(playerPaddle))
  {
    playSound("assets/category_tap/puzzle_game_organic_wood_block_tone_tap_1.mp3");
  }
  
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  
  ball.bounceOff(playerPaddle);
  
  
if(ball.bounceOff(computerPaddle))
  {
    playSound("assets/category_digital/error_3.mp3");
  }
  
  
 ball.bounceOff(computerPaddle);
 
  if(ball.x > 400 || ball.x <0) {
    
    if(ball.x > 400) {
      compScore = compScore + 1; 
    }
    
    if(ball.x < 0) {
      playerScore = playerScore + 1; 
    }
    
    reset();
    gameState = "serve";
  }
  
  if (playerScore == 5 || compScore == 5){
    gameState = "over";
    text("Fim de Jogo!",160,160);
  }
  
  drawSprites();
  
  if (ball.velocityY > -12 && ball.velocityY < 12) {
   ball.velocityX *= 1.05;
   ball.velocityY *= 1.05;
   
   }
  
}

function mousePressed() {
  ball.velocityX = 3;
  ball.velocityY = 4;
  gameState ="play";
}

function reset() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
