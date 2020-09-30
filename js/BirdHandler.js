var BirdHandler = function(numberOfBirds, screenWidth, screenHeight)
{
	// Mob location
	var mobLocationSet = false;
	var mobLocation;

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
			if (mobLocationSet == true)
			{
				birds[i].SetMobLocation(mobLocation);
			}
			
			birds[i].Move(time);
		}
	}

	// Set the location of a mob to avoid.
	this.SetMobLocation = function(location)
	{
		mobLocation = location;
		mobLocationSet = true;
	}
}