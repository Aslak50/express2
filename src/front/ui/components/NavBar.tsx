import { Navbar, NavbarDivider, NavbarGroup } from '@blueprintjs/core'
import React from 'react'
import { NavLink } from 'react-router-dom'

export function NavBar(): JSX.Element {
  return (
      <Navbar>
      <NavbarGroup>
        <NavLink to="/">ACCEUIL</NavLink>
        <NavbarDivider />
        <NavLink to="/filter">Requête PIM</NavLink>
        </NavbarGroup>
      </Navbar>
  )
}
