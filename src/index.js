import React  from "react";
import ReactDom from 'react-dom/client'
import "./index.css"
import App from "./app";
// import Bgchange from "./bg";

let container = document.getElementById('root')
let root = ReactDom.createRoot(container)

root.render(
    <>
    <App></App>
    </>
);