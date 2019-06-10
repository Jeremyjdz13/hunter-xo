import React from 'react';

const CheckBox = React.forwardRef((props, ref, option) => {

    return( <div>
    <label className="text-label" htmlFor={props.name} >{props.title}</label>
    <div className="checkbox-group">
      {props.options.map(option => {
        return (
          <label key={option}>
            <input
              className="form-checkbox"
              id = {props.name}
              name={props.name}
              ref={ref}
              onChange={props.handleChange}
              value={option}
              // checked={props.selectedOptions.indexOf(option) > -1 }
              type="checkbox" /> {option}
          </label>
          );
        })}
      </div>
    </div>
  );

})

export default CheckBox