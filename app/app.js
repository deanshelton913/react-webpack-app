// import React from 'react'
// import ReactDom from 'react-dom';
// import AppointmentList from './components/AppointmentList.jsx';
// import EmployeeList from './components/EmployeeList.jsx';
import moment from 'moment';
import $ from 'jquery';
import './javascripts/vendor/datetimepicker.js';
console.log(moment());
require('./stylesheets/app.scss');
// ReactDom.render(
//   <EmployeeList />,
//   document.getElementById('employees')
// );
// ReactDom.render(
//   <AppointmentList />,
//   document.getElementById('appointments')
// );

$(function () {
  $('#datetime').datetimepicker(
      {
        // format: 'LT',
        daysOfWeekDisabled: [0, 6],
        format: 'MM/DD/YY h:mm a'
        // icons: {
        //     time: 'fa fa-clock-o',
        //     date: 'fa fa-calendar',
        //     up: 'fa fa-arrow-up',
        //     down: 'fa fa-arrow-down'
        // }
      }
    );
});