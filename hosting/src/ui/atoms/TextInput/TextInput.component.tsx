import React, { useRef, useState } from 'react'
import * as S from './TextInput.style'

const TextInput = ({ rows = 5, text = null, setText = null, placeholder = 'Say something...', style = {} }) => {
  const textMaxLength = 750
  const inputRef = useRef(null)
  const [capitalize, setCapitalize] = useState(true)
  // const [charCount, setCharCount] = useState(textMaxLength)

  const onChange = () => {
    const inputEl = inputRef.current
    const value = inputEl.value.replace(/(\r\n|\n|\r)/gm, '')
    // setCharCount(textMaxLength - value.length)
    setText(capitalize ? value.substr(0, 1).toUpperCase() : value)
    setCapitalize(false)
  }

  const handleKeyDown = e => (e.key === 'Enter' ? e.preventDefault() : null)

  return (
    <div style={{ width: `100%` }}>
      <S.TextInput
        autoFocus
        style={style}
        ref={inputRef}
        placeholder={placeholder}
        rows="5"
        wrap="hard"
        maxLength={textMaxLength}
        value={text}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default TextInput
