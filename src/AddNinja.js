import React, { Component } from 'react'
import 'fomantic-ui/dist/semantic.min.css'
//import 'fomantic-ui/dist/semantic.min.js'
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
            <div className="ui container">
                <form onSubmit={this.handleSubmit} className="ui form">
                    <div className="ui field">
                        <label htmlFor="name">Name:</label>
                        <input className="ui input" type="text" id="name" onChange={this.handleChange} />
                    </div>
                    <div className="ui field">
                        <label htmlFor="age">Age:</label>
                        <input className="ui input" type="text" id="age" onChange={this.handleChange} />
                    </div>
                    <div className="ui field">
                        <label htmlFor="place">Place:</label>
                        <input className="ui input" type="text" id="place" onChange={this.handleChange} />
                    </div>
                    <div className="ui field">
                        <button className="ui button" id="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default AddNinja