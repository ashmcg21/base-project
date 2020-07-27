import React, { Component } from 'react';
import { connect } from 'react-redux';


class FeelingsPage extends Component {

    onInput =(input) => (event) =>{
        this.setState({
            [input]: event.target.value
        });
    };

    onTypeClick = (feedback) => (event) => {
            console.log(feedback);
            this.props.dispatch({type: "FELT_ABOUT_DAY", payload: feedback});
            this.props.history.push('/content');
    };

    render() {
        return(
        <div>
            <h1>How Are You Feeling?</h1>
            <input type='number' onChange={this.onInput('feelings')}></input>
            <button onClick={this.onTypeClick('feelings')}>NEXT</button>
        </div>
        );
    };
};



export default connect()(FeelingsPage);