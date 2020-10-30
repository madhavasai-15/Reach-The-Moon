// *===============* //
// level 1 variables  //
// *===============* //
var start1; //start point of the level 1
var ground1L1, ground1L1Img; //grounds in level 1 and images
var ground2L1, ground2L1Img;
var ground3L1, ground3L1Img;
var ground4L1, ground4L1Img;
var jumpPad1, jumpPad2; //jumpPads to jump to upper ground 
var alien1, alien2, alien3, alien4, alien5, alien6, alienAnime; //enemies and image
var killer1, killerImg;
var lava1, lava1Img; //lava and image
var key1, key1Img;
var glass1, glass1Img;
var LockedT, LockedTImg;
var teleporter, teleporterImg;

// *===============* //
// level 2 variables //
// *===============* //
var start2; //start point of the level 2
var ground1L2, ground1L2Img;
var ground2L2, ground2L2Img;
var ground3L2, ground3L2Img;
var ground4L2, ground4L2Img;
var ground5L2, ground5L2Img;
var ground6L2, ground6L2Img;
var ground7L2, ground7L2Img;
var wall1L2, wall1L2Img;
var wall2L2, wall2L2Img;
var wall3L2, wall3L2Img;
var jumpPad3, jumpPad4, jumpPad5;
var alien1L2, alien2L2, alien3L2, alien4L2, alien5L2;
var lava2, lava2Img;
var key2, key2Img;
var glass2, glass2Img;

// *===============* //
// level 3 variables //
// *===============* //
var start3; //start point of the level 3
var ground1L3, ground1L3Img;
var ground2L3, ground2L3Img;
var lava3, lava3Img;
var parkour1, parkour2, parkour3, parkour4, parkour5, parkour6, parkour7, parkour8, parkour9, parkour10;
var parkour1Img, parkour2Img, parkour3Img, parkour4Img, parkour5Img, parkour6Img, parkour7Img, parkour8Img, parkour9Img, parkour10Img;
var parkour1Area, parkour2Area, parkour3Area, parkour4Area, parkour5Area, parkour6Area, parkour7Area, parkour8Area, parkour9Area, parkour10Area;
var coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9;
var jumpPad6, jumpPad7;
var coinImg;

// *===============* //
// level 4 variables //
// *===============* //
var start4;
var ground1L4, ground1L4Img;
var ground2L4, ground2L4Img;
var ground3L4, ground3L4Img;
var ground4L4, ground4L4Img;
var ground5L4, ground5L4Img;
var ground6L4, ground6L4Img;
var ground7L4, ground7L4Img;
var ground8L4, ground8L4Img;
var ground9L4, ground9L4Img;
var wall1L4, wall1L4Img;
var wall2L4, wall2L4Img;
var wall3L4, wall3L4Img;
var wall4L4, wall4L4Img;
var alien1L4, alien2L4, alien3L4, alien4L4, alien5L4, alien6L4, alien7L4;
var rocket1, rocket1Img;
var playerInsideRocketImg;
var roomL4 = 0;

// *===============* //
// level 5 variables //
// *===============* //
var start5;
var rocket2;
var rocketflyingImg;
var meteor, meteor1Img, meteorGroup;

// *===============* //
// level 6 variables //
// *===============* //
var start6;
var level6start = 0;
var level6Animation = "about to Reach the Moon";
var level6Parts = "Animation";
var ground1L6, ground2L6, ground3L6, ground4L6;
var alien1L6, alien2L6, alien3L6, alien4L6;
var teleporter1, teleporter2, teleporter3, teleporter4, teleporter5, teleporter6;
var fuelCell, fuelCellImg;
var playerCarryingFuelcell = "False";
var Ground = "offGround";
var fuel = 60;
var fuelVisi = "false";
// *===============* //
// level 7 variables //
// *===============* //
var level7part = 0;
var moon, moonImg;
var rocketAngel;

var player, playerImg, playerRightAnime, playerLeftAnime, playerUpAnime; //player and image
var Health, HealthInc, HealthIncImg, HealthDec, HealthDecImg;
var jumpPadImg, jumpPadUpImg, jumpPadSE = 0;
var HealthC = 0;
var Health0Img, Health1Img, Health2Img, Health3Img, Health4Img, Health5Img, Health6Img, Health7Img, Health8Img, Health9Img, Health10Img, Health11Img, Health12Img, Health13Img, Health14Img, Health15Img, Health16Img, Health17Img, Health18Img, Health19Img, Health20Img, Health21Img, Health22Img, Health23Img, Health24Img, Health25Img, Health26Img, Health27Img, Health28Img, Health29Img, Health30Img, Health31Img, Health32Img, Health33Img, Health34Img, Health35Img, Health36Img, Health37Img, Health38Img, Health39Img, Health40Img, Health41Img, Health42Img, Health43Img, Health44Img, Health45Img, Health46Img, Health47Img, Health48Img, Health49Img, Health50Img, Health51Img, Health52Img, Health53Img, Health54Img, Health55Img, Health56Img, Health57Img, Health58Img, Health59Img, Health60Img, Health61Img, Health62Img, Health63Img, Health64Img, Health65Img, Health66Img, Health67Img, Health68Img, Health69Img, Health70Img, Health71Img, Health72Img, Health73Img, Health74Img, Health75Img, Health76Img, Health77Img, Health78Img, Health79Img, Health80Img, Health81Img, Health82Img, Health83Img, Health84Img, Health85Img, Health86Img, Health87Img, Health88Img, Health89Img, Health90Img, Health91Img, Health92Img, Health93Img, Health94Img, Health95Img, Health96Img, Health97Img, Health98Img, Health99Img, Health100Img;

