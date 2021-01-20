class Bird
{
    constructor(x,y)
    {
        var option_box={
            restitution: 0.8, 
            friction: 1.8,
            density: 1.0
          }
        this.body= Bodies.rectangle(x,y,20, 20, option_box);
        this.width= 20;
        this.height=20;
        World.add(world, this.body);
        
    }

    display()
    {
        var pos= this.body.position
        var ang= this.body.angle
        pos.x= mouseX
        pos.y= mouseY

        push();
        angleMode(RADIANS);
        translate(pos.x, pos.y)
        rotate(ang)
        

        rectMode(CENTER);
                

        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
    }

}