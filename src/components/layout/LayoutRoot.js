import React, { Component } from 'react';
import FormComponent from './Form';
// import TabContainer from '../components/layout/design/TabContainer';
// import PropertiesPanel from '../containers/PropertiesPanel';
import LeftPanel from './leftPanel/LeftPanel';
export const backgroundPanelStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  width: window.screen.availWidth * 0.98,
  // height: window.screen.availHeight * 0.89,
  backgroundColor: 'white',
};
export const middlePanelStyle = {
  width: '50%',
  height: '100%',
  backgroundColor: 'white',
  margin: '20px 20px',
};

class LayoutRoot extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div style={backgroundPanelStyle}>
        <LeftPanel />
        <div style={middlePanelStyle}>
          {/* <TabContainer /> */}
          <FormComponent />
        </div>
        {/* <PropertiesPanel /> */}
      </div>
    );
  }
}

export default LayoutRoot;
