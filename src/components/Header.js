import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button';

const Header = ({ title }) => {
  return (
    <header>
        <h1>{ title } App</h1>
        <Button color='red' text='Hello'/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Tasks Tracker'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header