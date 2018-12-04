const config = require('../config/config.json')

module.exports = (self) => {
  self.registerCommand('randomAdd', function (msg, args) {
    // Do something with msg or args
	if(args == '') {
		this.send(msg, 'Current randomAdd is: ' + self.randomAdd + 'ms');
		return;
	}
	if(isNaN(args)) {
		this.send(msg, 'Could not change randomAdd.');
		return;
	}
	self.randomAdd = args;
    this.send(msg, 'Changing randomAdd to selected value ' + self.randomAdd + 'ms') // Send a message

  }, {
    noPms: false, // Will only work on guilds (No PM's)
    aliases: ['rand'], // Will make "cmd" and "mycmd" be an alias of "mycommand"
    perms: [ // Will only do the command if you have the "Manage channels" AND the "Manage Nicknames" permissions
      
    ],
    deleteAfter: true // Delete the command message after the command was done or not
  })
}