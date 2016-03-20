import React from 'react'
import ReactDom from 'react-dom';
// import AppointmentList from './components/AppointmentList.jsx';
import Employee from './components/Employee.jsx';
// import moment from 'moment';

import $ from 'jquery';
import './javascripts/vendor/datetimepicker.js';
require('./stylesheets/app.scss');

$(function () {
  $('.js-datetime').datetimepicker(
    {
      daysOfWeekDisabled: [0, 6],
      format: 'MM/DD/YY h:mm a'
    }
  );
});

ReactDom.render(
  <div><Employee /> <Employee /> <Employee /></div>,
  document.getElementById('employees')
);