import React, { Component } from 'react';
import Resizer from './Resizer';
import { entityStyle } from '../styles/feStyles';
import { _styles } from '../styles/_styles';
import { helpers } from '../../lib/helpers';

class Prompt extends Component {
  // constructor() {
  //   super();
  //   // this.mouseDown_handler = this.mouseDown_handler.bind(this);
  // }

  // mouseDown_handler(event) {
  //   entityActions.mouseDown_handler(event, this.props);
  // }
  // const applyPrefix = this.props.autoId.prefix ? this.props.autoId.prefix : '';

  render() {
    const promptStyle = {
      ...entityStyle(this.props.width),
      gridTemplateColumns: `repeat(${this.props.width}, [col] 1fr)`,
      gridColumn: `span ${this.props.width}`,
      // backgroundColor: ''white'',
      // padding: '4px',
      border: `1px solid ${
        _styles[`${this.props.type}`].render.backgroundColor
      }`,
      // backgroundColor: `${_styles[`${this.props.type}`].render.backgroundColor}`,
      borderRadius: '2px',
      maxHeight: '',
      wordBreak: 'break-all',
      minHeight: '18px',
      alignSelf: 'start',
    };

    const applySeparator =
      this.props.autoId.separator && this.props.mode === 'prePrompt'
        ? this.props.autoId.prefix +
          this.props.autoId.separator +
          ' ' +
          this.props.externalIdentifier.split(this.props.autoId.prefix)[1]
        : '';

    return (
      <div
        style={promptStyle}
        id={`${this.props.id}`}
        // onMouseDown={this.mouseDown_handler} // to set intitial mouse click loc
      >
        {applySeparator + ` ${this.props.prompt}`}
        {/* <input
          style={{ ...inputStyle(this.props.model), gridRowStart: 1 }}
          // className="form-control"
          type={this.props.model.type}
          // size="8"
          readOnly="true"
        /> */}

        <Resizer
          // id={`${this.props.model.uuid}.resizer`}
          element="FormEntity"
          // uuid={this.props.model.uuid}
          className="resizer"
          model={this.props.model}
          clickGrid={helpers.calcResizerColumn(
            this.props.model,
            `${this.props.mode}`
          )}
          resizeType={`${this.props.mode}Width`}
          style={{
            width: '5px',
            padding: '0px',
          }}
        />

        {/* <Resizer
        id="prePrompt"
        element="FormEntity"
        uuid={this.props.UUID}
        className="resizer"
        {this.props.
        form={this.props.form}
        remove={this.props.remove}
        add={this.props.add}
        mutate={this.props.mutate}
        resizeType="prePromptWidth"
      /> */}
      </div>
    );
  }
}

export default Prompt;
