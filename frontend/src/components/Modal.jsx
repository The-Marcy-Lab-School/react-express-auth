import React from "react";
import "./Modal.css";

function Modal({closeModal}) {
    return <div className= "modalBackground">

        <div className="modalContainer">
            <div className="close">
            <button onClick={() => closeModal(false)}>X</button>
            </div>
            <div className="title">
                <h1>Are you sure you want to continue?</h1>
            </div>
            <div className="body">
                <p>You watch this video for 30 minutes.</p>
            </div>
            <div className="footer">
                <button onClick={() => closeModal(false)} id="cancelBtn ">cancel</button>
                <button>continue</button>
            </div>
        </div>
    </div>;
}

export default Modal;