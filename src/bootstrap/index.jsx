import React from 'react';
import classNames from 'classnames';
import isBrowser from 'APP/utils/isBrowser';
import isTouchDevice from 'APP/utils/isTouchDevice';


function getOpenState() {
  return (!isTouchDevice()) ? (localStorage.getItem('sidebar-open-state') === 'true' ? true : false) : false;
}

export default class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true;
      forceClose: false;
    }
  }

  isOpen(open) {
    return this.state.open === open;
  }

  closeSidebar(forceClose = false) {
    this.setState({
      open: false,
      forceClose: forceClose
    });
    localStorage.setItem('sidebar-open-state', false);
  }

  openSidebar(forceClose = false) {
    this.setState({
      open: true,
      forceClose: forceClose
    });
    localStorage.setItem('sidebar-open-state', true);
  }

  toggleSidebar() {
    if (this.state.forceClose) {
      this.openSidebar(false);
    } else {
      this.closeSidebar(true);
    }
  }

  sidebarStateChangeCallback(open) {
    var openState = getOpenState();
    if(this.isOpen(open)) return;
    if(open !== undefined) {
      openState = open;
    } else {
      openState = !this.state.open;
    }
    this.setState({
      open: openState // toggle sidebar
    });
    localStorage.setItem('sidebar-open-state', openState);
  }

  render() {
    var classes = classNames({
      'container-open': this.state.open,
      'force-close': this.state.forceClose,
    });

    return (
      <div id='container' className={classes}>
        {this.props.children}
      </div>
    );
  }
};