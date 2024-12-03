import React from 'react';
import { InputError, InputLabel, InputStyle, InputWrapper } from './textArea.style';

function TextArea({
  title, 
  value, 
  error, 
  onChange, 
  placeholder, 
  requiredSymbol, 
  InputWidth, 
  maxLength, 
  label, 
  inputPadding
}) {
  return (
    <InputWrapper InputWidth={InputWidth}>
      <InputLabel htmlFor="shop">
        {label}
        {requiredSymbol}
      </InputLabel>
      <InputStyle
        inputPadding={inputPadding}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        cols="6" 
        rows="10"
      />
      {error ? <InputError>{title} is required</InputError> : ''}
    </InputWrapper>
  );
}

export default TextArea;
