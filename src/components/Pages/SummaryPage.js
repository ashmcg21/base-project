import React, { Component } from 'react'
import { connect } from 'react-redux';


class SummaryPage extends Component {


    render() {

        console.log(this.props);

        return(
        <div>
            <h1>REVIEW</h1>

            <div>
                <h4>How are you feeling: {this.props.store.feelingsReducer}</h4>
                    
                <h4>How well do you understand the material:</h4>
                <h4>How well are you being supported:</h4>
                <h4>Comments:</h4>
            </div>
            <button>SUBMIT</button>
        </div>
        );
 }
}

const mapStoreToProps = (store) => ({store});

export default connect(mapStoreToProps)(SummaryPage);