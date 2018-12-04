const config = require('../config/config.json')

module.exports = (self) => {
  self.registerCommand('delay', function (msg, args) {
    // Do something with msg or args
	if(args == '') {
		this.send(msg, 'Current delay is: ' + self.delay + 'ms');
		return;
	}
	if(isNaN(args)) {
		this.send(msg, 'Could not change delay.');
		return;
	}
	self.delay = args;
    this.send(msg, 'Changing delay to ' + self.delay + 'ms') // Send a message

  }, {
    noPms: false, // Will only work on guilds (No PM's)
    aliases: ['d'], // Will make "cmd" and "mycmd" be an alias of "mycommand"
    perms: [ // Will only do the command if you have the "Manage channels" AND the "Manage Nicknames" permissions
      
    ],
    deleteAfter: true // Delete the command message after the command was done or not
  })
}