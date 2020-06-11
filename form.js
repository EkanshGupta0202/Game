class Form{
    constructor(){
        this.title = createElement('h1');
        this.input = createInput('Type your name here');
        this.button = createButton('Enter');
        this.greeting = createElement('h2');
        this.greeting1 = createElement('h2');
        this.reset = createButton('Reset')
    }
    hide(){
        this.greeting.hide();
        this.greeting1.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
      }
    display(){
        this.title.html("Space Shooter");
        this.title.position(displayWidth/2,displayHeight/2-400);
        this.input.position(displayWidth/2,displayHeight/2-250);
        this.button.position(displayWidth/2,displayHeight/2-170);
        this.reset.position(displayWidth/2,50)
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name);
            //this.greeting1.html("INSTRUCTIONS- For player 1(The ship on the top)- Press A to shoot. For player 2(The ship on the bottom)- Press SPACE to shoot. ")
            this.greeting.position(displayWidth/2 - 70, displayHeight/4);
          });
          this.reset.mousePressed(()=>{
              player.updateCount(0);
              game.update(0);
          })
    }
}