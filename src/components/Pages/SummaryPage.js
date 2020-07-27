import React, { Component } from 'react'
import { connect } from 'react-redux';


class SummaryPage extends Component {


    render() {

        console.log(this.props);

        return(
        <div>
            <h1>REVIEW</h1>

            <div>
                <h4>How are you feeling: 
                    <p>{this.props.store.FeelingsReducer.feelings}</p>
                    </h4>
                <h4>How well do you understand the material: 
                    <p>{this.props.store.contentReducer.content}</p>
                    </h4>
                <h4>How well are you being supported: 
                    <p>{this.props.store.supportReducer.support}</p>
                    </h4>
                <h4>Comments:
                    <p>{this.props.store.SummaryReducer.comments}</p>
                </h4>
            </div>
            <button>SUBMIT</button>
        </div>
        );
 }
}

const mapStoreToProps = (store) => ({store});

export default connect(mapStoreToProps)(SummaryPage);