import React, { Component } from 'react';
import { inputStyle } from '../styles/feStyles';

class Padding_Fragment extends Component {
  render() {
    return (
      <div
        style={{
          gridColumn: `span ${this.props.model.width}`,
          backGroundColor: null,
          // gridRow: '1/1',
        }}
      />
    );
  }
}

export default Padding_Fragment;
