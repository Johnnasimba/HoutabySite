import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './pages/subComponets/Header';
import Footer from './pages/subComponets/Footer'
import Home from './pages/Home';
import About from './pages/About';
import SearchApplicant from './pages/SearchApplicant';
import Applicant from './pages/Applicant';
import Login from './pages/Login';
import Admin from './pages/Admin';
import AddApplicant from './pages/AddApplicant';
import { without } from 'lodash';



class App extends Component {
  constructor() {
    super();
    this.state = {
      Applicants: [],
      employerRequest: [],
      orderBy: 'firstName',
      queryText: '',
      orderDir: 'asc',
      lastIndex: 0,
   
    };
    this.deleteemployerRequest = this.deleteemployerRequest.bind(this);   
    this.addApplicant = this.addApplicant.bind(this);
  } 

  deleteemployerRequest(item) {
    let tempDelete = this.state.employerRequest;
    tempDelete = without(tempDelete, item);
    this.setState({
      employerRequest: tempDelete
    })
  }
  addApplicant(item) {
    let tempAP = this.state.Applicants;
    item.Id = this.state.lastIndex;
    tempAP.unshift(item)
    this.setState({
      Applicant: tempAP,
      lastIndex: this.state.lastIndex + 1
    });
  }
  handleChange=(e)=> {
    this.setState({ queryText: e.target.value })
  }

 componentDidMount() {
   fetch('./Applicant.json')
     .then(Response => Response.json())
     .then(result => {
       const tempApplicants = result.map(item => {
         return item;
       })
       this.setState({
         Applicants: tempApplicants
       })
     });  
   fetch('./employerRequest.json')
     .then(Response => Response.json())
     .then(result => {
       const tempemployerRequest = result.map(item => {
         return item;
       })
       this.setState({
         employerRequest: tempemployerRequest
       })
     });  
 }

  render() {
    const { Applicants, queryText } = this.state;
    const filteredApplicants = Applicants.filter(Applicant =>
      Applicant.firstJob.toLowerCase().includes(queryText.toLowerCase()) ||
      Applicant.secondJob.toLowerCase().includes(queryText.toLowerCase()) ||
      Applicant.thirdJob.toLowerCase().includes(queryText.toLowerCase()) ||
      Applicant.forthJob.toLowerCase().includes(queryText.toLowerCase()) ||
      Applicant.firstName.toLowerCase().includes(queryText.toLowerCase()) ||
      Applicant.lastName.toLowerCase().includes(queryText.toLowerCase()) 

      )
    return (
      <>
        <Header handleChange={ this.handleChange}  />
      <div id="bodyPlusPagination">
          <div id="content">
      <Router>
        <Route path="/"
        render={() => (
          <Home
            title={'This is dynamic data passed through props'}
            Applicants={filteredApplicants}
          />
        )}
        exact={true}
        />

        <Route path="/About"  component={About} />
        <Route path="/SearchApplicant"  component={SearchApplicant} />
        <Route path="/Applicant"  component={Applicant} />
        <Route path="/Login" component={Login} />
        

        <Route path="/Admin"
          render={() => (
            <Admin
              employerRequest={this.state.employerRequest}
              deleteemployerRequest={this.deleteemployerRequest}
              
            />
          )}
        />
        <Route path="/AddApplicant"
                render={() => (
                  <AddApplicant
                    addApplicant={this.addApplicant}                                        
                  />
          )}
        />
      </Router>
      </div>
    </div>
    
        <Footer />
        </>
    );
  }
  
  }
  
export default App;
