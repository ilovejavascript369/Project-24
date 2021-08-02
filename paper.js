class Paper{
    constructor(x,y,width,height,angle){
        var options = {
            isStatic: true,
            restitution: 1
        }
        this.body = Bodies.rectangle(x, y, width, height,options);
        //this.body = Matter.Bodies.circle(x, y, width, height,options);
        this.height = height;
        this.weight = width;
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        stroke("white");
        ellipseMode(RADIUS);
        ellipse(670,610,20,20)
        rect(0,0,this.width,this.height);

        
        pop();
    }
    
}