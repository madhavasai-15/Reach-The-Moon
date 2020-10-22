function level6() {
  if (gameState === "level6") {
    rocket2.visible = true;
    if (level6Parts === "Animation") {
      if (level6Animation === "about to Reach the Moon") {
        fill("white");
        textSize(18);
        text("*Video*", 550, 100);
        if (rocket2.y > 320) {
          rocket2.velocityY = -0.5;
        } else if (rocket2.y < 240) {
          rocket2.velocityY = 0;
          level6Animation = "No Fuel";
        }
      } else if (level6Animation === "No Fuel") {
        fill("white");
        textSize(18);
        text("*Video*", 550, 100);
        rocket2.velocityX = -2;
        rocket2.velocityY = 2;
        rocket2.changeAnimation("NoFuel");
        fill("white");
        textSize(16);
        text("No Fuel", rocket2.x + 20, rocket2.y);
        if (rocket2.y > 480) {
          level6Animation = "rocket position reset";
        }
      } else if (level6Animation === "rocket position reset") {
        rocket2.y = -20;
        rocket2.x = 30;
        rocket2.velocityX = 0;
        rocket2.velocityY = 0;
        level6Animation = "rocket landing";

      } else if (level6Animation === "rocket landing") {
        rocket2.velocityY = 1;
        if (rocket2.y > 10) {
          ground1L6.visible = true;
        }
        if (rocket2.y > 30) {
          ground2L6.visible = true;
        }
        if (rocket2.y > 50) {
          ground3L6.visible = true;
        }
        if (rocket2.y > 70) {
          ground4L6.visible = true;
        }
        if (rocket2.y === 138) {
          rocket2.velocityY = 0;
          rocket2.changeAnimation("NoFuel");
          rocket2.setCollider("rectangle", 0, -3, 27, 30);
          level6Animation = "player getting out";
          rocket2.collide(ground1L6);
        }
      } else if (level6Animation === "player getting out") {
        player.x = 30;
        player.y = 138;
        level6Animation = "level6 start";
        rocket2.collide(ground1L6);
      } else if (level6Animation === "level6 start") {
        rocket2.collide(ground1L6);
        level6Parts = "Start";
        player.visible = true;
        fuelCell.visible = true;
        level6start = 1;
      }
    } else if (level6Parts === "Start") {
      //controls of the player
      if (player.y < 130 && player.y > 50) {
        flying6();
      } else if (player.y < 230 && player.y > 150) {
        flying6();
      } else if (player.y < 330 && player.y > 250) {
        flying6();
      } else if (player.y < 430 && player.y > 350) {
        flying6();
      }

      if (keyDown("LEFT_ARROW")) {
        player.x = player.x - 3;
      }
      if (keyDown("RIGHT_ARROW")) {
        player.x = player.x + 3;
      }
      if (keyDown("UP_ARROW")) {
        player.y = player.y - 1.5;
      }

      if (player.isTouching(alien1L6)) {
        playerCarryingFuelcell = "False"
        alien1L6.remove();
        health = health - 5;
        HealthC = 1;
        score = score + 50;
      } else if (player.isTouching(alien2L6)) {
        playerCarryingFuelcell = "False"
        alien2L6.remove();
        health = health - 5;
        HealthC = 1;
        score = score + 50;
      } else if (player.isTouching(alien3L6)) {
        playerCarryingFuelcell = "False"
        alien3L6.remove();
        health = health - 5;
        HealthC = 1;
        score = score + 50;
      } else if (player.isTouching(alien4L6)) {
        playerCarryingFuelcell = "False"
        alien4L6.remove();
        health = health - 5;
        HealthC = 1;
        score = score + 50;
      }

      if (player.isTouching(teleporter1)) {
        player.x = teleporter2.x + 20;
        player.y = alien2L6.y;
      } else if (player.isTouching(teleporter2)) {
        player.x = teleporter1.x - 20;
        player.y = alien1L6.y;
      } else if (player.isTouching(teleporter3)) {
        player.x = teleporter4.x + 20;
        player.y = alien3L6.y;
      } else if (player.isTouching(teleporter4)) {
        player.x = teleporter3.x - 20;
        player.y = alien2L6.y;
      } else if (player.isTouching(teleporter5)) {
        player.x = teleporter6.x + 20;
        player.y = alien4L6.y;
      } else if (player.isTouching(teleporter6)) {
        player.x = teleporter5.x - 20;
        player.y = alien3L6.y;
      }

      if (playerCarryingFuelcell === "False") {
        fill(110, 184, 255);
        textSize(16);
        text("Fuel Cell", 560, 417);
        fill("white");
        textSize(18);
        text("Get the Fuel Cell", 270, 240);
        fuelCell.velocityY = 1;
        if (player.isTouching(fuelCell)) {
          playerCarryingFuelcell = "true";
        }
      }

      if (playerCarryingFuelcell === "true") {
        fill("white");
        textSize(18);
        text("Get back to rocket with fuel Cell!", 200, 240);
        fuelCell.velocityY = 0;
        fuelCell.x = player.x;
        if (player.y < 130 && player.y > 50) {
          fuelCell.y = player.y - 10;
        } else if (player.y < 230 && player.y > 150) {
          fuelCell.y = player.y - 10;
        } else if (player.y < 330 && player.y > 250) {
          fuelCell.y = player.y - 10;
        } else if (player.y < 430 && player.y > 350) {
          fuelCell.y = player.y - 10;
        }

        if (player.y < 450 && player.y > 440) {
          fuelCell.y = 445;
        }else if(player.y < 350 && player.y > 340){
          fuelCell.y = 345;
        }else if(player.y < 250 && player.y > 240){
          fuelCell.y = 245;
        }else if(player.y < 150 && player.y > 140){
          fuelCell.y = 145;
        }

        if (player.isTouching(rocket2)) {
          fuelCell.visible = false;
          if (keyDown("UP_ARROW")) {
            player.visible = false;
            rocket2.velocityY = -1;
            fuel = 100;
            rocket2.changeAnimation("rocketGoing");
          }
        }
      }

      if (rocket2.y < 0) {
        gameState = "playerFalling7";
      }

      player.velocityY = 1;
      fuelCell.collide(ground1L6);
      fuelCell.collide(ground2L6);
      fuelCell.collide(ground3L6);
      fuelCell.collide(ground4L6);
      player.collide(ground1L6);
      player.collide(ground2L6);
      player.collide(ground3L6);
      player.collide(ground4L6);
      player.collide(edges);
      rocket2.collide(ground1L6);
    }

    if (level6start === 1) {
      ground1L6.visible = true;
      ground2L6.visible = true;
      ground3L6.visible = true;
      ground4L6.visible = true;
      alien1L6.visible = true;
      alien2L6.visible = true;
      alien3L6.visible = true;
      alien4L6.visible = true;
      teleporter1.visible = true;
      teleporter2.visible = true;
      teleporter3.visible = true;
      teleporter4.visible = true;
      teleporter5.visible = true;
      teleporter6.visible = true;
    }
  }
}

function flying6() {
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

function level6End(){
  ground1L6.visible = false;
  ground2L6.visible = false;
  ground3L6.visible = false;
  ground4L6.visible = false;
  alien1L6.visible = false;
  alien2L6.visible = false;
  alien3L6.visible = false;
  alien4L6.visible = false;
  teleporter1.visible = false;
  teleporter2.visible = false;
  teleporter3.visible = false;
  teleporter4.visible = false;
  teleporter5.visible = false;
  teleporter6.visible = false;
}