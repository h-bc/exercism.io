const List = function List(aList = []) {
  this.list = aList;
  this.size = this.list.length;
};
//  I should find better name for isEqual to avoid confusion with areEqual !!
List.prototype.isEqual = function(arr) {
  if (this.size !== arr.length) return false;
  return this.list.every((element, index) => arr[index] === element);
};

List.prototype.isSublist = function(ofList) {
  if (this.size === 0) {
    return true;
  }
  const lastStartSublistIndex = ofList.size - this.size;
  for (let i = 0; i <= lastStartSublistIndex; i++) {
    const sublist = ofList.list.slice(i, i + this.size);

    if (this.isEqual(sublist)) {
      return true;
    }
  }
  return false;
};

List.prototype.isSuperlist = function(ofList) {
  if (ofList.size === 0) {
    return true;
  }
  return ofList.isSublist(this);
};

List.prototype.areEqual = function(aList) {
  if (this.size === 0 && aList.size === 0) {
    return true;
  }
  if (this.isEqual(aList.list)) {
    return true;
  }
  return false;
};
List.prototype.compare = function(aList) {
  if (this.areEqual(aList)) {
    return 'EQUAL';
  }
  if (this.isSublist(aList)) {
    return 'SUBLIST';
  }

  if (this.isSuperlist(aList)) {
    return 'SUPERLIST';
  }

  return 'UNEQUAL';
};

module.exports = List;
