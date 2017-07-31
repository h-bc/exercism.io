var School = function() {
	this.data = {};
};

School.prototype.roster = function() {
	return this.data;
};

School.prototype.add = function(student, roster) {
	if (this.data[roster]) {
		this.data[roster].push(student);
		this.data[roster] = this.data[roster].sort();
	} else {
		this.data[roster] = [student];
	}
};

School.prototype.grade = function(gradeID) {
	return this.data[gradeID] ? this.data[gradeID] : [];
};

module.exports = School;
