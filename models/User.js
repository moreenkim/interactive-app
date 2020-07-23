const validator = require('validator');

let User = function (data) {
  this.data = data;
  this.errors = [];
};

User.prototype.validate = function () {
  if (this.data.username === '') {
    this.errors.push('You must provide a username');
  }
  if (
    this.data.username !== '' &&
    !validator.isAlphanumeric(this.data.username)
  ) {
    this.errors.push('username can only have letters and numbers');
  }
  if (!validator.isEmail(this.data.email)) {
    this.errors.push('You must provide a valid email');
  }
  if (this.data.password === '') {
    this.errors.push('You must provide a password');
  }
  if (this.data.password.length > 0 && this.data.password.length < 12) {
    this.errors.push('password must be atleast 12 characters');
  }
  if (this.data.password.length > 100) {
    this.errors.push('password cannot exceed 100 characters');
  }
  if (this.data.username.length > 0 && this.data.username.length < 3) {
    this.errors.push('username must be atleast 3 characters');
  }
  if (this.data.username.length > 30) {
    this.errors.push('username cannot exceed 30 characters');
  }
};

User.prototype.register = function () {
  //step1 validate user data
  this.validate();

  //step2 if theres no validation errors, save user data to db
};
module.exports = User;
