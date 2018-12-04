module.exports = (self) => {
  self.registerCommand('start', function (msg, args) {
    // Do something with msg or args
	var _this = this;
	this.send(msg, 'Starting interval. This cannot be cancelled.');
	var finalMessage = self.message;
	var finalDelay = self.delay;
	var randomMS = Math.floor(Math.random()*self.randomAdd);
	setInterval(function() {
		var d = new Date();
		var START_DATE = '2018-08-04'; // Date used as the starting point for multi-hour intervals, must be YYYY-MM-DD format
		var START_HOUR = 0; // Hour of the day when the timer begins (0 is 12am, 23 is 11pm), used with START_DATE and INTERVAL_HOURS param
		var INTERVAL_HOURS = finalDelay; // Trigger at an interval of every X hours
		var TARGET_MINUTE = 0; // Minute of the hour when the chest will refresh, 30 means 1:30, 2:30, etc.
		var OFFSET = 0; // Notification will warn that the target is X minutes away
		var NOTIFY_MINUTE = (TARGET_MINUTE < OFFSET ? 60 : 0) + TARGET_MINUTE - OFFSET;
		var START_TIME = new Date(new Date(START_DATE).getTime() + new Date().getTimezoneOffset() * 60000 + START_HOUR * 3600000).getTime();
		var START_TIME = new Date(new Date(START_DATE).getTime() + new Date().getTimezoneOffset() * 60000 + START_HOUR * 3600000).getTime();
		if(Math.floor((d.getTime() - START_TIME) / 3600000) % INTERVAL_HOURS > 0) return; // Return if hour is not the correct interval
		if(d.getMinutes() !== NOTIFY_MINUTE) return; // Return if current minute is not the notify minute
		_this.send(msg, finalMessage);
	}, 60 * 1000); // Check every minute
  }, {
    noPms: false, // Will only work on guilds (No PM's)
    aliases: ['st'], // Will make "cmd" and "mycmd" be an alias of "mycommand"
    perms: [ // Will only do the command if you have the "Manage channels" AND the "Manage Nicknames" permissions
      
    ],
    deleteAfter: true // Delete the command message after the command was done or not
  })
}