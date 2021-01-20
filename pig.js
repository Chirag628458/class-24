class Pig
{
    constructor(x,y)
    {
        var option_box={
            restitution: 0.8, 
            friction: 0.8,
            density: 1.0
          }
        this.body= Bodies.rectangle(x,y, 50, 50,  option_box);
        this.width= 50;
        this.height=50;
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
        //strokeWeight(4);
        //stroke("green");        

        fill("green");
        rect(0, 0, this.width, this.height);
        pop();
    }

}