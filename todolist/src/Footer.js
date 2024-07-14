import React from 'react'

const Footer = ({length}) => {
    const year = new Date();
  return (
    <footer>
      <p>{length} List {length <= 1 ? "item" : "item"}</p>
      <h1>Copyright &copy; {year.getFullYear()}</h1>

      </footer>
  )
}

export default Footer