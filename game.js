class Game {
    constructor(){} 
    
    getGameState(){
      database.ref('gameState').on('value',function(data){
          gameState = data.val();
      })
    }

    updateState(gameState){
      database.ref('/').update({
          gameState : gameState
      })
    }
    
    
    start(){
      if(gameState==0){
       form = new Form();
       form.display();
       player = new Player();
       player.getCount();
      }  
      player1 = createSprite(displayWidth/5-200,300);
      player1.addAnimation("swimming",swimmerImg);
      player1.scale = 0.4;
      player2 = createSprite(displayWidth/5-200,450);
      player2.scale = 0.4;
      player2.addAnimation("swimming",swimmerImg);
      
    }
    
    play(){
      form.hide();
     Player.getPlayersInfo();
     if(allPlayers != undefined){
      background("#0cdff2");
       var index = 0;
       var x;
       var y;
       var position = displayHeight-800;
       for(var plr in allPlayers){
        
         index += 1
         position += 30;
         textSize(15);
         fill("black");
         text(allPlayers[plr].name+" Score: "+allPlayers[plr].score,displayWidth-200,position);
         y = displayHeight- allPlayers[plr].yDistance;
         x = displayWidth -allPlayers[plr].distance;
         players[index-1].x = x;
         players[index-1].y = y;


         if(index == player.index){
           textSize(12);
           fill("black");
           text(allPlayers[plr].name,players[index-1].x,players[index-1].y+30);
          camera.position.x =  players[index-1].x;
          camera.position.y = players[index-1].y;

        }

        this.changePositions();
         
       }
       

       this.spawnWaste();
       this.scoringSystem();

       if(keyIsDown(RIGHT_ARROW)&& player.index != null){
         player.distance -= 20;
         player.update();
       }
       
       if(keyIsDown(UP_ARROW)&& player.index != null){
        player.yDistance +=10;
        player.update();
      }

      if(keyIsDown(DOWN_ARROW)&& player.index != null){
        player.yDistance -= 10;
        player.update();
      }
      
       
     }
     drawSprites();

     
    }

    changePositions(){
      Player.getPlayersInfo();
      var i = 0
      for(plr in allPlayers){
      i +=1
      players[i-1].y -= 100;
   }
      players[i-1].y+=300;
    }
    


    spawnWaste(){
      var randomNumber = Math.round(random(1,3));
      if(frameCount%50==0){
      if(randomNumber==1){
        bottle = createSprite(displayWidth*5,random(0,displayHeight),10,10);
        bottle.velocityX = -6;
        bottle.addImage(bottleImg);
        bottle.scale = 0.1;
        bottleGroup.add(bottle);
      }else if(randomNumber==2){
        sodaCan = createSprite(displayWidth*5,random(0,displayHeight),10,10);
        sodaCan.velocityX = -6;
        sodaCan.addImage(sodaCanImg);
        sodaCan.scale = 0.1;
        sodaGroup.add(sodaCan);
      }else {
        bag = createSprite(displayWidth*5,random(0,displayHeight),10,10);
        bag.velocityX = -6;
        bag.addImage(bagImg);
        bag.scale = 0.6;
        bagGroup.add(bag);
      }
    }
    }

    scoringSystem(){
      if(bottleGroup.isTouching(players)){
        player.score = player.score + 10;
        bottleGroup.destroyEach();
        player.update();
      } else if(sodaGroup.isTouching(players)){
        player.score = player.score + 5;
        sodaGroup.destroyEach();
        player.update;
      }else if(bagGroup.isTouching(players)){
        player.score = player.score + 15;
        bagGroup.destroyEach();
        player.update();
      }
    }

}