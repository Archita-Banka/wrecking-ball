class Ball{
    constructor(){
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.circle(320, 100,20,options);
    World.add(world, this.body);
}
display(){
   
    push();
    translate(this.body.position.x, this.body.position.y);
    fill("black")
    ellipseMode(RADIUS);
    ellipse(0, 0,20, 20);
    pop();
    
  }

}