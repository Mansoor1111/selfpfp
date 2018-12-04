module.exports = (self) => {
  self.registerCommand('stats', function (msg, args) {
    // Do something with msg or args
	this.send(msg, '**Current Interval Stats:**\nMessage: ' + self.message + '\nInterval: ' + self.delay + 'hrs');

  }, {
    noPms: false, // Will only work on guilds (No PM's)
    aliases: ['s'], // Will make "cmd" and "mycmd" be an alias of "mycommand"
    perms: [ // Will only do the command if you have the "Manage channels" AND the "Manage Nicknames" permissions
      
    ],
    deleteAfter: true // Delete the command message after the command was done or not
  })
}