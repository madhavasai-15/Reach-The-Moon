function wholeGameSprites() {
  //create a sprite for player and loading image
  //111, 221
  player = createSprite(20, 320, 1, 1);
  player.addImage("player", playerImg);
  player.addAnimation("playerRight", playerRightAnime);
  player.addAnimation("playerLeft", playerLeftAnime);
  player.addAnimation("playerUp", playerUpAnime);

  //create a sprite for player's health and loading animation
  Health = createSprite(55, 20, 100, 20);
  AddHealth();
  HealthInc = createSprite(55, 20, 100, 20);
  HealthInc.addAnimation("Healed", HealthIncImg);
  HealthInc.visible = false;
  HealthDec = createSprite(55, 20, 100, 20);
  HealthDec.addAnimation("Damage", HealthDecImg);
  HealthDec.visible = false;
  
  //create a sprite for line and loading image
  Line = createSprite(320, 43, 400, 10);
  Line.addImage("Line", LineImg);

  //create a sprite for mainMenu and loading image 
  mainMenu = createSprite(320, 240, 400, 400);
  mainMenu.addImage("mainMenu", mainMenuImg);

  //create a button for startButton
  startButton = createButton('Start');
  startButton.position(400, 400);
  startButton.size(100);
  startButton.mousePressed(StartButtonPressed);
}