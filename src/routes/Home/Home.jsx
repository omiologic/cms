import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  render(){
    return(
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        <div className='logo' style={{
          fontSize: 40,          
        }}>UNTITLED</div>
        <div>Powered by OMIOLOGIC LLC</div>
      </div>
    )
  }
}

const mapState = null;

export default connect(mapState)(Home);