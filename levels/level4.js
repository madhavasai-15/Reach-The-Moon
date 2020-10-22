function level4Start() {
  ground1L4.visible = true;
  ground2L4.visible = true;
  ground3L4.visible = true;
  ground4L4.visible = true;
  ground5L4.visible = true;
  wall1L4.visible = true;
  wall2L4.visible = true;
  rocket1.visible = false;
}

function level4() {
  if (gameState === "level4") {
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

    player.velocityY = 1;

    if (roomL4 === 0) {
      ground1L4.visible = true;
      ground2L4.visible = true;
      ground3L4.visible = true;
      ground4L4.visible = true;
      ground5L4.visible = true;
      wall1L4.visible = true;
      wall2L4.visible = true;
      rocket1.visible = true;
      if (player.x < -10) {
        ground1L4.visible = false;
        ground2L4.visible = false;
        ground3L4.visible = false;
        ground4L4.visible = false;
        ground5L4.visible = false;
        wall1L4.visible = false;
        wall2L4.visible = false;
        rocket1.visible = false;
        player.x = 645;
        player.y = 260;
        roomL4 = 1;
        teleporter.visible = true;
        teleporter.x = 50;
        teleporter.y = 295;
      }
      player.collide(ground1L4);
      player.collide(ground2L4);
      player.collide(ground3L4);
      player.collide(ground4L4);
      player.collide(ground5L4);
      player.collide(wall1L4);
      player.collide(wall2L4);
    } else if (roomL4 === 1) {
      ground6L4.visible = true;
      ground7L4.visible = true;
      ground8L4.visible = true;
      ground9L4.visible = true;
      wall3L4.visible = true;
      wall4L4.visible = true;
      alien1L4.visible = true;
      alien2L4.visible = true;
      alien3L4.visible = true;
      alien4L4.visible = true;
      alien5L4.visible = true;
      alien6L4.visible = true;
      alien7L4.visible = true;
      if (player.isTouching(teleporter)) {
        player.x = 620;
        player.y = 160;
      }

      if (player.isTouching(alien1L4)) {
        alien1L4.remove();
        score = score + 100;
      } else if (player.isTouching(alien2L4)) {
        alien2L4.remove();
        score = score + 100;
      } else if (player.isTouching(alien3L4)) {
        alien3L4.remove();
        score = score + 100;
      } else if (player.isTouching(alien3L4)) {
        alien4L4.remove();
        score = score + 100;
      } else if (player.isTouching(alien4L4)) {
        alien4L4.remove();
        score = score + 100;
      } else if (player.isTouching(alien5L4)) {
        alien5L4.remove();
        score = score + 100;
      } else if (player.isTouching(alien6L4)) {
        alien6L4.remove();
        score = score + 100;
      } else if (player.isTouching(alien7L4)) {
        alien7L4.remove();
        score = score + 100;
      }

      if (player.x < 0) {
        ground6L4.visible = false;
        ground7L4.visible = false;
        ground8L4.visible = false;
        ground9L4.visible = false;
        wall3L4.visible = false;
        wall4L4.visible = false;
        alien1L4.visible = false;
        alien2L4.visible = false;
        alien3L4.visible = false;
        alien4L4.visible = false;
        alien5L4.visible = false;
        alien6L4.visible = false;
        alien7L4.visible = false;
        roomL4 = 2;
        player.x = 645;
        player.y = 111;
      }

      player.collide(ground6L4);
      player.collide(ground7L4);
      player.collide(ground8L4);
      player.collide(ground9L4);
      player.collide(wall3L4);
      player.collide(wall4L4);
    } else if (roomL4 === 2) {
      ground1L4.visible = true;
      ground2L4.visible = true;
      ground3L4.visible = true;
      ground4L4.visible = true;
      ground5L4.visible = true;
      wall1L4.visible = true;
      wall2L4.visible = true;
      rocket1.visible = true;
      teleporter.visible = false;

      if (player.isTouching(rocket1)) {
        if (keyDown("UP_ARROW")) {
          player.visible = false;
          rocket1.addImage("rocket1", playerInsideRocketImg);
        }
        if (keyWentUp("UP_ARROW")) {
          rocket1.velocityY = -1;
          rocket1.changeAnimation("rocketFlying");
          fuelVisi = "true";
        }
      }

      if (rocket1.y < 0) {
        player.x = start5.x;
        player.y = start5.y;
        gameState = "playerFalling5";
      }

      player.collide(ground1L4);
      player.collide(ground2L4);
      player.collide(ground3L4);
      player.collide(ground4L4);
      player.collide(ground5L4);
      player.collide(wall1L4);
      player.collide(wall2L4);
    }
  }
}

function level4End() {
  ground1L4.visible = false;
  ground2L4.visible = false;
  ground3L4.visible = false;
  ground4L4.visible = false;
  ground5L4.visible = false;
  ground6L4.visible = false;
  ground7L4.visible = false;
  ground8L4.visible = false;
  ground9L4.visible = false;
  wall1L4.visible = false;
  wall2L4.visible = false;
  wall3L4.visible = false;
  wall4L4.visible = false;
  rocket1.visible = false;
  alien1L4.visible = false;
  alien2L4.visible = false;
  alien3L4.visible = false;
  alien4L4.visible = false;
  alien5L4.visible = false;
  alien6L4.visible = false;
  alien7L4.visible = false;
}