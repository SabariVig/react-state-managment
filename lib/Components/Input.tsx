import React, { useState } from 'react'
import styled from 'styled-components'

const Input = () => {
  const [label, setLabel] = useState('')
  return (
    <div>
      <InputStyle
        onChange={(e) => {
          setLabel(e.target.value)
        }}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            setLabel('')
          }
        }}
        value={label}
        type="text"
      />
    </div>
  )
}

const InputStyle = styled.input`
  color: ${({ theme }) => theme.global.text};
  border: none;
  background: grey;
`

export default Input
