import React, { Component } from 'react';
import { inputStyle } from '../styles/feStyles';

class Padding_Fragment extends Component {
  constructor() {
    super();
    this.dragOverHandler = this.dragOverHandler.bind(this);
  }

  dragOverHandler(event) {
    event.preventDefault();
  }
  render() {
    console.log(this.props.model.width);
    return (
      <div
        onDragOver={this.dragOverHandler}
        style={{
          gridColumn: `span ${this.props.model.width}`,
          backgroundColor: 'rgba(255,255,255, 0.3)',
          minHeight: '22px',
        }}
      />
    );
  }
}

export default Padding_Fragment;
