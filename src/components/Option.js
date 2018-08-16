import React from 'react';

const Option = (props) => (
    <div className='option'>
        <p className='option__text'>{props.optionText}</p>
        <button className='btn btn--link' onClick={() => {
            props.handleRemoveOption(props.optionText);
        }}>
            Remove
        </button>
    </div>
);

export default Option;