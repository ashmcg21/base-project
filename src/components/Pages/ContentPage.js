import React, { Component } from 'react'
import { connect } from 'react-redux';


class ContentPage extends Component {

    state = {
        content: ""
    }

    onInput =(input) => (event) =>{
        this.setState({
            [input]: event.target.value
        });
    }


    onTypeClick = (feedback) => (event) => {
        console.log(feedback);
        this.props.dispatch({type: "UNDERSTOOD_DAY", payload: feedback});
        this.props.history.push('/support');
}
    render() {
        return(
        <div>
            <h1>How Well Did You Understand The Material?</h1>
            <input type='number' onChange={this.onInput('content')}></input>
            <button onClick={this.onTypeClick('content')}>NEXT</button>
        </div>
        );
    }
}


export default connect()(ContentPage);