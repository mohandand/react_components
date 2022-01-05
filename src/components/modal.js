import React, {useState} from 'react';

const Modal = ({message}) => {

    const [modalstyle ,setModalstyle] = useState("hideText")

    const[isActive, setIsActive] = useState(false)

    const changeStyle = () => {
        setModalstyle("show");
    }
    const changeStyle1 = () => {
        setModalstyle("hideText");
    }

    let box = <div className={modalstyle}>
                <div className="modal-container">
                     <h2> Modal Box</h2>
                     <h3> Welcome to React Components</h3>
                     <button onClick={() => setIsActive(!isActive)}>close</button>
                </div> 
             </div>

    return(
        <div className="modalcontainer">
            <button onClick={() => setIsActive(!isActive)}>Open Modal</button>
            {isActive ? <div className="modal-container"><h2> {message}</h2><button onClick={() => setIsActive(!isActive)}>close</button> </div>: <></>}
        </div>
    )
}

export default Modal;