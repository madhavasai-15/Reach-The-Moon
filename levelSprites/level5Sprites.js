function level5Sprites(){
  rocket2 = createSprite(320, 440, 10, 10);
  rocket2.addAnimation("rocketGoing", rocketflyingImg);
  rocket2.addAnimation("NoFuel", rocket1Img);
  rocket2.setCollider("rectangle", 0,-5,25,22);
  rocket2.visible = false;
  
  meteorGroup = createGroup();
}