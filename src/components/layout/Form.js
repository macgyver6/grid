import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { address } from '../../lib/address';
// import { saveProperty, dragMovement } from "../../redux-modules/dnd/actions";
import { setGridWidth } from '../../redux-modules/actions';
import { utility } from '../../lib/utility';
import FormEntityContainer from '../FormEntityContainer';

const divStyle = {
  // margin: '20px',
  position: 'relative',
  gridTemplateColumns: `repeat(24, [col] 1fr)`,
  gridTemplateRows: `[row] auto`,
  // gridGap: '8px',
  zIndex: '10',
  minHeight: '800px',
};

const bgrndGrd = {
  padding: '0px',
  margin: '0px',
  fontSize: '12px',
  color: 'grey',
  textAlign: 'center',
  backgroundColor: 'rgba(75,156,211, 0.18)',
  zIndex: '15',
  minHeight: '60vh',
  paddingBottom: '60px',
  // margin: '4px',
  border: '1px solid white',
};
const bgColumns = [];
for (var i = 0; i < 24; i++) {
  bgColumns.push(
    <div id={`${i + 1}.bgrndGrd`} className="noselect" key={i} style={bgrndGrd}>
      {i + 1}
    </div>
  );
}
class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.gridWidth = React.createRef();
  }

  componentDidMount() {
    this.props.setGridWidth(
      utility.round(this.gridWidth.current.offsetWidth / 24, 1)
    );
  }

  //
  // return JSON.stringify(props);
  render() {
    console.log('render');

    return (
      <div className="wrapper" id={`form`} style={divStyle}>
        {/* {JSON.stringify(props.form.children())} */}
        <div className="grid">
          {/* loop through and render all children entities of top level section */}
          {/* instead of looping through the first form section's children, and rendering those, the top level form sections should be rendered, which then would render their own children */}
          {React.createElement(FormEntityContainer, {
            id: this.props.id,
            // hash: element,
            sectionUUID: 0,
            // key: index,
          })}
        </div>
        <div className="grid grid_background" ref={this.gridWidth}>
          {bgColumns}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  id: 1,
  // children: state.form[state.app.activeTab].children.map(child => ({
  //   id: child,
  //   type: state.form[child].type,
  // })),
  //   activeTab: state.app.activeTab,
  //   isResizing: state.dnd.isResizing
});

FormComponent = connect(
  mapStateToProps,
  { setGridWidth }
)(FormComponent);

export default FormComponent;
