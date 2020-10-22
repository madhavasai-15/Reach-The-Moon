function level1Sprites(){
  //create a sprite for grounds and loading image
  ground1L1 = createSprite(106.5, 430, 213, 10);
  ground1L1.visible = false;
  ground2L1 = createSprite(478, 430, 319, 10);
  ground2L1.visible = false;
  ground3L1 = createSprite(320, 300, 640, 10);
  ground3L1.visible = false;
  ground4L1 = createSprite(320, 170, 640, 10);
  ground4L1.visible = false;

  //create a sprite for jumpPad1 and loading image
  jumpPad1 = createSprite(420, 420, 10, 10);
  jumpPad1.addAnimation("jumpPad1", jumpPadImg);
  jumpPad1.addAnimation("jumpPadUp1", jumpPadUpImg);
  jumpPad1.scale = 1.2;
  jumpPad1.visible = false;
  jumpPad2 = createSprite(62, 291, 10, 10);
  jumpPad2.addAnimation("jumpPad2", jumpPadImg);
  jumpPad2.addAnimation("jumpPadUp2", jumpPadUpImg);
  jumpPad2.scale = 1.2;
  jumpPad2.visible = false;

  //create a sprite for alien1 and loading image and   resizing it
  alien1 = createSprite(85, 400, 1, 1);
  alien1.addAnimation("alien1", alienAnime);
  alien1.visible = false;
  alien2 = createSprite(180, 372, 1, 1);
  alien2.addAnimation("alien2", alienAnime);
  alien2.visible = false;
  alien3 = createSprite(474, 354, 1, 1);
  alien3.addAnimation("alien3", alienAnime);
  alien3.visible = false;
  alien4 = createSprite(314, 269, 1, 1);
  alien4.addAnimation("alien4", alienAnime);
  alien4.visible = false;
  alien5 = createSprite(184, 216, 1, 1);
  alien5.addAnimation("alien5", alienAnime);
  alien5.visible = false;
  //killer
  killer1 = createSprite(382, 392, 1, 1);
  killer1.addImage("Killer1", killerImg);
  killer1.visible = false;
  killer2 = createSprite(492, 256, 1, 1);
  killer2.addImage("Killer1", killerImg);
  killer2.visible = false;
  killer3 = createSprite(198, 219, 1, 1);
  killer3.addImage("Killer1", killerImg);
  killer3.visible = false;
  killer4 = createSprite(547, 111, 1, 1);
  killer4.addImage("Killer1", killerImg);
  killer4.visible = false;

  //create a sprite for lava1 and loading image
  lava1 = createSprite(266, 432, 106.5, 10);
  lava1.visible = false;

  //key in level1
  key1 = createSprite(589, 142, 10, 10);
  key1.addImage("key1", key1Img);
  key1.scale = 0.4;
  key1.visible = false;
  //make the key safe
  glass1 = createSprite(589, 143, 10, 10);
  glass1.addImage("glass1", glass1Img);
  glass1.visible = false;

  //teleports to next level when obtained the key
  teleporter = createSprite(590, 400, 20, 40);
  teleporter.addImage(teleporterImg);
  teleporter.visible = false;
  //locked teleporter image
  LockedT = createSprite(590, 400, 20, 40);
  LockedT.addImage("LockedT", LockedTImg);
  LockedT.visible = false;
}