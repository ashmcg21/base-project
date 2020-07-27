import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import FeelingsPage from '../Pages/FeelingsPage';
import CommentsPage from '../Pages/CommentsPage';
import SupportPage from '../Pages/SupportPage';
import ContentPage from '../Pages/ContentPage';
import SummaryPage from '../Pages/SummaryPage';
import FeedbackPage from '../Pages/FeedbackPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
            <Route exact path="/feedbackform" component={FeedbackPage} />
            <Route exact path="/" component={FeelingsPage} />
            <Route exact path="/comments" component={CommentsPage} />
            <Route exact path="/support" component={SupportPage} />
            <Route exact path="/content" component={ContentPage} />
            <Route exact path="/summary" component={SummaryPage} />
        </Router>
      </div>
    );
  }
}

export default App;
