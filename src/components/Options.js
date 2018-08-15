import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className='widget-header'>
            <h3>Your Options</h3>
            <button className='btn btn--link' onClick={props.handleRemoveAll}>Remove All</button>
        </div>
        <div className='widget-content'>
            {props.options.length === 0 && <p className='widget-content__message'>Please add an option to get started!</p>}
            {props.options.map(option => (
                <Option 
                key={option} 
                optionText={option}
                handleRemoveOption={props.handleRemoveOption}
                />
            ))
            }
        </div>
    </div>
);

export default Options;