var Line, LineImg; //line between gameplay and score,health,keyslot  
var mainMenu, mainMenuImg; //main menu of the game
let startButton; // start button
var score = 0; //score
var health = 100; //health number
var keySlot = 0; //keyslot in number
var test;

function preload() { //loading images
  
  alienAnime = loadAnimation("alien/alien1.png", "alien/alien2.png", "alien/alien3.png", "alien/alien4.png", "alien/alien5.png", "alien/alien6.png", "alien/alien7.png");

  jumpPadImg = loadAnimation("jumpPad/jumpPad.png");
  jumpPadUpImg = loadAnimation("jumpPad/jumpPadUp1.png", "jumpPad/jumpPadUp2.png");



  // *=============* //
  // Health Images   //
  // *=============* //
  HealthImgs();
  HealthIncDec();
  // *===============* //
  // level 1 Images  //
  // *===============* //
  level1Imgs();
  // *===============* //
  // level 2 Images    //
  // *===============* //
  level2Imgs();
  // *===============* //
  // level 3 Images    //
  // *===============* //
  level3Imgs();
  // *===============* //
  // level 4 Images    //
  // *===============* //
  level4Imgs();
  // *===============* //
  // level 5 Images    //
  // *===============* //
  level5Img();
  // *===============* //
  // level 6 Images    //
  // *===============* //
  fuelCellImg = loadImage("level6Imgs/FuelCell.png");
  // *===============* //
  // level 7 Images    //
  // *===============* //
  moonImg = loadImage("level7Imgs/Moon.png");

  playerImgs();
  LineImg = loadImage("wholeGame/Line.png");
  mainMenuImg = loadImage("mainMenu/mainMenu.png");
}

function setup() {
  createCanvas(640, 480);

  // *===============* //
  // level 1 Sprites   //
  // *===============* //
  //create a sprite for start1 
  start1 = createSprite(20, 385, 10, 10);
  start1.visible = false;
  level1Sprites();

  // *===============* //
  // level 2 Sprites   //
  // *===============* //
  //create a sprite for start2  
  start2 = createSprite(600, 342, 10, 10);
  start2.visible = false;
  level2Sprites();

  // *===============* //
  // level 3 Sprites   //
  // *===============* //
  //create a sprite for start3
  start3 = createSprite(20, 385, 10, 10);
  start3.visible = false;
  level3Sprites();

  // *===============* //
  // level 4 Sprites   //
  // *===============* //
  start4 = createSprite(111, 311, 10, 10);
  start4.visible = false;
  level4Sprites();

  // *===============* //
  // level 5 Sprites   //
  // *===============* //
  start5 = createSprite(320, 440, 10, 10);
  start5.visible = false;
  level5Sprites();

  // *===============* //
  // level 6 Sprites   //
  // *===============* //
  start6 = createSprite(320, 490, 10, 10)
  start6.visible = false;
  level6Sprites();

  // *===============* //
  // level 7 Sprites   //
  // *===============* //
  start7 = createSprite(320, 490, 10, 10)
  start7.visible = false;
  moon = createSprite(320, 400, 10, 10);
  moon.setCollider("rectangle", 0, 0, 200, 100)
  moon.addImage("moon", moonImg);
  moon.visible = false;
  // *===============* //
  // wholeGame Sprites //
  // *===============* //
  wholeGameSprites();
  
  //variable to assign gameStates
  gameState = "MainMenu";
}

function draw() {
  background("black");
  
  if(Health < 0){
    Health = 0;
  }else if(Health > 100){
    Health = 100;
  }
  
  player.changeAnimation("player");
  player.setCollider("circle", 0, 0, 5);

  HealthFunction();
  DamageAnimation();
  jumpPadAnimation();
  fuelBarAnimation();

  levelChanging();

  // *===============* //
  // levels functions  //
  // *===============* //
  Level1();
  level2();
  level3();
  level4();
  level5();
  level6();
  level7();
  end();

  if (fuelVisi === "true") {
    fuelBar.visible = true;
    fill("white");
    textSize(18);
    textFont("Ebrima");
    text("Fuel: " + fuel, 109, 76);
    if (World.frameCount % 60 === 0 && fuel > 0) {
      fuel = fuel - 1;
    }
  }

  //text properties
  fill("white");
  textSize(18);
  textFont("Ebrima");
  //texts
  text("Health: " + health, 109, 26);
  text("Keys: " + keySlot, 550, 25);
  text("Score: " + score, 320, 25);

  edges = createEdgeSprites();
  rocket2.collide(edges[1]);
  player.collide(Line);
  drawSprites();
}

