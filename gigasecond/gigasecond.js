var Gigasecond = function(d){
	this.d = d ;
};

Gigasecond.prototype.date = function(){
	
	
	const ms = this.d.getTime() + Math.pow(10, 12) ;
	
	return new Date(ms);
}


module.exports = Gigasecond;