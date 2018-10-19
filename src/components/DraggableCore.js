import React, { Component } from 'react';
import { entitySubWrapperStyle } from './styles/feStyles';
import { _styles } from './styles/_styles';

class DraggableCore extends Component {
  render(props) {
    return (
      <div
        id={`${this.props.model.type}.${this.props.model.id}.subWrapper`}
        style={{
          ...entitySubWrapperStyle(this.props.model),
          ...(this.props.selected
            ? {
                boxShadow: `3px 3px ${
                  _styles[`${this.props.model.type}`].render.backgroundColor
                } `,
              }
            : {}),
        }}
        onMouseDown={this.mouseDown_handler} // to set intitial
        draggable={!this.props.isResizing}
      >
        {this.props.children}
      </div>
    );
  }
}

export default DraggableCore;
