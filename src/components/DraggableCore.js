import React, { Component } from 'react';
import { entitySubWrapperStyle } from './styles/feStyles';
import { _styles } from './styles/_styles';

class DraggableCore extends Component {
  render(props) {
    return (
      <div
        id={`${this.props.model.uuid}.${this.props.model.type}`}
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
        onMouseDown={this.mouseDown_handler}
        onDragStart={
          this.props.dragStartHandler // to set intitial
        }
        onDrop={this.props.dropHandler}
        onClick={() =>
          console.log('test: ', this.props.model) && this.props.clickHandler
        }
        draggable={!this.props.isResizing}
      >
        {this.props.children}
      </div>
    );
  }
}

export default DraggableCore;
