import React from 'react'

function TextInput( {type, classList, click, holderText} ) {
  return (
    <input type={type} className={classList} onChange={click} placeholder={holderText} />
  )
}

export default TextInput
