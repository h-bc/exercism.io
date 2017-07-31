var Triangle = function( a, b, c ) {
  this.a = a;
  this.b = b;
  this.c = c;
}
Triangle.prototype.kind = function(){

  const sizeZero = (Math.max(this.a, this.b, this.c) < 0 ) ;
  const negativeSides = (Math.min(this.a, this.b, this.c) <= 0 );
  //const inequality = (Math.max(this.a, this.b, this.c) > (this.a + this.b + this.c) - Math.max(this.a, this.b, this.c))
  const inequality = (this.a > this.b + this.c) || (this.b > this.a + this.c) || (this.c > this.a + this.b)

  if ( sizeZero || negativeSides || inequality ) {
    throw Error ('illegal sides value !');
  }

  if (this.a === this.b && this.a === this.c) {
    return 'equilateral';
  }

  if(this.a === this.b || this.a === this.c || this.b === this.c) {
    return 'isosceles';
  }

  return 'scalene';



}





module.exports = Triangle;
