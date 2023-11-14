import React from 'react'
import Component from './Components/Component';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Heading from './Heading'
import About from './Components/About';
// import Alert from './Components/Alert';


export default function App() {
    return (
        <Router>

            <Routes>
                <Route exact path="/about" element={<About/>}></Route>
                    
                <Route exact path="/"
                    element={<Component />}>
                </Route>
            </Routes>

        </Router>
    );
};
// export default App;