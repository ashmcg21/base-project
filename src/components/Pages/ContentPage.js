import React, { Component } from 'react'
import { connect } from 'react-redux';


class ContentPage extends Component {

    onTypeClick = (feedback) => (event) => {
        console.log(feedback);
        this.props.dispatch({type: "UNDERSTOOD_DAY", payload: feedback});
        this.props.history.push('/support');
}
    render() {
        return(
        <div>
            <h1>How Well Did You Understand The Material?</h1>
            <input></input>
            <button onClick={this.onTypeClick('feelings')}>SUBMIT</button>
        </div>
        );
    }
}


export default connect()(ContentPage);