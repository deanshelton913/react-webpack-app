import React from 'react'
import ReactDom from 'react-dom';
import AppointmentList from './components/AppointmentList.jsx';
import EmployeeList from './components/EmployeeList.jsx';

require('./stylesheets/app.scss')

ReactDom.render(
  <EmployeeList />,
  document.getElementById('employees')
);

ReactDom.render(
  <AppointmentList />,
  document.getElementById('appointments')
);