function level6Sprites(){
  ground1L6 = createSprite(320, 150, 640, 10);
  ground1L6.visible = false;
  ground2L6 = createSprite(320, 250, 640, 10);
  ground2L6.visible = false;
  ground3L6 = createSprite(320, 350, 640, 10);
  ground3L6.visible = false;
  ground4L6 = createSprite(320, 450, 640, 10);
  ground4L6.visible = false;


  alien1L6 = createSprite(320, 100, 10, 10);
  alien1L6.addAnimation("alien1L6", alienAnime);
  alien1L6.visible = false;
  alien2L6 = createSprite(320, 200, 10, 10);
  alien2L6.addAnimation("alien2L6", alienAnime);
  alien2L6.visible = false;
  alien3L6 = createSprite(320, 300, 10, 10);
  alien3L6.addAnimation("alien3L6", alienAnime);
  alien3L6.visible = false;
  alien4L6 = createSprite(320, 400, 10, 10);
  alien4L6.addAnimation("alien4L6", alienAnime);
  alien4L6.visible = false;

  teleporter1 = createSprite(600, 120, 10, 10);
  teleporter1.addImage("teleporter1", teleporterImg);
  teleporter1.visible = false;
  teleporter2 = createSprite(40, 220, 10, 10);
  teleporter2.addImage("teleporter2", teleporterImg);
  teleporter2.visible = false;
  teleporter3 = createSprite(600, 220, 10, 10);
  //teleporter3.addImage("teleporter3", teleporterImg);
  teleporter3.visible = false;
  teleporter4 = createSprite(40, 320, 10, 10);
  teleporter4.addImage("teleporter4", teleporterImg);
  teleporter4.visible = false;
  teleporter5 = createSprite(600, 320, 10, 10);
  teleporter5.addImage("teleporter5", teleporterImg);
  teleporter5.visible = false;
  teleporter6 = createSprite(40, 420, 10, 10);
  teleporter6.addImage("teleporter3", teleporterImg);
  teleporter6.visible = false;

  fuelCell = createSprite(600, 437, 10, 10);
  fuelCell.addImage("fuelCell", fuelCellImg);
  fuelCell.scale = 0.3;
  fuelCell.visible = false;
  
  fuelBar = createSprite(52, 70, 104, 20);
  fuelBar.visible = false;
  addAnimationFuelBar();
}