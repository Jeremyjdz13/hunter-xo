import React from 'react';

const Input = React.forwardRef((props, ref) => {
  return (  
    <div className="form-group">
      <label htmlFor={props.name} className="input-label">{props.title}</label><br />
      <input
        className="form-input"
        id={props.name}
        ref={ref}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        required
        {...props} 
      />
    </div>
  )
})

export default Input;