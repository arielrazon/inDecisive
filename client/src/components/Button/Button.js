import React from "react";

const Button = props => (
    <button style={{ marginBottom: 10 }} className="btn btn-success">
        {props.children}
    </button>
);

export default Button;