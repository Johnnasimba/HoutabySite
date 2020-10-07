import React, { Component } from 'react';
import '../componets/singleApplicant/singleApplicant.styles.scss';
import Loading from '../componets/loading/loading.component';
import SingleApplicant from '../componets/singleApplicant/singleApplicant.component';


class SingleApplicantPage extends Component {
  
  constructor() {
    super(); 
    this.state = {
      Applicants: [],
      id: '',
      ApplicantFirstJob: 'driver'
    }
  }
  componentDidMount() {
    let id = parseInt(this.props.id)
    id ? this.setState({
      id: id
    }) : id = '';

    const applicantsData = '/api/applicants';
    fetch(applicantsData)
     .then(Response => Response.json())
     .then(result => {
       const tempApplicants = result.map(item => {
         return item;
       })
       this.setState({
        Applicants: tempApplicants
       })
     });  
     
  }
  render() { 
    const thisApplicantId = this.state.id    
    const Applicant = this.state.Applicants.find(item => (item.id === thisApplicantId))
    
    let ApplicantFirstJob = ''
    let ApplicantSecondJob = ''
    function conditionalFunc() {
      if (Applicant) {
        ApplicantFirstJob = Applicant['firstJob']
        ApplicantSecondJob = Applicant['secondJob']
      } else {
        console.log('')
      }
    }  
    conditionalFunc() 
      const relatedApplicants = this.state.Applicants.filter(Applicant =>
        Applicant.firstJob.toLowerCase().includes(ApplicantFirstJob.toLowerCase()) ||
        Applicant.firstJob.toLowerCase().includes(ApplicantSecondJob.toLowerCase()) ||
        Applicant.secondJob.toLowerCase().includes(ApplicantFirstJob.toLowerCase()) ||
        Applicant.secondJob.toLowerCase().includes(ApplicantSecondJob.toLowerCase()) ||
        Applicant.thirdJob.toLowerCase().includes(ApplicantFirstJob.toLowerCase()) ||
        Applicant.thirdJob.toLowerCase().includes(ApplicantSecondJob.toLowerCase()) ||
        Applicant.forthJob.toLowerCase().includes(ApplicantFirstJob.toLowerCase()) ||
        Applicant.forthJob.toLowerCase().includes(ApplicantSecondJob.toLowerCase())
      )
    conditionalFunc() 
    return (
      <div> 
        {Applicant? ( 
          <SingleApplicant Applicant ={Applicant} relatedApplicants={relatedApplicants} id={this.state.id} />
        ) : (
          <Loading/>
          )}
        </div>
    );
    }
}

 
export default SingleApplicantPage;