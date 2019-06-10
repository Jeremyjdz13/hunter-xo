import React from "react";

const TextArea = React.forwardRef((props, ref) => (
  <div className="text-container">
    <label className="text-label">{props.title}</label>
    <textarea
      className="text-area"
      name={props.name}
      ref={ref}
      rows={props.rows}
      cols={props.cols}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      required
    />
  </div>
));

export default TextArea;