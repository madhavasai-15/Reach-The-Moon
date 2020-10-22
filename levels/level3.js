function level3Start() {
  ground1L3.visible = true;
  ground2L3.visible = true;
  lava3.visible = true;
  parkour1.visible = true;
  LockedT.visible = true;
  teleporter.visible = true;
  LockedT.x = 600;
  LockedT.y = 103;
  teleporter.x = 600;
  teleporter.y = 103;
}

function level3() {
  if (gameState === "level3") {
    
    if (player.y < 408 && player.y > 132){
      flying3();
    }else if(player.y < 114 && player.y > 48){
      flying3();
    }
    
    //controls of the player
    if (keyDown("LEFT_ARROW")) {
      player.x = player.x - 2;
    }
    if (keyDown("RIGHT_ARROW")) {
      player.x = player.x + 2;
    }
    if (keyDown("UP_ARROW")) {
      player.y = player.y - 2;
    }

    if (player.isTouching(lava3)) {
      player.x = 20;
      player.y = 380;
    }

    if (player.isTouching(parkour1Area)) {
      coin1.visible = true;
      coin1.velocityY = 1;
      parkour2.visible = true;
      if (player.isTouching(coin1)) {
        coin1.remove();
        score = score + 50;
      }
      player.collide(parkour1);
    } else if (player.isTouching(parkour2Area)) {
      coin2.visible = true;
      coin2.velocityY = 1;
      parkour3.visible = true;
      if (player.isTouching(coin2)) {
        coin2.remove();
        score = score + 50;
      }
      player.collide(parkour2);
    } else if (player.isTouching(parkour3Area)) {
      parkour4.visible = true;
      player.collide(parkour3);
    } else if (player.isTouching(parkour4Area)) {
      coin3.visible = true;
      coin3.velocityY = 1;
      parkour5.visible = true;
      if (player.isTouching(coin3)) {
        coin3.remove();
        score = score + 50;
      }
      player.collide(parkour4);
    } else if (player.isTouching(parkour5Area)) {
      coin4.visible = true;
      coin4.velocityY = 1;
      jumpPad6.visible = true;
      jumpPad6.velocityY = 1;
      parkour6.visible = true;
      if (player.isTouching(coin4)) {
        coin4.remove();
        score = score + 50;
      }
      if (player.isTouching(jumpPad6)) {
        if (keyDown("UP_ARROW")) {
          player.y = player.y -110;
          jumpPadSE = 6;
        }
      }
      player.collide(parkour5);
    } else if (player.isTouching(parkour6Area)) {
      coin5.visible = true;
      coin5.velocityY = 1;
      parkour6.visible = true;
      parkour7.visible = true;
      if (player.isTouching(coin5)) {
        coin5.remove();
        score = score + 50;
      }
      player.collide(parkour6);
    } else if (player.isTouching(parkour7Area)) {
      coin6.visible = true;
      coin6.velocityY = 1;
      parkour8.visible = true;
      if (player.isTouching(coin6)) {
        coin6.remove();
        score = score + 50;
      }
      player.collide(parkour7);
    } else if (player.isTouching(parkour8Area)) {
      parkour9.visible = true;
      
      player.collide(parkour8);
    } else if (player.isTouching(parkour9Area)) {
      coin7.visible = true;
      coin7.velocityY = 1;
      parkour10.visible = true;
      if (player.isTouching(coin7)) {
        coin7.remove();
        score = score + 50;
      }
      player.collide(parkour9);
    } else if (player.isTouching(parkour10Area)) {
      coin8.visible = true;
      coin8.velocityY = 1;
      jumpPad7.visible = true;
      jumpPad7.velocityY = 1;
      parkour10.visible = true;
      if (player.isTouching(coin8)) {
        coin8.remove();
        score = score + 50;
      }
      if (player.isTouching(jumpPad7)) {
        if (keyDown("UP_ARROW")) {
          player.y = player.y - 170;
          LockedT.visible = false;
          jumpPadSE = 7;
        }
      }
      player.collide(parkour10);
    }
    
    if (player.isTouching(teleporter)) {
      player.x = 110;
      player.y = 236;
      gameState = "playerFalling4"
    }
     
    player.velocityY = 1;
    
    coin1.collide(parkour1);
    coin2.collide(parkour2);
    coin3.collide(parkour4);
    coin4.collide(parkour5);
    coin5.collide(parkour6);
    coin6.collide(parkour7);
    coin7.collide(parkour9);
    coin8.collide(parkour10);
    jumpPad6.collide(parkour5);
    jumpPad7.collide(parkour10);
    player.collide(edges);
    player.collide(ground1L3);
    player.collide(ground2L3);
  }
}

function flying3(){
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

function level3End() {
  ground1L3.visible = false;
  ground2L3.visible = false;
  parkour1.visible = false;
  parkour2.visible = false;
  parkour3.visible = false;
  parkour4.visible = false;
  parkour5.visible = false;
  parkour6.visible = false;
  parkour7.visible = false;
  parkour8.visible = false;
  parkour9.visible = false;
  parkour10.visible = false;
  coin1.visible = false;
  coin2.visible = false;
  coin3.visible = false;
  coin4.visible = false;
  coin5.visible = false;
  coin6.visible = false;
  coin7.visible = false;
  lava3.visible = false;
  LockedT.visible = false;
  teleporter.visible = false;
  jumpPad6.visible = false;
  jumpPad7.visible = false;
}