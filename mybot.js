const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");



client.on("ready", () => {
  client.user.setGame('with a pair of jeans');
  console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
});

client.on("message", (message) => {

	  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("fuck you");
  } else

  if (message.content.startsWith(config.prefix + "doittoem")) {
  message.channel.send("https://imgur.com/a/k8Tv8");
  } else
	  
  if (message.content.startsWith(config.prefix + "database rosy")) {
  message.channel.send("//Checking Stand Database for: Rosy the Rascal... REPORT FOUND ||| Rosy the Rascal (aka Rosy) is the mother of Radish and is notable for being an amazing person. If you see her, immediately bestow multiple acts of affection unto her as she very much deserves it. ||| REPORT END");
  } else

  if (message.content.startsWith(config.prefix + "hi")) {
  message.channel.send("get out of my life");
  } else
	  
  if (message.content.startsWith(config.prefix + "database dali")) {
  message.channel.send("//Checking Stand Database for: Dali... REPORT FOUND ||| Dali is a fucking nerd and is known for having at least a terabyte of Lucario porn to use as profile pictures, which were all lost in the great PC Crash of 2017. He is also notable for maining every character in Smash and being horrible at it. ||| REPORT END");
  } else
	  
  if (message.content.startsWith(config.prefix + "database akos")) {
  message.channel.send("//Checking Stand Database for: Akos... REPORT FOUND ||| Akos is an extreme homosexual who is notable for being a fuckin' gay person and having multiple waifus. He is an intense nerd, and mention of his favorite games/anime will send him into a practically never-ending riot about it. It should be said that he is very pretty and this is undeniable. ||| REPORT END");
  } else
	  
  if (message.content.startsWith(config.prefix + "database blueribbles")) {
  message.channel.send("//Checking Stand Database for: Blue Skeleton Ribbles... REPORT FOUND ||| Blue Skeleton Ribbles is a sentient blue skeleton who is an amazing artist and is an overall cool dude. He is notable for being bone ||| REPORT END");
  } else
	  
  if (message.content.startsWith(config.prefix + "database lava")) {
  message.channel.send("//Checking Stand Database for: Lava the Dynamite... REPORT FOUND ||| ...Sooooo... do British have language?...I heard they say henlo instead of hello over there... I'm gunna learn British!  ||| REPORT END");
  } else
	  
  if (message.content.startsWith(config.prefix + "database rad")) {
  message.channel.send("//Checking Stand Database for: Rad... REPORT FOUND ||| Rad is a short princess who plays a lot of fighting games and has no life basically. He is very much a nerd and spends his days crying over the fact that Donald Glover is ending his music career.  He has a certain special bond to a sentient vegetable from another dimension. ||| REPORT END");
  } else
	  
  if (message.content.startsWith(config.prefix + "gay")) {
  message.channel.send("<@215991915001282560>");
  } else
	  
   if (message.content.startsWith(config.prefix + "database kirbyfan")) {
  message.channel.send("//Checking Stand Database for: Kirbyfan45... REPORT FOUND ||| Kirbyfan45 is a lil bitch. Enough said. ||| REPORT END");
  } else
	  
   if (message.content.startsWith(config.prefix + "database stix")) {
  message.channel.send("//Checking Stand Database for: Stix... REPORT FOUND ||| Stix is an 8-year old who is notable for creating the Jade Gully mod for Sonic Mania and being a horrible Sonic main. He is very bad at Smash. ||| REPORT END");
  } else
	  
  if (message.content.startsWith(config.prefix + "database sumi")) {
  message.channel.send("//Checking Stand Database for: Sumiwrecko... REPORT FOUND ||| No ||| REPORT END");
  } else
	  
  if (message.content.startsWith(config.prefix + "database tomato")) {
  message.channel.send("//Checking Stand Database for: The Tomato Watcher... REPORT FOUND ||| The Tomato Watcher (aka Tomato or Tomto) is a pure cool boi who is notable for always having his microphone super low. He also has an addiction to using text emoticons. ||| REPORT END");
  } else
	  
  if (message.content.startsWith(config.prefix + "database ayana")) {
  message.channel.send("Ayana? She's a huge ho. She fucks everyone, and I'm pretty sure she and Rosy had a couple run-ins...");
  } else
	  
  if (message.content.startsWith(config.prefix + "database robotnik")) {
  message.channel.send("Dr. Robotnik? He's an alright dude. I can't tell if he's a robot or a human, though, and last time I saw him he was round as fuck. He must have lost weight?");
  } else
	  
  if (message.content.startsWith(config.prefix + "database toasty")) {
  message.channel.send("Toasty is alright for the most part... But he is absolutely horrible at roasting others. It actually makes me cry intangible tears when I hear his attempts.");
  } else
	  
  if (message.content.startsWith(config.prefix + "database shade")) {
  message.channel.send("//Checking Stand Database for: Shade the Hedgehog... REPORT FOUND ||| Shade is a homosexual edgelord. ||| REPORT END");
  } else
	  
  if (message.content.startsWith(config.prefix + "database mee6")) {
  message.channel.send("Mee6 used to be cool, but now all he does is announce when people come in and out of a server. Also he pings everyone a lot for dumb reasons. Reminds me of a certain pink-puffball loving little kid...");
  } else
	  
  if (message.content.startsWith(config.prefix + "database billyjean")) {
  message.channel.send("//Checking Stand Database for: Billy Jean... REPORT FOUND ||| Billy Jean is a stand capable of controlling the fibers of clothing. The range and strength depends on the type of material (cotton has least effect, denim has most). The stand user is Radish (see Radish's database entry). BTW it's me lol ||| REPORT END ");
  } else
	  
  if (message.content.startsWith(config.prefix + "database radish")) {
  message.channel.send("//Checking Stand Database for: Radish... REPORT FOUND ||| Radish is a sentient vegetable who speaks in 90s slang and is an avid fan of skateboarding and yoyoing. He is a stand user, his stand being Billy Jean. (see Billy Jean's database entry) He has a supposed bond with an unknown short princess from another dimension. ||| REPORT END");
  } else
	  
  if (message.content.startsWith(config.prefix + "database lore")) {
  message.channel.send("Not yet ya little shit");
  } else
	  
  if (message.content.startsWith(config.prefix + "database database")) {
  message.channel.send("...What are you, fuckin' dumb?");
  } else
	  
  if (message.content.startsWith(config.prefix + "database tails")) {
  message.channel.send("//Checking Stand Database for: Miles Tails Prower... REPORT FOUND ||| Miles Tails Prower (aka Miles or Tails) is a cool kid notable for being pure and having multiple recolors as OCs. ||| REPORT END");
  } else
	  
   if (message.content.startsWith(config.prefix + "coolest")) {
  message.reply("you are the coolest");
  if(message.author.id !== config.ownerID) return;
  message.reply("you are the ultimate example of sheet coolness");
  } else

  if (message.content.startsWith(config.prefix + "ssradish")) {
  message.channel.send("https://imgur.com/a/V9Rgo");
  } else

  if (message.content.startsWith(config.prefix + "sonicgun")) {
  message.channel.send("https://imgur.com/a/6U6OC");
  } else

  if (message.content.startsWith(config.prefix + "spiderdelet")) {
  message.channel.send("https://imgur.com/a/vlMRv");
  } else	  
	  
	if (message.content.startsWith(config.prefix + "billyjean")) {
  message.channel.send("i am not your lover");
  } else
	  
   if (message.content.startsWith(config.prefix + "twerkdoggo")) {
  message.channel.send("https://imgur.com/a/gm5I7");
  } else
	  
	   if (message.content.startsWith(config.prefix + "about")) {
  message.channel.send("This bot was made for the sole purpose of being fuckin stupid. Made by radish#1730, a dumbass");
  } else
	  
    if (message.content.startsWith(config.prefix + "nerds")) {
  message.channel.send("all ${client.users.size} of the people using this bots are nerds");
  } else

  if (message.content.startsWith(config.prefix + "image help")) {
  message.channel.send(">doittoem: you know i had to do it to em /// >ssradish: tfw vegetable becomes saiyan /// >sonicgun: sonics finna shoot /// >twerkdoggo: a funy dog do a dance /// >spiderdelet: spiderman asks an important question");
  } else
	  
   if (message.content.startsWith(config.prefix + "database help")) {
  message.channel.send("List of available database logs /// rosy /// dali /// akos /// stix /// kirbyfan /// blueribbles /// sumi /// tomato /// shade /// tails /// lava /// radish /// rad /// billyjean ||| ayana ||| mee6 ||| robotnik ||| toasty");
  } else

  if (message.content.startsWith(config.prefix + "help")) {
  message.channel.send(">ping: sends a nice message /// >hi: sends another nice message /// >image help: commands for images /// >coolest: tells who the coolest person is /// >billyjean: is not my lover /// >about: information and shit");
  }
});

client.login(config.token);


