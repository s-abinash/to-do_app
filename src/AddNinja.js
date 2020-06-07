import React, { Component } from 'react'
import './fomantic-ui/dist/semantic.min.css'
class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        place: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addNinja(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange} />
                    <label htmlFor="place">Place:</label>
                    <input type="text" id="place" onChange={this.handleChange} />
                    <button id="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default AddNinja