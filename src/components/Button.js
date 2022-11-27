import React from 'react'

const Button = ({ text, color }) => {
  return (
    <button className="btn" style={{ color }}>{ text }</button>
  )
}

export default Button
