import React, { Component } from 'react';
import { connect } from 'react-redux';


class CommentsPage extends Component {

    state = {
        comments: ""
    }

    onInput =(input) => (event) =>{
        this.setState({
            [input]: event.target.value
        });
    }

    onTypeClick = (feedback) => (event) => {
        console.log(feedback);
        this.props.dispatch({type: "COMMENTS", payload: feedback});
        this.props.history.push('/summary');
}

    render() {
        return(
        <div>
            <h1>Anything You'd Like To Say?</h1>
            <input onChange={this.onInput('comments')}></input>
            <button onClick={this.onTypeClick('feelings')}>SUBMIT</button>
        </div>
        );
    }
}


export default connect()(CommentsPage);