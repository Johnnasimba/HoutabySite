import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import RecommendationForm from './addRecommendationForm.component';
import './singleApplicant.styles.scss';
const SingleApplicant = ({ Applicant, relatedApplicants, id }) => {
    const [ setRecommendationInfo] = useState({recommendationInfo: []});
    return ( 
        <div className="row" >
           
        <div className="col " id="col-image">
                
          <div className="container ">
            <img className="" src={require(`../../images/${Applicant.image}`)} alt="" />
          </div>
          <div className="container" id="personal-info">
          <p><strong>NAME: </strong> <span className="right"> {Applicant.firstName}</span></p>
          <p><strong>SURNAME:</strong> <span className="right">{Applicant.lastName} </span> </p>
            <p><strong>AGE:  </strong><span className="right"> {Applicant.age} </span> </p>
            <p><strong>GENDER:</strong> <span className="right">{Applicant.gander} </span> </p>
            <p><strong>NATIONALITY:</strong><span className="right"> {Applicant.nationality} </span> </p>
            <p><strong>Available days:</strong> <span className="right">all working days </span> </p>                    
            <RecommendationForm id={id} setRecommendationInfo={setRecommendationInfo} recommendation={Applicant.recommendations}/>
             
        </div>
     
        </div>
        <div className="col s12 m6 l4 " id="col-extra-info">
          <h6 className="left"><strong> JOBS APPLIED</strong></h6><br />
          <p> {Applicant.firstJob}, {Applicant.secondJob}, {Applicant.thirdJob} {Applicant.forthJob}</p>

          <h6 className="left"><strong> QUALIFICATION</strong></h6><br />
          <p>{Applicant.Highest_Qualification}</p>
     

          <h6 className="left"><strong> EXPERIENCE</strong></h6><br />
          <p>{Applicant.experience}</p>
          <h6 className="left"><strong>RENFERENCE</strong></h6><br />
          <p>David Scott</p>
          <p>contact information reserved. </p>
          <div className="left">
            <h6 className="light-blue-text">Submit the form below to receive contact information for JOHN. <br /> It will be sent to you within 24hrs</h6>
          </div><br /><br /><br />
          
          <div className="container" id="login">
            <form className="right" >
             
              <label className="left" >Your Name</label>
              <input type="text" name="name" placeholder="Enter your Name" required />

              <label className="left" >Email</label>
              <input type="text" name="email" placeholder="Enter your user email" required />

              <label className="left" >Your Mobile Number</label>
              <input type="number" name="number" placeholder="Enter mobile number" required />
              <label htmlFor="message">Message</label>
              <textarea name="message" cols="30" rows="10" className="grey-text" defaultValue={"Please send me contact information of " + Applicant.firstName} /> <br />
              <button type="submit" className="btn right">Send Message</button><br /><br />
              <h4 className="blue-text">session message</h4>
            </form>
          </div> 

        </div>
 
        <div className="col s12 m12 l4 right" id="col-related">
          <h6 className="center">RELATED</h6>
          
            <div className="cards related-cards" >
            {relatedApplicants.filter(object=> object.id !==id).slice(0, 4).map(item =>(
              <div className="card" key={item.id}>
             
                <img className="card__image related-card__image" src={require(`../../images/${item.image}`)} alt="" />
                 
                <div className="card__content related-card__content">
                  <p className="card-title" id="card-title"> {item.firstName} {item.lastName} </p>
     
                  <h6>  {item.firstJob}, {item.secondJob}, {item.thirdJob} {item.forthJob} </h6>
                  <p>LOCATION: {item.location}</p>
                </div>
                <div className="card__info related-card__info">
                  <div>
                    <p> 0 recomendations</p>
                  </div>
                  <div>
                    <Link to={"/" + item.id} className="card__link btn white-text">MORE INFO</Link>
                  </div>
                </div>
              </div>
            
          ))
          }
        </div>



        </div>
       
      </div>
     );
}
 
export default SingleApplicant;