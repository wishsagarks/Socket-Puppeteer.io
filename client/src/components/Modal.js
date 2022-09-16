import { useState } from "react";
import socketIO from "socket.io-client";
import pic from "../images/pic.jpg"
const socket = socketIO.connect("http://localhost:4000");


const Modal = ({ url }) => {
    const [image, setImage] = useState("");
    return (
        <div className='popup'>
            <div className='popup-ref'>
                <img src={pic} height="500" width="500" alt='photu' />
            </div>
        </div>
    );
};

export default Modal;