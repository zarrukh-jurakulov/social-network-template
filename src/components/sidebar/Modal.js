import React from "react";
import ReactDOM from "react-dom";


const Modal = ({ visible, toggle }) =>
  visible
    ? ReactDOM.createPortal(
        
          <div className="modal-overlay">
             <div className="modal">
          <div className="modal-pop" role="dialog" aria-modal="true">
            <div className='modal-title'>

            </div>
          <div className='modal-btn-container'>
            <button className='modal-button' type="button" onClick={toggle}>
              Close
            </button>
          </div>
            
          </div> 
          </div>
        </div>,
        document.body
      )
    : null;

export default Modal;