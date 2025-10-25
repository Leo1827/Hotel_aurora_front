import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ type, className }) => {
  return (
    <div className="input-wrapper ">
      
      <input type={type} className={`input ${className}`}></input>
        
    </div>
  )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};

export default Input