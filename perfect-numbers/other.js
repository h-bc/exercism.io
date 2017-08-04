function PerfectNumbers(){
  this.classify = function(i) {
    if(i <= 0) return 'Classification is only possible for natural numbers.';

    let sum = 0;
    for(let j=1; j <= i/2; j++)
      if(i % j == 0)
        sum += j;

    return sum == i ? 'perfect' : (sum < i ? 'deficient' : 'abundant');
  };
};

module.exports = PerfectNumbers;