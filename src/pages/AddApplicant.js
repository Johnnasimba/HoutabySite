 import React, { Component } from 'react';
import '../css/addApplicant.css';



class AppApplicant extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            location: '',
            firstJob: '',
            secondJob: '',
            thirdJob: '',
            forthJob: '',
            recommendation: ''

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        let tempApplicant = {
            id: '',
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            location: this.state.location,
            firstJob: this.state.firstJob,
            secondJob:this.state.secondJob,
            thirdJob: this.state.thirdJob,
            forthJob: this.state.forthJob,
            recommendation: '' 
        }
        this.props.addApplicant(tempApplicant)
        this.setState({
            id: '',
            firstName: '',
            lastName: '',
            location: '',
            firstJob: '',
            secondJob: '',
            thirdJob: '',
            forthJob: '',
            recommendation: ''
        })
    }
    render() {
        return (
<div className="container ">
    <h4>Fill in appropriate information of the applicant below</h4>
     <form action="/Admn" method="POST" encType="multipart/form-data" onSubmit={this.handleSubmit} >
   
        <label htmlFor ="firstName" className="label">First Name</label>
                    <input type="text" id="firstName" name="firstName" required
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />


        <label htmlFor ="lastName" className="label">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required
                        value={this.state.lasttName}
                        onChange={this.handleChange}
                    />

        <label htmlFor ="location" className="label">Location</label>
                    <input type="text" id="location" name="location" required
                        value={this.state.location}
                        onChange={this.handleChange}
                    />


        <label htmlFor ="firstJob" className="label">first Job</label>
                    <input type="text" id="firstJob" name="firstJob" required
                        value={this.state.firstJob}
                        onChange={this.handleChange}
                    />


        <label htmlFor ="secondJob" className="label">Second Job</label>
                    <input type="text" id="secondJob" name="secondJob" required
                        value={this.state.secondJob}
                        onChange={this.handleChange}
                    />

        <label htmlFor ="thirdJob" className="label">Third Job</label>
                    <input type="text" id="thirdJob" name="thirdJob"
                        value={this.state.thirdJob}
                        onChange={this.handleChange}
                    />
        
        <label htmlFor ="forthJob" className="label">Third Job</label>
                    <input type="text" id="forthJob" name="forthJob"
        
                        value={this.state.forthJob}
                        onChange={this.handleChange}
                    />

        <label htmlFor ="image">Insert Image</label><br />
                    <input type="file" id="choose-file" name="image" className="file" required
                     
                    /><br />
        <div className="center">
            <input type="submit" name="submit" value="Submit" className="btn " />
        </div>

     </form>
</div>        )
    }
}

export default AppApplicant;