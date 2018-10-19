import React, { Component } from 'react';
import { entityWrapperStyle, entitySubWrapperStyle } from './styles/feStyles';

class Wrapper extends Component {
  render(props) {
    return (
      <div
        id={`${this.props.id}.${this.props.model.type}.wrapper`}
        style={{
          ...entityWrapperStyle(this.props.model),
          margin: '20px 0px 0px 0px',
          //   ...(this.props.currententity === `${this.props.id}` &&
          //   this.props.isDragging
          //     ? {
          //         backgroundColor: 'orange',
          //         border: '1px solid blue',
          //       }
          //     : {}),
        }}
        onDragOver={this.dragOverHandler}
        onDrop={this.dropHandler}
        onMouseUp={this.mouseUp_Section}
        onDragStart={!this.props.isResizing ? this.dragstart_handler : null}
        draggable="false"
      >
        {this.props.children}
      </div>
    );
  }
}

export default Wrapper;
