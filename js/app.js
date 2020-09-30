// Get the canvas and set it's size
var canvas = document.getElementById("FlockingCanvas");

// Setup Screen Widths and Heights
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setup context
var context = canvas.getContext("2d");

var birdHandler = new BirdHandler(100, canvas.width, canvas.height);

// Make it so when I click on the canvas, I record the point
canvas.addEventListener('click', function(event)
{
	var location = 
	{
		"x" : event.x,
		"y" : event.y
	}

	birdHandler.SetMobLocation(location);
}, false);

// Calculate Delta
var previousTime, now;
previousTime = Date.now();

// Define the deltatime function
var deltaTime = function()
{
  now = Date.now();
  var dTime = now - previousTime;
  previousTime = now;

  return dTime / 1000;
}

// Simulation loop
function SimulationLoop()
{
  // Clear Screen
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Calcualte Delta time
  var time = deltaTime();

  // Tick the world!!
  birdHandler.tick(time);

  // Tell the birdhandler to draw all birds
  birdHandler.drawBirds(context);

  requestAnimationFrame(SimulationLoop);
}

//Start the loop!
SimulationLoop();