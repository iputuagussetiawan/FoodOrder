import React, { Component } from 'react'
import { Fragment } from 'react/cjs/react.development';
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = props =>{
    return <div className={classes.backdrop}></div>
};
const ModalOverlay = props =>{
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
};

const portalElement=document.getElementById('overlays');


export class Modal extends Component {
  render() {
    return (
        <Fragment>
            {ReactDOM.createPortal( <Backdrop></Backdrop>,portalElement)}
            {ReactDOM.createPortal( <ModalOverlay>{this.props.children}</ModalOverlay>,portalElement)}
        </Fragment>
    )
  }
}

export default Modal