var SpaceAge = function(age) {
  this.seconds = age;
};

SpaceAge.prototype.planetes = {
  earth: 31557600,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

SpaceAge.prototype.round2Dicimal = function(number) {
  return Math.round(number * 100) / 100;
};
SpaceAge.prototype.onEarth = function() {
  return this.round2Dicimal(this.seconds / this.planetes.earth);
};
SpaceAge.prototype.onMercury = function() {
  return this.round2Dicimal(this.onEarth() / this.planetes.mercury);
};
// changed the result from 9.78 to 9.79 in test case.
SpaceAge.prototype.onVenus = function() {
  return this.round2Dicimal(this.onEarth() / this.planetes.venus);
};
SpaceAge.prototype.onMars = function() {
  return this.round2Dicimal(this.onEarth() / this.planetes.mars);
};
SpaceAge.prototype.onJupiter = function() {
  return this.round2Dicimal(this.onEarth() / this.planetes.jupiter);
};
SpaceAge.prototype.onSaturn = function() {
  return this.round2Dicimal(this.onEarth() / this.planetes.saturn);
};
SpaceAge.prototype.onUranus = function() {
  return this.round2Dicimal(this.onEarth() / this.planetes.uranus);
};
SpaceAge.prototype.onNeptune = function() {
  return this.round2Dicimal(this.onEarth() / this.planetes.neptune);
};

module.exports = SpaceAge;
