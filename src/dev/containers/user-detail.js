import React, { Component } from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (<h4>Select a User...</h4>);
        }
        return (
            <div>
                <img src={this.props.user.thumbnail} alt="Nothing goes here"/>
                <h2>{this.props.user.first}{this.props.user.last}</h2>
                <h2>Age: {this.props.user.age}</h2>
                <h3>Description: {this.props.user.description}</h3>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);