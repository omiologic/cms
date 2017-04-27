import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';

export default class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			version: 0
		};
	}

	componentDidMount() {
    this.setState({
      version: document.body.getAttribute('data-version')
    });
  }

  render() {
    var year = new Date().getFullYear();
    return (
      <div id='footer-container'>
        <Grid id='footer' className='text-center'>
          <Row>
            <Col xs={12}>
              <div>© {year} Omiologic LLC - v{this.state.version}</div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
