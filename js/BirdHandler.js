var BirdHandler = function(numberOfBirds, screenWidth, screenHeight)
{
  //Create an array of birds to manage
  var birds = new Array();

  //Populate it with birds
  for(i = 0; i < numberOfBirds; i++)
  {
    birds.push(new Bird(screenWidth / 2, screenHeight / 2, 0));

  }

  this.drawBirds = function(gContext)
  {
    for(i = 0; i < birds.length; i++)
    {
      birds[i].draw(gContext);
    }
  }

  //Tick function
  this.tick = function(time)
  {
    for(i = 0; i < birds.length; i++)
    {
      birds[i].move(time);
    }
  }
}
