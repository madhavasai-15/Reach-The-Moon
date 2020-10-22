//function for Level 1 start
function Level1Start() {
  ground1L1.visible = true;
  ground2L1.visible = true;
  ground3L1.visible = true;
  ground4L1.visible = true;
  jumpPad1.visible = true;
  jumpPad2.visible = true;
  alien1.visible = true;
  alien2.visible = true;
  alien3.visible = true;
  alien4.visible = true;
  killer1.visible = true;
  killer2.visible = true;
  killer3.visible = true;
  killer4.visible = true;
  lava1.visible = true;
  key1.visible = true;
  glass1.visible = true;
  LockedT.visible = true;
}

//function for level1
function Level1() {
  if (gameState === "level1") {
    
    if(keySlot === 0){
      if(player.y > 310 && player.y < 408){
        flying1();
      }else if(player.y > 176 && player.y < 278){
        flying1();
      }else if(player.y > 49 && player.y < 146){
        flying1();
      }
    }
    
    //controls of the player
    if (keyDown("LEFT_ARROW")) {
      player.x = player.x - 3;
    }
    if (keyDown("RIGHT_ARROW")) {
      player.x = player.x + 3;
    }
    if (keyDown("UP_ARROW")) {
        player.y = player.y - 1.5;
    }
    
    //alien's work 
    if (player.isTouching(alien1)) {
      alien1.remove();
      health = health - 5;
      HealthC = 1;
      score = score + 100;
    } else if (player.isTouching(alien2)) {
      alien2.remove();
      health = health - 5;
      HealthC = 1;
      score = score + 100;
    } else if (player.isTouching(alien3)) {
      alien3.remove();
      health = health - 5;
      HealthC = 1;
      score = score + 50;
    } else if (player.isTouching(alien4)) {
      alien4.remove();
      health = health - 5;
      HealthC = 1;
      score = score + 50;
    } else if (player.isTouching(alien5)){
      alien5.remove();
      health = health - 5;
      HealthC = 1;
      score = score + 50;
    }

    if (player.isTouching(killer1)) {
      player.x = 22;
      player.y = 407;
      health = health - 10;
      HealthC = 1;
    }else if (player.isTouching(killer2)) {
      player.x = 589;
      player.y = 228;
      health = health - 10;
      HealthC = 1;
    }else if (player.isTouching(killer3)) {
      player.x = 589;
      player.y = 228;
      health = health - 10;
      HealthC = 1;
    }else if (player.isTouching(killer4)) {
      player.x = 19;
      player.y = 104;
      health = health - 10;
      HealthC = 1;
    }

    if (player.isTouching(lava1)) {
      player.x = 20;
      player.y = 350;
      health = health - 3;
      HealthC = 1;
    }

    if (player.isTouching(glass1)) {
      glass1.remove();
      key1.velocityY = 1;
    } else if (player.isTouching(key1)) {
      key1.remove();
      keySlot = 1;
    }

    if (keySlot === 0) {
      //jumpPad's work 
      if (player.isTouching(jumpPad1)) {
        if (keyDown("UP_ARROW")) {
          player.y = player.y - 120;
          jumpPadSE = 1;
        }
      } else if (player.isTouching(jumpPad2)) {
        if (keyDown("UP_ARROW")) {
          player.y = player.y - 120;
          jumpPadSE = 2;
        }
      }
    } else if (keySlot === 1) {
      ground3L1.x = 250;
      ground4L1.x = 250;
      teleporter.visible = true;
      LockedT.visible = false;
      if (player.y > 300) {
        ground3L1.x = 320;
        ground4L1.x = 320;
      }
      if (player.y < 350 && player.y > 180) {
        player.velocityY = 3;
      }

      if (player.isTouching(teleporter)) {
        player.x = 600;
        player.y = 320;
        gameState = "playerFalling2";
      }
    }
     
    //gravity
    player.velocityY = 1;

    //variables colliding with assigned variabels
    player.collide(edges);
    player.collide(ground1L1);
    player.collide(ground2L1);
    player.collide(ground3L1);
    player.collide(ground4L1);
    jumpPad1.collide(ground2L1);
    jumpPad2.collide(ground3L1);
    glass1.collide(ground4L1);
    key1.collide(ground4L1);
  }
}

function flying1(){
  if (keyDown("LEFT_ARROW")) {
    player.x = player.x - 1;
    player.changeAnimation("playerLeft");
    player.setCollider("circle",-5,5,5);
  }
  if (keyDown("RIGHT_ARROW")) {
    player.x = player.x + 1;
    player.changeAnimation("playerRight");
    player.setCollider("circle",5,5,5);
  }
}

function level1Restart(){
  
}

function level1End() {
  ground1L1.visible = false;
  ground2L1.visible = false;
  ground3L1.visible = false;
  ground4L1.visible = false;
  jumpPad1.visible = false;
  jumpPad2.visible = false;
  alien1.visible = false;
  alien2.visible = false;
  alien3.visible = false;
  alien4.visible = false;
  killer1.visible = false;
  killer2.visible = false;
  killer3.visible = false;
  killer4.visible = false;
  lava1.visible = false;
  key1.visible = false;
  glass1.visible = false;
  LockedT.visible = false;
  keySlot = 0;
}