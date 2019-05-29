import React, { Component } from 'react';
import { connect } from 'react-redux';

import { delUserData, fetchUsersData } from '../showData/ducks';

export class ShowData extends Component {

    componentDidMount() {
        this.props.fetchUsersData();
    }

    editUser(user) {
        this.props.history.push({
            pathname: '/edit',
            state: {
                id: user.id,
                name: user.name,
                age: user.age,
                contact: user.contact,
                address: user.address
            }
        })
    }

    deleteUser(user) {
        this.props.delUserData(user);
        console.log(this.props)
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>CONTACT</th>
                        <th>ADDRESS</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.fetchUsers.map((account) => {
                        return(
                            <tr key={account.id}>
                                <td>{account.name}</td>
                                <td>{account.age}</td>
                                <td>{account.contact}</td>
                                <td>{account.address}</td>
                                <td><button onClick={() => this.editUser(account)}>Edit</button>|<button onClick={() => this.deleteUser(account.id)}>Delete</button></td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => ({
    fetchUsers: state.usersinfo.users
})

const mapDispatchToProps = {
    delUserData,
    fetchUsersData
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowData)
