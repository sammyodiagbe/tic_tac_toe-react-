import React, { Component } from 'react'

class FormComponent extends Component {

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.props.handleSubmit}>
                    <input className="input-text" type="text" placeholder='Got something in mind?' value={this.props.value} onChange={this.props.handleChange} />
                    <button className="btn" type='submit'><li className='fa fa-send'></li>Add</button>
                </form>
            </div>
        )
    }
}

export default FormComponent;