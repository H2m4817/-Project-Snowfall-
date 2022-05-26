class Snowflake{
    constructor(x, y, width, height){
        var options = {
            restitution: 0.7,
            friction: 0.5,
            density: 0.7
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("snow5.webp");
        World.add = (world, this.body);
    }
    display(){
        push()
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}