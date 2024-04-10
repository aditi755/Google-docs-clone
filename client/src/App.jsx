import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TextEditor from './TextEditor.jsx'
import { v4 as uuidV4 } from "uuid"
import './App.css'

function App() {

  return (
    <>
   <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to={`/documents/${uuidV4()}`} />} />
        <Route path="/documents/:id" element={<TextEditor />} />
       </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
