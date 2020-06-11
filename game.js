class Game{
    constructor(){

    }

    getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

   async start(){
    if(gameState === 0){
      player = new Ship();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }


ship = createSprite(430,50,50,50);
ship.addImage("ship",ship1_img);
ship.scale = 0.05;
ship1 = createSprite(430,700,50,50);
ship1.addImage("ship1",ship_img);
ship1.scale = 0.05;
ships = [ship,ship1];
}

play(){
  Ship.getPlayerInfo();
  form.hide();
  background(back_img);
  var index = 0;
  var x = displayWidth/2;
  var y =0;
  text(mouseX+"-"+mouseY,10,10)
  for(var plr in allPlayers){
    index++;
    //xPos = xPos+500;
    x = allPlayers[plr].x
    y = y+300;
    ships[index-1].x=x;
    ships[index-1].y=y;
    //console.log("hi");
    if(index===player.index){
      ships[index-1].shapeColor = "red";
      //ships[index-1].x = ships[index-1].x+5;
      player.x=mouseX;
      player.update();
      ships[index-1].x=player.x;
      
      
      //console.log("yes")
      
    
    if(keyWentDown("SPACE")){
      bullet = createSprite(ship1.x,ship1.y,10,40);
      bullet.velocityY=-10     
      if(bullet.isTouching(ship)){
        //bullet.y = 6000;
        score++;
       // bullet.destroy();
       console.log(bullet.x);
      }   
    }
    if(keyWentDown("a")){
      bullet1 = createSprite(ship.x,ship.y,10,40);
      bullet1.velocityY=10;    
      if(bullet1.x === ship1.x|| bullet1.y === ship1.y){
        //bullet.y = 6000;
        score++;
       // bullet.destroy();
       console.log(bullet1.x);
      }   
    }
  }
    //if(index===player.index&&keyIsDown(LEFT_ARROW)){
      //x+=5;
  //  }
  }
  
  drawSprites();
  
}



}