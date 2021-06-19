class Form {
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h2");
        this.reset = createButton("Reset");
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }


    display(){
        var title  = createElement("h1");
        title.html("Reach the shore");
        title.position(displayWidth/5,0);
        this.input.position(displayWidth/5, displayHeight/5-50);
        this.button.position(displayWidth/5,displayHeight-600);
        this.reset.position(displayWidth-200,displayHeight-850)

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            this.greeting.html("Hello "+ player.name);
            this.greeting.position(200,100);
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
        })

        this.reset.mousePressed(()=>{
          player.updateCount(0);
          game.updateState(0);
        })
    }

    

}