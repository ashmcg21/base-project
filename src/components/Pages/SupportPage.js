import React, { Component } from 'react';
import { connect } from 'react-redux';


class SupportPage extends Component {

    onTypeClick = (feedback) => (event) => {
        console.log(feedback);
        this.props.dispatch({type: "UNDERSTOOD_DAY", payload: feedback});
        this.props.history.push('/comments');
}

    render() {
        return(
        <div>
            <h1>How Well Are You Being Supported?</h1>
            <input></input>
            <button onClick={this.onTypeClick('feelings')}>SUBMIT</button>
        </div>
        );
    }
}


export default connect()(SupportPage);