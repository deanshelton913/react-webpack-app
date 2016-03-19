let faker = require('faker');
let moment = require('moment')

var FakeAppointment = (function(faker, moment){
  'use strict';

  let first = Faker.Name.firstName();
  let last = Faker.Name.lastName();
  let phone = Faker.Phone.phone();
  let first = Faker.Name.firstName();
  let time: Moment.valueOf();

  return {
    last: last,
    first: first,
    phone: phone,
    employee: employee
  }
})(faker, moment);

module.exports = FakeAppointment;