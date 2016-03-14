import React from 'react'
import ReactDom from 'react-dom';
import AppointmentList from './components/AppointmentList.jsx';

require('./stylesheets/app.scss')


var APPOINTMENTS = [
  {last: 'Jenkins', first: 'Adam', time: 1457734171 },
  {last: 'Smith', first: 'Toby', time: 1457724171 },
  {last: 'Shelton', first: 'Dean', time: 1457924171 },
  {last: 'Barnsworth', first: 'Glen', time: 1457934171 }
];

ReactDom.render(
  <AppointmentList appointments={APPOINTMENTS} />,
  document.getElementById('app')
);