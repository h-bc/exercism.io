var Clock = function(h, m = 0) {
  let time = this.clockTime(h, m);
  this.hours = time.hours;
  this.minutes = time.minutes;

  return this;
};

Clock.prototype.toString = function() {
  const hours = this.hours < 10 ? `0${this.hours}` : this.hours.toString();
  const minutes = this.minutes < 10 ? `0${this.minutes}` : this.minutes.toString();
  return `${hours}:${minutes}`;
};

Clock.prototype.plus = function(minutesAdded = 0) {
  const { hours, minutes } = this.clockTime(this.hours, this.minutes + minutesAdded);
  this.hours = hours;
  this.minutes = minutes;
  return this;
};

Clock.prototype.minus = function(minutesSubtracted = 0) {
  const { hours, minutes } = this.clockTime(this.hours, this.minutes - minutesSubtracted);
  this.hours = hours;
  this.minutes = minutes;
  return this;
};
Clock.prototype.equals = function(clock) {
  return this.toString() === clock.toString();
};

Clock.prototype.clockTime = function(h, m) {
  let hours;
  let minutes;
  let totalMinutes = (h * 60 + m) % 1440;

  if (totalMinutes >= 0) {
    hours = Math.floor(totalMinutes / 60);
    minutes = totalMinutes % 60;
  } else {
    hours = 24 - Math.abs(Math.floor(totalMinutes / 60));
    minutes = 60 - Math.abs(totalMinutes % 60);

    if (minutes === 60) {
      minutes = 0;
    }
  }
  return { hours, minutes };
};

module.exports.at = function(h, m = 0) {
  return new Clock(h, m);
};
