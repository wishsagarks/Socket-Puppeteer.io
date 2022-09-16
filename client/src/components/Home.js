import React, { useCallback, useState } from "react";
import Modal from "./Modal";
import ironman from "../images/iron-man.gif"

const Home = () => {
    const [url, setURL] = useState("");
    const [show, setShow] = useState(false);
    const handleCreateChannel = useCallback(() => {
        setShow(true);
    }, []);

    return (
        <div>
            <div className='home__container'>
                <h2>URL</h2>
                <form className='form'>
                <img src={ironman} height="500" width="500" alt='photu' />
                    <label>Provide a URL</label>
                    <input
                        type='url'
                        name='url'
                        id='url'
                        className='form__input'
                        required
                        value={url}
                        onChange={(e) => setURL(e.target.value)}
                    />
                </form>
                {show && <Modal url={url} />}
                <button className='createChannelBtn' onClick={handleCreateChannel}>
                    BROWSE
                </button>
            </div>
        </div>
    );
};

export default Home;