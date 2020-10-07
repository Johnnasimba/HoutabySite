import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './pages/subComponets/Header';
import Footer from './pages/subComponets/Footer'
import HomePage from './pages/HomePage';
import About from './pages/About';
import SearchApplicant from './pages/SearchApplicant';
import Applicant from './pages/Applicant';
import LoginPage from './pages/LoginPage';
import Admin from './pages/Admin';
import AddApplicant from './pages/AddApplicant';
import SignUpPage from './pages/signupPage';
import SingleApplicantPage from './pages/singleApplicantPage';
import GroupSearch from './pages/groupSearch';
import { without } from 'lodash';
import { AuthProvider } from "./componets/auth/Auth";
import PrivateRoute from "./componets/auth/PrivateRoute";
import Loading from './componets/loading/loading.component';


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
    const applicantsData = '/api/applicants';
    const employerRequestData = '/api/employer-request';
   fetch(applicantsData)
     .then(Response => Response.json())
     .then(result => {
       const tempApplicants = result.map(item => {
         return item;
       })
       if (tempApplicants) {
        this.setState({
          Applicants: tempApplicants
        })
       } else {
         return (
           <Loading />
         )
       }
       
     });  
   fetch(employerRequestData)
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
      <AuthProvider>     
        <Router>
      
      <Header handleChange={ this.handleChange}  />
      <div id="bodyPlusPagination">
          <div id="content">
      
          <div>
            <Switch>
              <Route path="/"
              render={() => (
                <HomePage
                  Applicants={filteredApplicants}
                />
              )}
              exact={true}
              />

              <Route exact path="/about"  component={About} />
              <Route exact path="/searchApplicant"  component={SearchApplicant} />
              <PrivateRoute exact path="/applicant"  component={Applicant} />
              <Route exact path="/login" component={LoginPage} />
                  
              <PrivateRoute
                exact
                path="/Admin"
                component={Admin}
                employerRequest={this.state.employerRequest}
                deleteemployerRequest={this.deleteemployerRequest}
              />
                          
              <PrivateRoute
                exact
                path="/signup"
                component={SignUpPage}
              />
                
              <PrivateRoute
                  exact          
                  path="/AddApplicant"
                  component={AddApplicant}   
                  addApplicant={this.addApplicant}     
              />
              <Route  path="/search/:jobTitle"
                render={(props) => {
                  let jobTitle = props.location.pathname.replace('/search/', '');
                    return (
                    <GroupSearch
                        jobTitle={jobTitle}
                        groupApplicants={filteredApplicants}
                    /> 
                  )
                  }}
              />
              <Route  path="/:id"
                render={(props) => {
                  let id = props.location.pathname.replace('/', '');
                    return (
                    <SingleApplicantPage
                        id={id}
                    /> 
                  )
                  }}
              />
            </Switch>
            </div>
          
      </div>
    </div>
    
        <Footer />
        </Router>
      </AuthProvider> 
    );
  }
  
  }
  
export default App;
