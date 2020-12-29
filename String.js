class String{
    constructor(bodyA, pointB){

        var options = {
            bodyA:bodyA.body,
            pointB:pointB,
            stiffness:0.04,
            length:10,
        }

        this.string = Constraint.create(options);
        World.add(world,this.string);
    }

    display() {
        if(this.string.bodyA){
            
        var pointA = this.string.bodyA.position;
         var pointB = this.string.pointB;
         strokeWeight(6);
         stroke(48, 22, 8);
         line(pointA.x, pointA.y, pointB.x, pointB.y);
         }
                
                
    }
    fly(){
        this.string.bodyA= null;
    }

    attach(body) {
        this.string.bodyA = body;
    }
}