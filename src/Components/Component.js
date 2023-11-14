import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Alerty from './Alert'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    const [text, setText] = useState("Enter The Text Here")
    const [Alert, setAlert] = useState(null)
    const showAlert = (type, message) => {
        setAlert({
            type: type,
            msg: message
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }

    const addtext = (event) => {
        setText(event.target.value)
    }

    const upaddtext = (ev) => {
        let uptext = text.toUpperCase()
        setText(uptext)

        showAlert("Sucess", "Converted to uppercase")
    }
    const lowaddtext = (ev) => {
        let lowtext = text.toLowerCase()
        setText(lowtext)
        showAlert("Sucess", "Converted to lowercase")
        document.title = "Flying Trade - lowercase"
    }
    const copytext = (ev) => {
        navigator.clipboard.writeText(text)
        showAlert("Sucess", "Copy To Clipboard")
    }
    const cleartext = ()=>{
        setText("")
    }
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">TextUtils</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"  />
                    <label className="form-check-label" for="flexSwitchCheckChecked">Dark Mood</label>
                </div>
            </nav>
            <div className="container" style={{height:"50px"}}>
            <Alerty alert={Alert} />
            </div>

            <div className="form-floating mX-3 mY-2">
                <textarea className="form-control" value={text} onChange={addtext} id="floatingTextarea2" style={{ height: "100px" }} ></textarea>
                <button type="button" className="btn btn-primary m-3" onClick={upaddtext}>Convert To UpperCase</button>
                <button type="button" className="btn btn-primary m-3" onClick={lowaddtext}>Convert To LowerCase</button>
                <button type="button" className="btn btn-primary m-3" onClick={copytext}>Copy To Clipboard</button>
                <button type="button" className="btn btn-primary m-3" onClick={cleartext}>Clear Text</button>
            </div>

            <div className="container">
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words, {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes take to read </p>
            </div>

        </div>
    )
}

Navbar.propTypes = { tittle: PropTypes.string }
