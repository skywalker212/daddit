import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../components/footer/footer.jsx';

class Home extends React.Component {
  render() {
    return (
      <div className="container center-align">
          <h1>daddit</h1>
          <p>
          A <i>Reddit</i> for DAIICT community
          </p>
          <p>click here to <Link to='/signup'>signup</Link></p>
          <p>click here to <Link to='/login'>login</Link></p>
          <Footer />
      </div>
    );
  }
}

export default Home;
