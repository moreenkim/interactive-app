const validator = require('validator');

let User = function (data) {
  this.data = data;
  this.errors = [];
};

User.prototype.cleanUp = function () {
  if (typeof this.data.username !== 'string') {
    this.data.username = '';
  }
  if (typeof this.data.email !== 'string') {
    this.data.email = '';
  }
  if (typeof this.data.password !== 'string') {
    this.data.password = '';
  }

  //get rid of bogus properties
  this.data = {
    username: this.data.username.trim().toLowerCase(),
    email: this.data.email.trim().toLowerCase(),
    password: this.data.password,
  };
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
  this.cleanUp();
  this.validate();

  //step2 if theres no validation errors, save user data to db
};
module.exports = User;
