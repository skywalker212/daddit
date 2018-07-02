import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css';
import 'bootstrap';
import './index.scss';
import './assets/img/icon.png';

import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import Main from './components/main/main.jsx';
import Home from './views/home/home.jsx';
import Footer from './views/footer/footer.jsx';

const App = () => {
  return (
    <div>
      <Main views={
        [{path: '/', component: Home}]
      }/>
      <Footer />
    </div>
  );
};

render(
  <Router><App/></Router>,
  document.getElementById('app')
);
