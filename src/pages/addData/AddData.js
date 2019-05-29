import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserData } from '../showData/ducks'

export class AddData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: '',
            contact: '',
            address: ''
        }

        this.inputHandler = this.inputHandler.bind(this);
        this.formHadler = this.formHadler.bind(this);
    }

    inputHandler(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    formHadler(e) {
        e.preventDefault();
        this.props.addUserData(this.state);

        this.setState({
            name: '',
            age: '',
            contact: '',
            address: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.formHadler}>
                <label htmlFor="name">Name: </label>
                <input id="name" type="text" onChange={this.inputHandler} value={this.state.name} />

                <label htmlFor="age">Age: </label>
                <input id="age" type="text" onChange={this.inputHandler} value={this.state.age} />

                <label htmlFor="contact">Contact: </label>
                <input id="contact" type="text" onChange={this.inputHandler} value={this.state.contact} />

                <label htmlFor="address">Address: </label>
                <input id="address" type="text" onChange={this.inputHandler} value={this.state.address} />

                <button>Send</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    addUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(AddData)
