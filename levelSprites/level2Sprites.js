function level2Sprites(){
  ground1L2 = createSprite(515, 358, 250, 10);
  ground1L2.visible = false;
  ground2L2 = createSprite(125, 358, 250, 10);
  ground2L2.visible = false;
  ground3L2 = createSprite(515, 258, 250, 10);
  ground3L2.visible = false;
  ground4L2 = createSprite(75, 258, 150, 10);
  ground4L2.visible = false;
  ground5L2 = createSprite(320, 158, 640, 10);
  ground5L2.visible = false;
  ground6L2 = createSprite(270,250,50,10);
  ground6L2.visible = false;

  wall1L2 = createSprite(395, 308, 10, 90);
  wall1L2.visible = false;
  wall2L2 = createSprite(395, 208, 10, 90);
  wall2L2.visible = false;
  wall3L2 = createSprite(245, 160, 10, 230);
  wall3L2.visible = false;

  jumpPad3 = createSprite(435, 343, 10, 10);
  jumpPad3.addAnimation("jumpPad3", jumpPadImg);
  jumpPad3.addAnimation("jumpPadUp2", jumpPadUpImg);
  jumpPad3.visible = false;
  jumpPad4 = createSprite(595, 243, 10, 10);
  jumpPad4.addAnimation("jumpPad4", jumpPadImg);
  jumpPad4.addAnimation("jumpPadUp4", jumpPadUpImg);
  jumpPad4.visible = false;
  jumpPad5 = createSprite(100, 343, 10, 10);
  jumpPad5.addAnimation("jumpPad5", jumpPadImg);
  jumpPad5.addAnimation("jumpPadUp5", jumpPadUpImg);
  jumpPad5.visible = false;

  alien1L2 = createSprite(514, 329, 10, 10);
  alien1L2.addAnimation("alien1L2", alienAnime);
  alien1L2.visible = false;
  alien2L2 = createSprite(490, 229, 10, 10);
  alien2L2.addAnimation("alien2L2", alienAnime);
  alien2L2.visible = false;
  alien3L2 = createSprite(480, 82, 10, 10);
  alien3L2.addAnimation("alien3L2", alienAnime);
  alien3L2.visible = false;
  alien4L2 = createSprite(277, 220, 10, 10);
  alien4L2.addAnimation("alien4L2", alienAnime);
  alien4L2.visible = false;
  alien5L2 = createSprite(18, 331, 10, 10);
  alien5L2.addAnimation("alien5L2", alienAnime);
  alien5L2.visible = false;

  lava2 = createSprite(320, 362, 140, 10);
  lava2.visible = false;

  key2 = createSprite(284, 131, 10, 10);
  key2.addImage("key2", key2Img);
  key2.scale = 0.4;
  key2.visible = false;

  glass2 = createSprite(285, 131, 10, 10);
  glass2.addImage("glass2", glass2Img);
  glass2.visible = false;
}