//function for what will happen when startButton is pressed
function StartButtonPressed() {
  mainMenu.visible = false;
  startButton.remove();
  gameState = "playerFalling1";
}

function jumpPadAnimation() {
  if (jumpPadSE === 1) {
    jumpPad1.changeAnimation("jumpPadUp1");
    if (World.frameCount % 4 === 0) {
      jumpPad1.changeAnimation("jumpPad1");
      jumpPadSE = 0;
    }
  } else if (jumpPadSE === 2) {
    jumpPad2.changeAnimation("jumpPadUp2");
    if (World.frameCount % 4 === 0) {
      jumpPad2.changeAnimation("jumpPad2");
      jumpPadSE = 0;
    }
  } else if (jumpPadSE === 3) {
    jumpPad3.changeAnimation("jumpPadUp3");
    if (World.frameCount % 4 === 0) {
      jumpPad3.changeAnimation("jumpPad3");
      jumpPadSE = 0;
    }
  } else if (jumpPadSE === 4) {
    jumpPad4.changeAnimation("jumpPadUp4");
    if (World.frameCount % 4 === 0) {
      jumpPad4.changeAnimation("jumpPad4");
      jumpPadSE = 0;
    }
  } else if (jumpPadSE === 5) {
    jumpPad5.changeAnimation("jumpPadUp5");
    if (World.frameCount % 4 === 0) {
      jumpPad5.changeAnimation("jumpPad5");
      jumpPadSE = 0;
    }
  } else if (jumpPadSE === 6) {
    jumpPad6.changeAnimation("jumpPadUp6");
    if (World.frameCount % 4 === 0) {
      jumpPad6.changeAnimation("jumpPad6");
      jumpPadSE = 0;
    }
  } else if (jumpPadSE === 7) {
    jumpPad7.changeAnimation("jumpPadUp7");
    if (World.frameCount % 4 === 0) {
      jumpPad7.changeAnimation("jumpPad7");
      jumpPadSE = 0;
    }
  }
}

function DamageAnimation() {
  if (HealthC === 1) {
    HealthDec.visible = true;
    if (World.frameCount % 4 === 0) {
      HealthC = 0;
    }
  } else {
    HealthDec.visible = false;
  }
}

function level7() {
  if (gameState === "level7") {
    if (level7part === 0) {
      player.visible = false;
      rocket2.visible = true;
      rocket2.velocityY = -10;
      if (rocket2.y < 0) {
        level7part = 1;
      }
    } else if (level7part === 1) {
      player.visible = false;
      rocket2.x = 100;
      rocket2.y = -10;
      level7part = 2;
    } else if (level7part === 2) {
      rocketAngel = rocket2.x / 2.5;
      player.visible = false;
      rocket2.visible = true;
      moon.visible = true;
      rocket2.velocityY = 1;
      fill("white");
      textSize(18);
      textFont("Ebrima");
      text("Angel: " + rocketAngel, 10, 110);
      if (keyDown("LEFT_ARROW")) {
        rocket2.x = rocket2.x - 0.6;
      }
      if (keyDown("RIGHT_ARROW")) {
        rocket2.x = rocket2.x + 0.6;
      }
      if (rocketAngel > 87 && rocketAngel < 175) {
        rocket2.depth = moon.depth;
        moon.depth = moon.depth - 1;
        if (rocket2.isTouching(moon)) {
          rocket2.changeAnimation("NoFuel");
          gameState = "end";
          rocket2.velcoityY = 0;
        }
      }
      if (rocket2.y > 480) {
        level7part = 3;
      }
    } else if (level7part === 3) {
      player.visible = false;
      rocket2.x = 100;
      rocket2.y = -10;
      fill("white");
      textSize(48);
      textFont("Ebrima");
      text("MISSED!", 270, 240);
      if (World.frameCount % 300 === 0) {
        level7part = 2;
      }
    }
    rocket2.collide(edges[0]);
  }
}

function end() {
  if (gameState === "end") {
    rocket2.changeAnimation("NoFuel");
    rocket2.depth = moon.depth;
    moon.depth = moon.depth - 1;
    fuelBar.visible = true;
    player.visible = true;
    rocket2.velcoityY = 0;
    rocket2.velcoityX = 0;
    fill("white");
    textSize(18);
    textFont("Ebrima");
    text("Fuel: " + fuel, 109, 76);
    rocket2.collide(moon)
    player.x = rocket2.x;
    player.y = rocket2.y + 40;
    fill("white");
    textSize(64);
    textFont("Ebrima");
    text("THE END", 320, 200);
  }
}

