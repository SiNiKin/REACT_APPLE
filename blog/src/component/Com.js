import React, { useState } from "react";

function Com() {

    const [state, setState] = useState('누르세요!');
    const [modal, setModal] = useState(false);

    return (
        <>
            <div className="Header">
                <h2>🍎APPLE</h2>
            </div>
            <div>
                <h3>{state}</h3>
                <button onClick={() => setState('메롱')}>ºᴜº</button>

                <hr />

                <h2 onClick={() => { modal ? setModal(false) : setModal(true) }}>🏡</h2>

            </div>

            {
                modal ? <Modal /> : null
            }
        </>
    );
}


function Modal() {
    return (
        <div className="Modal">
            <h3>HOME</h3>
            <span>2024.07.03</span>
            <p>집에 가고싶다.....</p>
        </div>
    )
}

export default Com;