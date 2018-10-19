import React, { Component } from 'react';
import { inputStyle } from '../styles/feStyles';

class TI_Fragment extends Component {
  render() {
    return (
      <input
        style={{
          ...inputStyle(this.props.model),
          // gridRowStart: 1
        }}
        // className="form-control"
        type={this.props.model.type}
        // size="8"
        value={this.props.model.id}
        readOnly="true"
      />
    );
  }
}

export default TI_Fragment;
