class Log
{
    constructor(x,y,h,angle)
    {
        var option_box={
            restitution: 0.8, 
            friction: 1.8,
            density: 1.0
          }
        this.body= Bodies.rectangle(x,y,20,h, option_box);
        this.width= 20;
        this.height=h;
        Matter.Body.setAngle(this.body, angle)
        World.add(world, this.body);
        
    }

    display()
    {
        var pos= this.body.position
        var ang= this.body.angle

        push();
        angleMode(RADIANS);
        translate(pos.x, pos.y)
        rotate(ang)
        

        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");        


        rect(0, 0, this.width, this.height);
        pop();
    }

}