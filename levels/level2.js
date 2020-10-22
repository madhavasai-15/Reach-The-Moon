function level2Start() {
  LockedT.visible = true;
  teleporter.visible = true;
  ground1L2.visible = true;
  ground2L2.visible = true;
  ground3L2.visible = true;
  ground4L2.visible = true;
  ground5L2.visible = true;
  ground6L2.visible = true;
  wall1L2.visible = true;
  wall2L2.visible = true;
  wall3L2.visible = true;
  lava2.visible = true;
  key2.visible = true;
  glass2.visible = true;
  alien1L2.visible = true;
  alien2L2.visible = true;
  alien3L2.visible = true;
  alien4L2.visible = true;
  alien5L2.visible = true;
  jumpPad3.visible = true;
  jumpPad4.visible = true;
  jumpPad5.visible = true;
  LockedT.x = 20;
  LockedT.y = 228;
  teleporter.x = 20;
  teleporter.y = 228;
}

function level2() {
  if (gameState === "level2") {

    //controls of the player
    if (player.y > 263 && player.y < 336 && player.x > 400) {
      flying2();
    } else if (player.y > 163 && player.y < 238 && player.x > 400) {
      flying2();
    } else if (player.y > 49 && player.y < 137) {
      flying2();
    } else if (player.y > 160 && player.y < 339 && player.x < 251) {
      flying2();
    }

    if (keyDown("UP_ARROW")) {
      player.y = player.y - 1.5;
    }
    if (keyDown("LEFT_ARROW")) {
      player.x = player.x - 3;
    }
    if (keyDown("RIGHT_ARROW")) {
      player.x = player.x + 3;
    }


    if (player.isTouching(alien1L2)) {
      alien1L2.remove();
      health = health - 5;
      score = score + 20;
    } else if (player.isTouching(alien2L2)) {
      alien2L2.remove();
      health = health - 5;
      score = score + 40;
    } else if (player.isTouching(alien3L2)) {
      alien3L2.remove();
      health = health - 5;
      score = score + 60;
    } else if (player.isTouching(alien4L2)) {
      alien4L2.remove();
      health = health - 5;
      score = score + 80;
    } else if (player.isTouching(alien5L2)) {
      alien5L2.remove();
      health = health - 5;
      score = score + 100;
    }

    if (player.isTouching(glass2)) {
      glass2.remove();
      key2.velocityY = 1;
    } else if (player.isTouching(key2)) {
      key2.remove();
      keySlot = 1;
    }

    if (player.isTouching(lava2)) {
      player.x = 181;
      player.y = 166;
    }

    if (keySlot === 0) {
      LockedT.visible = true;
      if (player.isTouching(jumpPad3)) {
        if (keyDown("UP_ARROW")) {
          player.y = player.y - 100;
          jumpPadSE = 3;
        }
      } else if (player.isTouching(jumpPad4)) {
        if (keyDown("UP_ARROW")) {
          player.y = player.y - 100;
          jumpPadSE = 4;
        }
      }
    } else if (keySlot === 1) {
      flying2();
      LockedT.visible = false;
      if (player.y < 150) {
        ground5L2.x = 710;
      } else if (player.y > 160) {
        ground5L2.x = 320;
      }
      if (player.isTouching(jumpPad5)) {
        if (keyDown("UP_ARROW")) {
          player.y = player.y - 100;
          jumpPadSE = 5;
        }
      }
      if (player.isTouching(teleporter)) {
        player.x = 20;
        player.y = 350;
        gameState = "playerFalling3";
      }
    }

    //gravity
    player.velocityY = 1;

    player.collide(edges);
    player.collide(ground1L2);
    player.collide(ground2L2);
    player.collide(ground3L2);
    player.collide(ground4L2);
    player.collide(ground5L2);
    player.collide(ground6L2);
    player.collide(wall1L2);
    player.collide(wall2L2);
    player.collide(wall3L2);
    key2.collide(ground5L2);
  }
}

function flying2() {
  if (keyDown("LEFT_ARROW")) {
    player.x = player.x - 1;
    player.changeAnimation("playerLeft");
    player.setCollider("circle", -5, 5, 5);
  }
  if (keyDown("RIGHT_ARROW")) {
    player.x = player.x + 1;
    player.changeAnimation("playerRight");
    player.setCollider("circle", 5, 5, 5);
  }
}

function level2End() {
  LockedT.visible = false;
  teleporter.visible = false;
  ground1L2.visible = false;
  ground2L2.visible = false;
  ground3L2.visible = false;
  ground4L2.visible = false;
  ground5L2.visible = false;
  ground6L2.visible = false;
  wall1L2.visible = false;
  wall2L2.visible = false;
  wall3L2.visible = false;
  lava2.visible = false;
  key2.visible = false;
  glass2.visible = false;
  alien1L2.visible = false;
  alien2L2.visible = false;
  alien3L2.visible = false;
  alien4L2.visible = false;
  alien5L2.visible = false;
  jumpPad3.visible = false;
  jumpPad4.visible = false;
  jumpPad5.visible = false;
}