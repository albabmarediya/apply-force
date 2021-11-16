class Ground{
  constructor(x,y,w,h){
    var options={
        isStatic:true
    };
    
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.width = w;
    this.height = h;
    World.add(world, this.body);
}
    show(){
        var pos = this.body.position;
        push();
        stroke("white");
        fill(127);
        rect(pos.x, pos.y,this.width,this.height);
        pop();
    }
} 