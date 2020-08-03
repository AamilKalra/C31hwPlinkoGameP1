class Plinko{
    constrouctor(radius, x ,y){
        var options={
            isStatic:true;
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.r=radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("black")
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.r, this.r)
    }
}