Setup--
1) Install node.js here: https://nodejs.org/en/
2) Create a second Discord account. You want this second account to be doing stuff because self-bots 
   are at risk of being banned.
3) Input the token of your discord account in config.json in the config folder. Instructions on that 
   here https://github.com/TheRacingLion/Discord-SelfBot/wiki/Discord-Token-Tutorial
4) Input the owner ID of the new discord account in config.json in the config folder. Instructions on 
   that here https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-
5) Have a channel for debug messages to go through. Change notificationChannelID at the bottom of config,json.
   Use the above tutorial to copy the ID of your channel.

Optional Steps--
1) In games.json, you can pick the rotation of games the bot is undergoing.

Now you should be able to execute "run.bat" and all the commands can be used.

Commands--
&message <message>
This changes the message that will be repeated.

&delay <time>
This changes the delay between repeats. Time is in milliseconds.

&reps <number>
This changes the number of times that the message will be repeated.

&stats
This outputs the current settings to be used when the intervals begin.

&start
This starts an interval with the current settings. This cannot be stopped once started unless the bot
is deactivated.