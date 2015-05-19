import React from 'react';
import SimpEditor from './lib/SimpEditor';

const mountNode = document.getElementById("app");

React.render(
  React.createElement(SimpEditor),
  mountNode
);
