import React, { useState } from "react";

function Prac() {

    const [state, setState] = useState(0);
    const [state2, setState2] = useState(0);
    const [state3, setState3] = useState(0);
    const [custom, setCustom] = useState(false);
    const [menu1, setMenu1] = useState(['남자', '여자']);
    const [menu2, setMenu2] = useState(['어른', '아이']);
    const [menu3, setMenu3] = useState(['미국', '한국']);

    return (
        <div className="box">
            <div className="left">
                <h3>커스텀</h3>
                {custom ? <Custom state={state} state2={state2} state3={state3} menu1={menu1} menu2={menu2} menu3={menu3} /> : null}
            </div>

            <div className="right">
                <h3>메뉴</h3>
                {
                    menu1.map(function (a, i) {
                        return (
                            <button key={i} onClick={() => {
                                setCustom(true);
                                setState(i);
                            }}>
                            {menu1[i]}
                            </button>
                        )
                    })
                }
                <br />
                {
                    menu2.map(function (a, i) {
                        return (
                            <button key={i} onClick={() => {
                                setCustom(true);
                                setState2(i);
                            }}>
                            {menu2[i]}
                            </button>
                        )
                    })
                }
                <br />
                {
                    menu3.map(function (a, i) {
                        return (
                            <button key={i} onClick={() => {
                                setCustom(true);
                                setState3(i);
                            }}>
                            {menu3[i]}
                            </button>
                        )
                    })
                }
            </div>
        </div>

        
    )
}

function Custom(props) {
    return (
        <div className="custom">
            <h4>{props.menu1[props.state]}</h4>
            <h4>{props.menu2[props.state2]}</h4>
            <h4>{props.menu3[props.state3]}</h4>
        </div>
    )
}

export default Prac;