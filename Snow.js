class Snow{
    constructor(x, y, r){
       var options = {
           restitution = 1,
           friction = 0.2,
           density = 1
       }
       this.x = x;
       this.y = y;
       this.r = r;
       this.body = Bodies.circle(this.x, this.y, this.r-20/2, options);

       this.image = loadImage("snow3.jpg");
       World.add = (world, this.body);
    }
    display(){
        var snowpos = this.body.position;
        push()
        translate(snowpos.x, snowpos.y);
        rectMode(CENTER);
        fill(rgb(92, 114, 237));

        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop()
    }
}