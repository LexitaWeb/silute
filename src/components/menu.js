import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
  <div
    className="nav"
  >
    <ul
      className="nav-list container"
    >
      <li className="nav-list-item">
        <Link to="/">Pagrindinis</Link>
      </li>
      <li className="nav-list-item">
        <Link to="/naujienos">Naujienos</Link>
      </li>
      <li className="nav-list-item">
        <Link to="/404">Galerija</Link>
      </li>
      <li className="nav-list-item">
        <Link to="/404">Renginiai</Link>
      </li>
      <li className="nav-list-item">
        <Link to="/404">Savivalda</Link>
      </li>
      <li className="nav-list-item">
        <Link to="/404">Gyventojams</Link>
      </li>
      <li className="nav-list-item">
        <Link to="/404">Verslininkams</Link>
      </li>
      <li className="nav-list-item">
        <Link to="/404">Apie savivaldybę</Link>
      </li>
    </ul>
  </div>
)

export default Menu
