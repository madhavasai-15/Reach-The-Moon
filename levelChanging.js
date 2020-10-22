function levelChanging(){
  //starting of level1
  if (gameState === "playerFalling1") {
    player.velocityY = 3;
    if (player.isTouching(start1)) {
      gameState = "level1";
      Level1Start();
      //level1End();
      //level2Start();
    }
  }
  
  //starting of level2
  if (gameState === "playerFalling2") {
    player.velocityY = 3;
    if (player.isTouching(start2)) {
      gameState = "level2";
      level1End();
      level2Start();
    }
  }
  
  //starting of level3
  if (gameState === "playerFalling3") {
    player.velocityY = 3;
    if (player.isTouching(start3)) {
      gameState = "level3"
      level2End();
      level3Start();
    }
  }
  
  //starting of level4
  if (gameState === "playerFalling4") {
    player.velocityY = 3;
    if (player.isTouching(start4)) {
      gameState = "level4"
      level3End();
      level4Start();
    }
  }
  
  //starting of level5
  if (gameState === "playerFalling5") {
    if (player.isTouching(start5)) {
      gameState = "level5"
      level4End();
      level5Start();
    }
  }
  
  if(gameState === "playerFalling6"){
    rocket2.y = 490;
    rocket2.x = 320;
    player.x = -10;
    fuel = 8;
    if(rocket2.isTouching(start6)){
      gameState = "level6";
      level5End();
    }
  }
  
  if(gameState === "playerFalling7"){
    rocket2.y = 490;
    rocket2.x = 320;
    player.x = -10;
    fuel = 80;
    rocket2.velocityY = 0;
    if(rocket2.isTouching(start7)){
      gameState = "level7";
      level6End();
    }
  }
}
