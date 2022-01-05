import React, {useState} from 'react';

const Modal = () => {

    const [modalstyle ,setModalstyle] = useState("hideText")

    const changeStyle = () => {
        setModalstyle("show");
    }
    const changeStyle1 = () => {
        setModalstyle("hideText");
    }
    return(
        <div className="modalcontainer">
            <button onClick={changeStyle}>Open Modal</button>
            <div className={modalstyle}>
                <div className="modal-container">
                    <h2> Modal Box</h2>
                    <h3> Welcome to React Components</h3>
                    <button onClick={changeStyle1}>close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;