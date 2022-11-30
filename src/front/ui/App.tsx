import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Filter } from './pages/Filter'

export function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div style={{ paddingLeft: '10rem', paddingRight: '10rem', marginTop: '10px' }}>
          <Routes>
            <Route path="/filter" element={<Filter />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}
