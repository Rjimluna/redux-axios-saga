import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ShowData from './showData/ShowData';
import AddData from './addData/AddData'
import EditData from './editData/EditData'

import './Style.css'

export class Main extends Component {

    render() {
        return (
            <div className="Main">
                <ul>
                    <li><Link to="/">Show</Link></li>
                    <li><Link to="/add">Add</Link></li>
                </ul>
                <Route path="/" component={ShowData} exact />
                <Route path="/add" component={AddData} exact />
                <Route path="/edit" component={EditData} exact />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
