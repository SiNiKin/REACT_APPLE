import React, { useState } from "react";

function Com() {

    const [state, setState] = useState('누르세요!');
    const [modal, setModal] = useState(false);
    const [list, setList] = useState(['릴리', '젤리']);
    const [mList, setMList] = useState(['릴리', '젤리']);
    const [cat, setCat] = useState([0]);
    const [age, setAge] = useState([0, 0, 0]);
 
    return (
        <>
            <div className="Header">
                <h2>🍎APPLE</h2>
            </div>
            <div>
                <h3>{state}</h3>
                <button onClick={() => setState('메롱')}>ºᴜº</button>

                <hr />

                {/* <h2 onClick={() => { modal ? setModal(false) : setModal(true) }}>🏡</h2> */}
                <hr />

            </div>

            {
                mList.map(function(a, i){
                    return (
                        <div key={i}>
                            <h3 onClick={() => { 
                                modal ? setModal(false) : setModal(true);
                                setCat(i);
                                }}>{mList[i]}</h3>
                            <hr />
                        </div>
                    )
                })
            }

            {
                list.map(function(a, i){
                    return (
                        <div key={i}>
                            <h3>{list[i]}
                                <span onClick={() => {
                                    let copy = [...age];
                                    copy[i] = copy[i] + 1;
                                    setAge(copy);
                                    }}>
                                    🐶{age[i]}
                                </span>
                            </h3>
                            <hr />
                        </div>
                    )
                })
            }

            {
                modal ? <Modal color={'skyblue'} setMList={setMList} mList={mList} cat={cat} setCat={setCat}/> : null
            }
        </>
    );
}


function Modal(props) {
    return (
        <div className="modal" style={{background : props.color}}>
            <h3>{props.mList[props.cat]}</h3>
            <span>2024.07.03</span>
            <p>집에 가고싶다.....</p>
            <button onClick={() => props.setMList('냥')}>글수정</button>
        </div>
    )
}

export default Com;