const PerfectNumbers = function PerfectNumbers() { };

PerfectNumbers.prototype.getPrimeFactors = function (number) {
  let primeFactors = [];
  for (let i = 2; i <= number; i++) {
    let powerOfI = [];
    while (number % i === 0) {
      powerOfI.push(i);
      number /= i;
    }
    if (powerOfI.length > 0) {
      primeFactors.push(powerOfI);
    }
  }
  return primeFactors;
};

// use math formula to find sum of divisors (go google)
PerfectNumbers.prototype.sumPrimeFactors = function (primeFactors) {
  return primeFactors.reduce((sumDivisors , factors) =>{
    const pow = factors.length === 1 ? 2 : factors.length + 1 ;
    // calcule sum for one prime factors .
    const sumTemp = (Math.pow(factors[0], pow) - 1  )  / (factors[0] - 1) ;
    
    return sumDivisors * sumTemp ;
  }, 1)
}
PerfectNumbers.prototype.classify = function(number) {
  const primeFactors = this.getPrimeFactors(number);
  const aliquotSum = this.sumPrimeFactors(primeFactors) - number ; 
  if (number < 1) {
    return 'Classification is only possible for natural numbers.';
  }

  if (primeFactors.length === 1) {
    return 'deficient';
  }
  if (aliquotSum === number) {
    return 'perfect';
  }

  if (aliquotSum > number) {
    return 'abundant';
  }

  return 'deficient';
};

module.exports = PerfectNumbers;

