import $ from 'jquery';
import './javascripts/vendor/datetimepicker.js';
import React from 'react'
import ReactDom from 'react-dom';
import EmployeeList from './components/EmployeeList.jsx';

require('./stylesheets/app.scss');

$(function () {
  $('.js-datetime').datetimepicker(
    {
      daysOfWeekDisabled: [0, 6],
      format: 'MM/DD/YY h:mm a'
    }
  );
});

ReactDom.render(<EmployeeList />, document.getElementById('employees') );