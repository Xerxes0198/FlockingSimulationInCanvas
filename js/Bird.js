//Bird class for flocking simulation!
var Bird = function(inX, inY, inDirection)
{
	var locationX, locationY, speed, direction;

	locationX = inX;
	locationY = inY;
	speed = 10;
	direction = inDirection;

	this.move = function(time)
	{
		locationX += speed * time * Math.sin(2 * Math.PI * direction);
		locationY -= speed * time * Math.cos(2 * Math.PI * direction);
		direction += .001 * time;
	}

	this.draw = function(context)
	{
		//console.log("X: " + locationX);
		//console.log("Y: " + locationY);

		//Translate the contet to the location of this bird
		context.translate(locationX, locationY);

		//Rotate the context to ensure the triangle is facing the direction it is moving
		context.rotate(2 * Math.PI * direction);

		//Scale up the context for drawing, so shapes aren't so tiny at hi-res
		//context.scale(10, 10);

		//Draw the trianlge
		var path = new Path2D();
		path.moveTo(0,-6);
		path.lineTo(5,5);
		path.lineTo(0,2);
		path.lineTo(-5,5);
		path.lineTo(0,-6);
		context.stroke(path);

		//Reset the scale back down to 1
		context.setTransform(1, 0, 0, 1, 0, 0);
	}
}