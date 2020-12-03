class Shield{
    constructor(x,y){
         
         this.body = createSprite(x,y,30,30)
         this.life = 50
         this.image = loadImage("backImages/sheild_button.png")
    }

    display(){
        translate(this.body.x,this.body.y)
        this.body.addImage('img',this.image)
        /*if(this.life <= 0){
          this.body.destroy();
        }*/
        drawSprites();
        
    }

}