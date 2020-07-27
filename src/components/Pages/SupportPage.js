import React, { Component } from 'react';
import { connect } from 'react-redux';


class SupportPage extends Component {

    state = {
        support: ""
    }

    onInput =(input) => (event) =>{
        this.setState({
            [input]: event.target.value
        });
    }

    onTypeClick = (feedback) => (event) => {
        console.log(feedback);
        this.props.dispatch({type: "UNDERSTOOD_DAY", payload: feedback});
        this.props.history.push('/comments');
}

    render() {
        return(
        <div>
            <h1>How Well Are You Being Supported?</h1>
            <input type='number' onChange={this.onInput('support')}></input>
            <button onClick={this.onTypeClick('feelings')}>NEXT</button>
        </div>
        );
    }
}


export default connect()(SupportPage);