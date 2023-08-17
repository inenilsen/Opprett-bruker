import React from 'react'
import './App.css'
import Info from './components/Info'
import Create from './components/Create'

export default function App() {
    return (
        <div className="container">
            <Info/>
            <Create/>
        </div>
    )
}