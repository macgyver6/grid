import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import {
//   saveProperty,
//   getSumSiblingsInRow,
//   dragMovement,
// } from '../../redux-modules/dnd/actions';
import { utility } from '../../lib/utility';

const resizeStyle = {
  // width: '30px',
  height: '100%',
  // padding: `4px`,
  // backgroundColor: 'purple',
  position: 'absolute',
  right: 0,
  bottom: 0,
  zIndex: 99,
  // cursor: 'w-resize',
  // borderRadius: '2px',
};

class Resizer extends Component {
  constructor(props) {
    super(props);
    this.mousemovehandler = this.mousemovehandler.bind(this);
    this.mouseuphandler = this.mouseuphandler.bind(this);
    this.mouseDownHandler = this.mouseDownHandler.bind(this);
    this.dragStartHandler = this.dragStartHandler.bind(this);
    this.state = {
      numColumnsDiff: '',
      _numColumnsDiff: '',
      initialPosition: '',
      appendInitialWidth: '',
      resizedSubEntityInitialWidth: '',
    };
  }
  mousemovehandler(event) {
    const offset = 0.4;
    const currentPosition = event.clientX;
    const timestamp = Date.now();

    if (
      timestamp - this.state.timeInitResize > 1000 ||
      Math.abs(currentPosition - this.state.initialPosition) > 10
    ) {
      const result = utility.round(
        (currentPosition - this.state.initialPosition) / this.props.gridWidth +
          offset,
        0
      );
      this.setState({
        numColumnsDiff: result,
        timeInitResize: Date.now(),
      });
    }
    if (
      this.state.numColumnsDiff !== this.state._numColumnsDiff &&
      this.state.numColumnsDiff &&
      this.state.numColumnsDiff <= this.state.appendInitialWidth
    ) {
      this.setState({ _numColumnsDiff: this.state.numColumnsDiff });
      this.props.dragMovement(
        `${this.props.model.type}.${this.props.model.id}`,
        this.state.numColumnsDiff,
        this.props.resizeType,
        this.state.appendInitialWidth,
        this.state.resizedSubEntityInitialWidth
      );
    }
  }

  dragStartHandler(event) {
    console.log('hit');
  }

  mouseuphandler(event) {
    this.props.saveProperty({
      isResizing: false,
      resizingType: '',
    });
    document.removeEventListener('mousemove', this.mousemovehandler);
    document.removeEventListener('mouseup', this.mouseuphandler);
  }
  mouseDownHandler(event) {
    this.props.saveProperty({
      isResizing: true,
      resizingType: this.props.resizeType,
      initialEntity: this.props.model,
    });
    this.setState({
      initialPosition: event.clientX,
      timeInitResize: Date.now(),
      appendInitialWidth: this.props.model.append,
      resizedSubEntityInitialWidth: this.props.model[this.props.resizeType],
    });
    document.addEventListener('mousemove', this.mousemovehandler);
    document.addEventListener('mouseup', this.mouseuphandler);
  }

  render() {
    return (
      <div
        id={`${this.props.clickGrid}`}
        className="resizer"
        style={{ ...resizeStyle, ...this.props.style }}
        onMouseDown={this.mouseDownHandler}
        onDragStart={this.dragStartHandler}
        // onClick={click_handler}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  gridWidth: state.app.gridWidth,
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     // { saveProperty, getSumSiblingsInRow, dragMovement },
//     dispatch
//   );

Resizer = connect(
  mapStateToProps
  //   { saveProperty, getSumSiblingsInRow, dragMovement }
)(Resizer);

export default Resizer;
