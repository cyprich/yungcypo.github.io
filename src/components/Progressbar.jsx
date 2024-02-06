import React, {useState} from 'react';

const Progressbar = (props) => {
    return (
        <div style={{
            border: "1px solid white",
            borderRadius: "0.5em",
        }}>
            <div style={{
                width: props.value + "%",
                backgroundColor: props.farba,
                color: props.invert ? "white" : "black",
                padding: "0.25em",
                borderRadius: "0.5em",
            }}>
                {props.text}
            </div>
        </div>
    );
};

export default Progressbar;
