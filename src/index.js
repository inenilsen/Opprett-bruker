import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Info from './Info'
import Opprett from './Opprett'

function Side() {
    return (
        <div class="container">
            <Info/>
            <Opprett/>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Side/>)