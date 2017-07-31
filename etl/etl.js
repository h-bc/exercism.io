const ETL = function() {};

ETL.prototype.transform = function transform(oldSystem) {
  const keys = Object.keys(oldSystem);
  const newSystem = {};
  keys.map(key => {
    oldSystem[key].map(letter => {
      newSystem[letter.toLowerCase()] = parseInt(key, 10);
    });
  });

  return newSystem;
};

module.exports = ETL;
