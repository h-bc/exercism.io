class RobotFactory {}

var Robot = function() {};

Robot.prototype.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
Robot.prototype.robots = [];
Robot.prototype.getRandom = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

Robot.prototype.getName = function() {
  let code = [];
  code.push(alphabet[Robot.getRandom(0, 25)]);
  code.push(alphabet[Robot.getRandom(0, 25)]);
  code.push(Robot.getRandom(0, 9));
  code.push(Robot.getRandom(0, 9));
  code.push(Robot.getRandom(0, 9));
  return code.join('');
};

Robot.prototype.nextName = function() {
  let n = Robot.getName();
  while (robots.indexOf(n) !== -1) {
    n = Robot.getName();
  }
  robots.push(n);
  return n;
};
Robot.name = Robot.nextName();
Robot.prototype.reset = function() {
  this.name = Robot.nextName();
};

module.exports = Robot;
