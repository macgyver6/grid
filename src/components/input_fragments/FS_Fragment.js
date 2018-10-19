import React, { Component } from 'react';

class FS_Fragment extends Component {
  render(props) {
    const fsStyle = {
      display: 'grid',
      position: 'relative',
      borderRadius: '2px',
      gridTemplateColumns: `repeat(${this.props.model.width}, [col] 1fr)`,
      backgroundColor: 'rgba(243, 234, 95, 0.7)',
      minWidth: '100px',
      paddingBottom: '40px',
      gridColumn: `span ${this.props.model.width}`,
      zIndex: '30',
      cursor: 'move',
    };
    return (
      <div
        style={fsStyle}
        // className="form-control"
        type={this.props.model.type}
        // size="8"
        value={this.props.model.id}
        readOnly="true"
      >
        {this.props.children}
      </div>
    );
  }
}

export default FS_Fragment;
