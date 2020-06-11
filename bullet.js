class Bullet{
    constructor(x,y){
        this.x = x;
        this.y = y;
        //this.velocityY=-10
    }
    display(){
        fill("yellow")
        rect(x,y,10,40);
    }
}