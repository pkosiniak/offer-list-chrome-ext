import React from 'react';
import { render } from 'react-dom';

import NewTab from './Newtab';
import './index.css';

render(<NewTab />, window.document.querySelector('#app-container'));
