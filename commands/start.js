module.exports = (self) => {
  self.registerCommand('start', function (msg, args) {
    // Do something with msg or args
	var _this = this;
	this.send(msg, 'Starting interval. This cannot be cancelled.');
	var finalMessage = self.message;
	var finalDelay = self.delay;
	var finalReps = self.reps;
	var randomMS = Math.floor(Math.random()*self.randomAdd);
	var interv = function(w, t){
        return function(){
            if(typeof t === "undefined" || t-- > 0){
				randomMS = Math.floor(Math.random()*self.randomAdd);
				_this.send(msg, 'Message prepped! New random time is ' + randomMS + 'ms added to the original ' + self.delay + 'ms ');
				setTimeout(interv, w+randomMS);
                try {
                    _this.send(msg, finalMessage);
                }
                catch(e){
                    t = 0;
                    throw e.toString();
                }
            }
        };
    }(finalDelay, finalReps);
	setTimeout(interv, parseInt(finalDelay, 10)+parseInt(randomMS, 10));
  }, {
    noPms: false, // Will only work on guilds (No PM's)
    aliases: ['st'], // Will make "cmd" and "mycmd" be an alias of "mycommand"
    perms: [ // Will only do the command if you have the "Manage channels" AND the "Manage Nicknames" permissions
      
    ],
    deleteAfter: true // Delete the command message after the command was done or not
  })
}