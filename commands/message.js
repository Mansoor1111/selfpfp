module.exports = (self) => {
  self.registerCommand('message', function (msg, args) {
    // Do something with msg or args
	var finalMessage = '';
	var endPoint = args.length;
	if(endPoint == 0) {
		this.send(msg, 'Usage: &message <string> \nCustomizes the message repeated by the bot. \nCurrent message is "' + self.message + '".');
		return;
	}
	for(var i = 0; i < endPoint; i++) {
		finalMessage += args[i];
		if(i != endPoint - 1) {
			finalMessage += ' ';
		}
	}
	self.message = finalMessage;
	this.send(msg, 'Changed automated message to: <' + self.message + '>');

  }, {
    noPms: false, // Will only work on guilds (No PM's)
    aliases: ['msg', 'm'], // Will make "cmd" and "mycmd" be an alias of "mycommand"
    perms: [ // Will only do the command if you have the "Manage channels" AND the "Manage Nicknames" permissions
      
    ],
    deleteAfter: true // Delete the command message after the command was done or not
  })
}