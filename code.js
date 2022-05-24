var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8229d2a0-b80b-4893-809d-67ad0c2d910c","8bb7e39f-b018-4e11-bacc-12947c3ea5ba","fe43a06c-6a55-4cdc-9a5e-966de311bff5"],"propsByKey":{"8229d2a0-b80b-4893-809d-67ad0c2d910c":{"name":"ball2","sourceUrl":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png"},"8bb7e39f-b018-4e11-bacc-12947c3ea5ba":{"name":"cruzeirense","sourceUrl":null,"frameSize":{"x":217,"y":380},"frameCount":1,"looping":true,"frameDelay":12,"version":"Yw3ZIrwkZDQjj6hWD8sgc5yc5kl15jxt","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":217,"y":380},"rootRelativePath":"assets/8bb7e39f-b018-4e11-bacc-12947c3ea5ba.png"},"fe43a06c-6a55-4cdc-9a5e-966de311bff5":{"name":"kid_2_walking_1","sourceUrl":null,"frameSize":{"x":252,"y":422},"frameCount":1,"looping":true,"frameDelay":12,"version":"nfrMFnD5FGR7l0gy1S7ATlPgrSyCWpss","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":252,"y":422},"rootRelativePath":"assets/fe43a06c-6a55-4cdc-9a5e-966de311bff5.png"}}};
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

var gamestate = "serve"

var playerPaddle = createSprite(390, 200, 10,70);


var computerPaddle = createSprite(10, 200, 10,70);


var ball = createSprite(200, 200, 15, 15);
ball.setAnimation("ball2");
ball.scale = 0.06



playerPaddle.shapeColor="blue";
computerPaddle.shapeColor="black";
ball.shapeColor = "white"






createEdgeSprites();


function draw() {

background("green");

if ( ball.isTouching(playerPaddle)|| ball.isTouching(computerPaddle)) {
playSound("assets/category_projectile/game_ball_bounce.mp3", false);

    
}

 





if (ball.isTouching(leftEdge)) {
  
  //aumente os pontos do computador
  compScore = compScore +1 
}




//playerPaddle.y = World.mouseY
if (keyDown("up")) {
  playerPaddle.y = playerPaddle.y -8
}
if (keyDown("down")) {
  playerPaddle.y = playerPaddle.y +8
}
if (keyDown("space") && gamestate=="serve") {
  ball.velocityX = -7
ball.velocityY = 6
gamestate= "play"
}
 

rede();


computerPaddle.y = ball.y 
ball.bounceOff(playerPaddle);
ball.bounceOff(computerPaddle);
ball.bounceOff(topEdge)
ball.bounceOff(bottomEdge)










 
  drawSprites();
}

function rede() {
  for (var i = 0; i < 400; i=i+20) {
  line(200, i, 200, i+10);
      
  }
  

    
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
