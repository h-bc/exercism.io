class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
    this.earthYears = this.seconds / 31557600;
  }
  returnYears(relativeToEarth) {
    return Math.round(this.earthYears / relativeToEarth * 100) / 100;
  }
  onEarth() {
    return this.returnYears(1);
  }
  onMercury() {
    return this.returnYears(0.2408467);
  }
  onVenus() {
    return this.returnYears(0.61519726);
  }
  onMars() {
    return this.returnYears(1.8808158);
  }
  onJupiter() {
    return this.returnYears(11.862615);
  }
  onSaturn() {
    return this.returnYears(29.447498);
  }
  onUranus() {
    return this.returnYears(84.016846);
  }
  onNeptune() {
    return this.returnYears(164.79132);
  }
}

module.exports = SpaceAge;
