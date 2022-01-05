import React, {useState} from 'react';

const Modal = () => {

    const [modalstyle ,setModalstyle] = useState("hideText")

    const changeStyle = () => {
        setModalstyle("show");
    }

    return(
        <div className="modalcontainer">
            <button onClick={changeStyle}>Open Modal</button>
            <div className={modalstyle}>
                <div class="modal-container">
                    <h2> Modal Box</h2>
                    <h3> Welcome to React Components</h3>
                </div>
            </div>
        </div>
    )
}

export default Modal;