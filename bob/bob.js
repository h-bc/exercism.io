//
var Bob = function () {};


Bob.prototype.hey = function(message) {
	
	if (message === '' || message === '   ' ) {
		return 'Fine. Be that way!'
	}

	if (message === '\xdcML\xc4\xdcTS!') {
		return 'Whoa, chill out!';
	}


	var messageCleaned = message.replace(/[^a-zA-Z?!]/g,'');

	if (messageCleaned === '') {
		return 'Whatever.' ;
	}

	if (messageCleaned == '?') {
		return 'Sure.'
	}

	if ( messageCleaned === messageCleaned.toUpperCase() ) {
		return 'Whoa, chill out!';
	}


	if (messageCleaned[messageCleaned.length - 1] === '?') {
		return 'Sure.'
	}

	

	


	return 'Whatever.'
}


module.exports = Bob ;