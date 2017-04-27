import React from 'react';

export class SidebarDivider extends React.Component {
  static belongsTo = 'Sidebar';
  
  static propTypes = {
    color: React.PropTypes.string,
  };

  static defaultProps = {
    color: '#3B4648',
  };

  render() {
    return (
      <hr style={{
        borderColor: this.props.color,
        borderWidth: 2,
        marginTop: 15,
        marginBottom: 0,
        width: 200}} />
    );
  }
}
