import React from "react";
import "./ErrorModal.css";
import  ReactDOM from "react-dom";

const Backdrop = ({onConfirm}) => {
  return <div className='backdrop' onClick={onConfirm} />
  }

  const ModalOverlay = ({message, title, onConfirm}) => {
    return(
    <div className='modal'>
<header className='header'>
    <h2>{title}</h2>
</header>
<div className='content'>
    <p>{message}</p>
</div>
<footer className='actions'>
<button className="errorbutton" onClick={onConfirm}> Ok</button>
</footer>
</div>
    );
  }

const ErrorModal = ({message, title, onConfirm}) => {  
 return (
  <React.Fragment>
    {ReactDOM.createPortal(<Backdrop onConfirm={onConfirm}/>, document.getElementById('backdrop'))}
    {ReactDOM.createPortal(<ModalOverlay message={message} title={title} onConfirm={onConfirm} />, document.getElementById('overlay') )}
  </React.Fragment>
  );
};

export default ErrorModal;
