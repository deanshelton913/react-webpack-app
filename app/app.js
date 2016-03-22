import React from 'react'
import ReactDom from 'react-dom';
import EmployeeList from './components/EmployeeList.jsx';

require('./stylesheets/app.scss');

ReactDom.render(<EmployeeList />, document.getElementById('employees') );