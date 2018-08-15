import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    
    handleAddOption = e => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    };
    render() {
        return (
            <div className='widget-content widget-content__add-option'>
            {this.state.error && <p className='widget-content__add-option--error'>{this.state.error}</p>}
                <form className='widget-content widget-content__form' onSubmit={this.handleAddOption} autoComplete="off">
                    <input className='widget-content widget-content__form widget-content__form--input' type="text" name="option" />
                    <button className='btn btn--secondary' type="submit">Add option</button>
                </form>
            </div>
        );
    }
}