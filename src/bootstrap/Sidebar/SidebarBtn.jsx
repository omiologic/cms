import React from 'react';

export class SidebarBtn extends React.Component {
  static belongsTo = 'Sidebar';

  handleSidebarStateChange() {
    const { visible } = this.props;
  }

  render() {
    const classes = classNames({
      'pull-left': true,
      'visible-xs-inline-block': !this.props.visible
    }, this.props.className);

    const props = {
      ...this.props,
      className: classes
    };

    delete props.visible;

    return (
      <Nav {...props} onSelect={this.handleSidebarStateChange}>
        <NavItem data-id='sidebar-btn' className='sidebar-btn' href='/'>
          <Icon bundle='fontello' glyph='th-list-5' />
        </NavItem>
      </Nav>
    );
  }
}