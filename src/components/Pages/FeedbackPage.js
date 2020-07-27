import React, { Component } from 'react';
import { connect } from 'react-redux';


class FeedbackPage extends Component {

    state = {
        feedbackList: [],
        currentFeedback: {
            feelings: "",
            content: "",
            comments: "",
            support: "",
        },
    };

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

    clickToReview = (event) => {
        this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state.feedbackList })
    }


    addFeedbackToReview = (event) => {
        this.setState({
        feedbackList: [...this.state.feedbackList, this.state.currentFeedback]
        }, () => {
            this.clearFeedback();
        });
    };

    clearFeedback() {
        this.setState({
            currentFeedback: {
                feelings: '',
                content: '',
                comments: '',
                support: '',
            }
        });
    };

    render() {
        return
    };
};

const mapStoreToProps = (store) => ({store});

export default connect(mapStoreToProps)(FeedbackPage);