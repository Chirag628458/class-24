class Box
{
    constructor(x,y,w,h)
    {
        var option_box={
            restitution: 0.8, 
            friction: 1.8,
            density: 1.0
          }
        this.body= Bodies.rectangle(x,y,w,h, option_box);
        this.width= w;
        this.height=h;
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