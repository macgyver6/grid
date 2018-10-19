import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { helpers } from '../lib/helpers';
import Pend from './subentities/Pend';
import Prompt from './subentities/Prompt';
import Wrapper from './Wrapper';
import DraggableCore from './DraggableCore';
// import {
//     entitySelected,
//     entityDropped,
//     saveProperty,
//     incrementAsyncTest,
// } from '../../redux-modules/dnd/actions';
// import { replace } from '../../redux-modules/form/actions';
import { entitySelected } from '../redux-modules/actions';
import { address } from '../lib/address';
import _ from 'lodash';
import FormEntityFragment from './input_fragments/FormEntityFragment';
// import { widthSubWrapper } from '../FormEntities/feStyles';
// import ConnectedFormEntityContainer from 'FormInput';
class FormEntityContainer extends Component {
  constructor(props) {
    super(props);
    this.mouseDown_handler = this.mouseDown_handler.bind(this);
    this.dropHandler = this.dropHandler.bind(this);
    this.dragOverHandler = this.dragOverHandler.bind(this);
    this.dragstart_handler = this.dragstart_handler.bind(this);
    this.mouseUp_handler = this.mouseUp_handler.bind(this);
  }

  mouseUp_handler(event) {
    this.props.saveProperty({ isResizing: false });
  }

  mouseDown_handler(event) {
    event.stopPropagation();
    console.log(this.props.sectionId);

    this.props.entitySelected(
      `${this.props.model.type}.${this.props.model.id}`,
      Number(event.target.id),
      this.props.sectionId
    );
  }

  dropHandler(event) {
    event.stopPropagation();
    this.props.saveProperty({ isDragging: false });
    this.props.entityDropped(
      `${this.props.model.type}.${this.props.model.id}`,
      Number(event.target.id),
      this.props.model[helpers.widthAccessor(event.target.className)],
      event.target.className,
      helpers.widthAccessor(event.target.className)
    );
  }

  dragOverHandler(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  dragstart_handler(event) {
    event.dataTransfer.setData(
      'hash',
      `${this.props.model.type}.${this.props.model.id}`
    );
    event.dataTransfer.setData('sectionId', `${this.props.sectionId}`);
    event.dataTransfer.setData('totalWidth', 6);
    this.props.saveProperty({
      currentEntityObj: this.props.model,
      //   subWrapperWidth: widthSubWrapper(this.props.model),
    });

    if (!this.props.isResizing) {
      this.props.saveProperty({ isDragging: true });
    }
  }

  render() {
    console.log(this.props.model);

    return (
      <Wrapper model={this.props.model}>
        {this.props.model.prepend > 0 ? (
          <Pend
            id={this.props.id}
            mode="prepend"
            width={this.props.model['prepend']}
            idStart={helpers.calcStart(this.props.model, 'prepend')}
          />
        ) : null}

        <DraggableCore
          model={this.props.model}
          isResizing={this.props.isResizing}
        >
          {'prePromptWidth' in this.props.model &&
          this.props.model.prePromptWidth > 0 ? (
            <Prompt
              id={`${this.props.model.type}.${this.props.model.id}.prePrompt`}
              mode="prePrompt"
              width={this.props.model.prePromptWidth}
              prompt={this.props.model.prePrompt}
              type={this.props.model.type}
              externalIdentifier={this.props.model.externalIdentifier}
              idStart={helpers.calcStart(this.props.model, 'prePrompt')}
              model={this.props.model}
            />
          ) : null}

          <FormEntityFragment
            entityComponent={address.lookupFragment(this.props.model.type)}
            model={this.props.model}
          >
            {this.props.model.type === 'FormSection'
              ? this.props.children.map(child => (
                  <ConnectedFormEntityContainer id={child.id} />
                ))
              : null}
          </FormEntityFragment>

          {'postPromptWidth' in this.props.model &&
          this.props.model.postPromptWidth > 0 ? (
            <Prompt
              id="postPrompt"
              mode="postPrompt"
              width={this.props.model.postPromptWidth}
              prompt={this.props.model.prePrompt}
              type={this.props.model.type}
              externalIdentifier={this.props.model.externalIdentifier}
              model={this.props.model}
              idStart={helpers.calcStart(this.props.model, 'postPrompt')}
            />
          ) : null}
        </DraggableCore>

        {this.props.model.append > 0 ? (
          <Pend
            id={this.props.id}
            mode="append"
            width={this.props.model['append']}
            idStart={helpers.calcStart(this.props.model, 'append')}
            model={this.props}
          />
        ) : null}

        {/*lastInRow(entityAddress) ? (
        <AddToEnd
          model={this.props.model}
          form={this.props.form}
          add={this.props.add}
          remove={this.props.remove}
          mutate={this.props.mutate}
          temporalStateChange={this.props.temporalStateChange}
          addToEndAction="insertInPlace"
          appState={this.props.appState}
        />
      ) : null*/}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  model: state.form[ownProps.id],
  ...(state.form[ownProps.id].type === 'FormSection'
    ? {
        children: state.form[ownProps.id].children.map(child => ({
          id: child,
          type: state.form[child].type,
        })),
      }
    : {}),
  id: ownProps.id,
  isResizing: state.app.isResizing,
  //   isDragging: state.dnd.isDragging,
  currententity: state.app.currententity,
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       entitySelected,
//       entityDropped,
//       incrementAsyncTest,
//       saveProperty,
//       replace,
//     },
//     dispatch
//   );

const ConnectedFormEntityContainer = connect(
  mapStateToProps,
  {
    entitySelected,
  }
)(FormEntityContainer);

export default ConnectedFormEntityContainer;
