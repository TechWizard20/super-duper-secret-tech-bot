const Discord = require('discord.js');
const client = new Discord.Client();

//var willChannel;
client.on('ready', () => {
    console.log('I am ready!');
    //willChannel = client.channels.find('id', '422215368782643202');
});

client.on('message', message => {
    if (message.author.bot) return;
    
    /*if (message.content.match(/ /i))
	var bored = new Date();
	var minute = bored.getMinutes();
	var second = bored.getSeconds();
	var second2;
	if (second2 > second && minute != bored.getMinutes)
    {
    message.channel.sendMessage("bored");
    var second = bored.getSeconds();
    var second2 = second;
    });*/
	
    if (message.content.match(/steamed hams/i) ||
        message.content.match(/aurora borealis/i) ||
	message.content.match(/northern lights/i) ||
        message.content.match(/oh egads/i) ||
        message.content.match(/delightfully devilish/i) ||
        message.content.match(/steamed clams/i) ||
        message.content.match(/the house is on fire/i) ||
        message.content.match(/unforgettable luncheon/i) ||
        message.content.match(/well seymour i made it/i) ||
        message.content.match(/ah superintendent chalmers/i) ||
        message.content.match(/i hope you're prepared for an/i) ||
        message.content.match(/my roast is ruined/i) ||
        message.content.match(/i were to purchase/i) ||
        message.content.match(/disguise it as my own/i) ||
        message.content.match(/crazy explanations/i) ||
        message.content.match(/need his medications/i) ||
        message.content.match(/lame exaggerations/i) ||
        message.content.match(/trouble in town tonight/i) ||
        message.content.match(/stretching my calves/i) ||
        message.content.match(/isometric exercise/i) ||
        message.content.match(/that isn't smoke it's steam/i) ||
        message.content.match(/upstate new york/i) ||
	message.content.match(/albany expression/i) ||
	message.content.match(/regional dialect/i) ||
        message.content.match(/obviously grilled/i) ||
        message.content.match(/patented skinner burgers/i) ||
	message.content.match(/what is happening/i) ||
	message.content.match(/at this time of year/i) ||
	message.content.match(/at this time of day/i) ||
	message.content.match(/in this part of the country/i) ||
	message.content.match(/localized entirely within your kitchen/i) ||
        message.content.match(/steam a good ham/i) ||        
        message.content.match(/despite your directions/i)
        )
    {
        message.channel.sendMessage(‘Fuck yeah, steamed hams!’);
	return;
    }
    

	
    
	//This is basic content searching
    if (message.content.match(/status/i)||message.content.match(/update/i)) 
    {
	var update = new Date();
	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	var month = months[update.getMonth()];
	var year = update.getFullYear();
        message.channel.sendMessage("Hey everyone, this is TechWizard. Welcome to the " + month + " " + year + " genocide where we pick a random place to cause havoc.”);
	return;
    }
    if 
        message.content.match(/pizza/i) ||
        message.content.match(/oh wow i am not a healthy person/i) ||	
    {
        message.channel.sendMessage(“MOM ORDER A DAMN PIZZA.”);
		return;
    }
    if (message.content.match(/donut mod trailer/i) || message.content.match(/trailer for donut mod/i)) 
    {
        message.channel.sendMessage('The year 3,900,120.’);
		return;
    }
    if (message.content.match(/map builder/i)) 
    {
        message.channel.sendMessage(’What the absolute fuck is a map builder’);
		return;
    }
    if (message.content.match(/fuck road nodes/i)) 
    {
        message.channel.sendMessage(‘IT’S CALLED A ROAD’);
	message.channel.sendMessage(‘Sorry for my shitty references’);
		return;
    }
    if (message.content.match(/fucking game gets crash/i)) 
    {
        message.channel.sendMessage(“Do you even grammar, bro“);
		return;
    }
    if (message.content.match(/splatoon/i)) 
    {
        message.channel.sendMessage(“fuck i love splatoon”);
	message.channel.sendMessage(“I made an Octoling once. Good shit.“);
		return;
    }
    if (message.content.match(/map/i)) 
    {
        message.channel.sendMessage("Yeah that map is insanely cool and it'd be totally bonkers to have something like that in SHAR.");
		return;
    }
	if (message.content.match(/launcher/i)) 
    {
        message.channel.sendMessage("Our Mod Launcher includes a hack called *Modern Computer Support* that does some stuff to the game to make it work much closer to how it's supposed to on modern versions of Windows.");
		return;
    }
    if (message.content.match(/Loren is the gayest/i)) 
    {
        message.channel.sendMessage('TIL.');
		return;
    }
    if (message.content.match(/piracy/i)) 
    {
        message.channel.sendMessage("Please don't discuss piracy here.");
		return;
    }
    if (message.content.match(/road/i)) 
    {
        message.channel.sendMessage("Making new roads with the map builder is pretty easy.");
		return;
    }
    if (message.content.match(/sketchup/i) || message.content.match(/3d model/i))
	{
		sketchNum = (Math.floor(Math.random() * 2)+1);
		if (sketchNum == 1)
    	{
        	message.channel.sendMessage("SketchUp. I have a love/hate relationship with that software.");
		message.channel.sendMessage("Or is it more like tolerate/hate?");    
		message.channel.sendMessage("I'm not sure.");
    	}
		else 
	{
		message.channel.sendMessage("*indistinct growling noises*");
	}
    }
    if (message.content.match(/nocd/i) || message.content.match(/no cd/i)|| message.content.match(/crack/i)) 
    {
        message.channel.sendMessage("Using a No CD crack isn't really piracy (morally speaking at least) if you actually own the game but I'd rather we not discuss the subject in this server.");
		return;
	}
    if (message.content.match(/loren is a girls name/i) || message.content.match(/loren is a her name/i)) 
    {
        message.channel.sendMessage("I'm a guy lol");
		return;
    }
//STUPID EASTER EGGS, SPECIFIC CASES
    if (message.content.match(/When Donut Mod 4 is revealed as a suppository, there will be ass activity./i) || message.content.match(/ass activity/i)) 
    {
	message.channel.sendMessage("That's an impressive level of shock factor in that message.");
	        return;
    }
    if (message.content.match(/loren is my sugar daddy/i)) 
    {
	message.channel.sendMessage("http://i.imgur.com/3PFqxIp.gifv");
	        return;
    }
	
	//This is his mention code
	if (message.content.match(/@loren goodwin/i))
		if (message.content.match(/view github/i))
	{
        message.channel.sendMessage("My GitHub link is https://github.com/ColouMods/Loren-Bot/ Wait, I don't have a Github link, I'm Loren Goodwin.");
        }
		else if (message.content.match(/quote the lion king/i))
	{
        message.channel.sendMessage("I've never seen the Lion King.");
	}
		else if (message.content.match(/How do I make Colou into a transparent wheel?/i))
	{
        message.channel.sendMessage("You don't.");
        }
		else if (message.content.match(/wheels/i) || message.content.match(/transparent/i))
	{
	message.channel.sendMessage("Oh yeah the game is hardcodedly hiding those meshes for rocke_v. When you rename the car it no longer does that.");
	}
	    	else if (message.content.match(/crash/i)) 
    	{
        message.channel.sendMessage("Sweet jesus.");
	message.channel.sendMessage("Yeah that sounds scary and I don't really know what the hell is going on there.");
    	}
		else if (message.content.match(/what is your name?/i))
	{
	message.channel.sendMessage("My name is Loren Bot#6687.");
	}
		else 
	{
	message.channel.sendMessage("Hm?");
	}
    return;
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
