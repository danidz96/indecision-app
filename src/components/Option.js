import React from 'react';

const Option = (props) => (
    <div className='option'>
        {props.optionText}
        <button className='btn btn--link' onClick={() => {
            props.handleRemoveOption(props.optionText);
        }}>
            Remove
        </button>
    </div>
);

export default Option;