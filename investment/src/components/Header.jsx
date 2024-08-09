import React from 'react'
import logo from "../../Public/investment-calculator-logo.png"

function Header() {
  return (
    <header id='header'>
        <img src={logo} alt="money bag logo image" />
        <h1>Investment Calculator</h1>
    </header>
  )
}

export default Header
