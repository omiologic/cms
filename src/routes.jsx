import React from 'react';
import classNames from 'classnames';

/* Common Components */

import Sidebar from './common/Sidebar';
import Header from './common/Header';
import Footer from './common/Footer';

/* Pages */

class App extends React.Component {
  render() {
    return (
      <MainContainer {...this.props}>
        <Sidebar />
        <Header />
        <div id='body'>
          <Grid>
            <Row>
              <Col xs={12}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </MainContainer>
    );
  }
}

export default (
  <Route path='/' component={App}>
    <IndexRoute component={AllTodos} />
    <Route path='/todo/edit/:id' component={EditTodo} />
  </Route>
);
