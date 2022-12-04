import React from "react"
import "./Intro.css"
import { useNavigate } from "react-router-dom";


const Intro = () => {
    let navigate = useNavigate();
    return (<div>
        <h1>Welcome</h1>
        <button onClick={() => navigate("/inputInfo")}> Start </button>
    </div>)
}

export default Intro;