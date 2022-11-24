import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Filter } from './pages/Filter'

export function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
