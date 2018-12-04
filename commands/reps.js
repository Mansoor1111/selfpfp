module.exports = (self) => {
  self.registerCommand('reps', function (msg, args) {
    // Do something with msg or args
	this.send(msg, 'DEBUG: ' + args);
	if(isNaN(args) || args == '') { 
		this.send(msg, 'Currently repeats ' + self.reps + ' times.');
		return; 
	}
	self.reps = args;
	this.send(msg, 'Changed number of repetitions to ' + self.reps);
  }, {
    noPms: false, // Will only work on guilds (No PM's)
    aliases: ['r'], // Will make "cmd" and "mycmd" be an alias of "mycommand"
    perms: [ // Will only do the command if you have the "Manage channels" AND the "Manage Nicknames" permissions
      
    ],
    deleteAfter: true // Delete the command message after the command was done or not
  })
}