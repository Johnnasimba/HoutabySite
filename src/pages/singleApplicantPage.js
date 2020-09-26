import React, { Component } from 'react';
import '../componets/singleApplicant/singleApplicant.styles.scss'


class SingleApplicantPage extends Component {
   
    render() {
        return (                
                  
         <div className="row">        
                <div className="col " id="col-image">
                    
             <div className="container ">
             <img className="" src={require('../images/John Nasimba.jpg')} alt="" />
             </div>
             <div className="container" id="personal-info">
                 <p><strong>NAME: </strong> <span className="right"> JOHN</span></p>
                 <p><strong>SURNAME:</strong> <span className="right"> NASIMBA</span> </p>
                 <p><strong>AGE:  </strong><span className="right"> 32 </span> </p>
                 <p><strong>GENDER:</strong> <span className="right">Male </span> </p>
                 <p><strong>NATIONALITY:</strong><span className="right"> Malawian </span> </p>
                 <p><strong>Available days:</strong> <span className="right">all working days </span> </p>

                 <div className="container" id="recommendation">
                 <h6 className="center">RECOMMENDATIONS</h6>
                 <form >                 
                     <label htmlFor="name">Your Name</label><br/>
                     <input type="text" name="name" />
                     
                     <textarea name="recommend" id="recommed" cols="30" rows="10" placeholder="Recommend JOHN" defaultValue="This is a description." />
                     <button type="submit" className="center btn">Post</button>
                 </form>
                 <div className="recPost">
             
                     <p><strong>David Scott</strong></p>
                     <p className=" blue lighten-4"> <i> Reccomedantions will be here</i></p>                     
                 </div>
                 </div>
             </div>              
         
         </div>
         <div className="col s12 m6 l4 " id="col-extra-info"> 
             <h6 className="left"><strong> JOBS APPLIED</strong></h6><br/>
             <p>irstjob secondjob thirdjob forth job</p>

             <h6 className="left"><strong> QUALIFICATION</strong></h6><br/>
             <p>0 level qualification</p>
         

             <h6 className="left"><strong> EXPERIENCE</strong></h6><br/>
             <p>1 year working experience</p>
             <h6 className="left"><strong>RENFERENCE</strong></h6><br/>
             <p>David Scott</p>
             <p>contact information reserved. </p>
             <div className="left">
                 <h6 className="light-blue-text">Submit the form below to receive contact information for JOHN. <br/> It will be sent to you within 24hrs</h6>
             </div><br/><br/><br/>
             <div className="container" id="login"> 
                 <h6 className="left">Contact</h6>

                 <form  className="right" >
                 
                     <label className="left" >Your Name</label>
                     <input type="text" name="name" placeholder="Enter your Name" required />

                     <label className="left" >Email</label>
                     <input type="text" name="email" placeholder="Enter your user email" required />

                     <label className="left" >Your Mobile Number</label>
                     <input type="number" name="number"  placeholder="Enter mobile number" required />
                     <label htmlFor="message">Message</label>
                     <textarea name="message"  cols="30" rows="10" className="grey-text" defaultValue="This is a description." /> <br/>
                     <button  type="submit" className="btn right">Send Message</button><br/><br/>
                     <h4 className="blue-text">session message</h4>
                 </form>            
             </div>                
          </div>

     
            <div className="col s12 m12 l4 right" id="col-related"> 
                <h6 className="center">RELATED</h6>
                
                <div className="cards related-cards">
                
             <div className="card">
                 
                     <img className="card__image related-card__image" src={require('../images/John Nasimba.jpg')} alt="" />
                     
               <div className="card__content related-card__content">
                 <p className="card-title" id="card-title"> JOHN NASIMBA  </p>
         
                 <p>  firstjob, second job third job forth job </p>
                 <p>LOCATION: Imizamo yethu</p>
               </div>
               <div className="card__info related-card__info">
                 <div>
                   <p> 0 recomendations</p>
                 </div>
                 <div>
                   <a href="/10" className="card__link btn white-text">MORE INFO</a>
                 </div>
               </div>
             </div>
             <div className="card">
                 
                     <img className="card__image related-card__image" src={require('../images/John Nasimba.jpg')} alt="" />
                     
               <div className="card__content related-card__content">
                 <p className="card-title" id="card-title">    JOHN NASIMBA
                   </p>
         
                 <p>
                     firstjob, second job third job forth job
                 </p>
                 <p>LOCATION: Imizamo yethu</p>
               </div>
               <div className="card__info related-card__info">
                 <div>
                   <p> 0 recomendations</p>
                 </div>
                 <div>
                   <a href="/15" className="card__link btn white-text">MORE INFO</a>
                 </div>
               </div>
             </div>
             <div className="card">                 
                     <img className="card__image related-card__image" src={require('../images/John Nasimba.jpg')} alt="John Nasimba" />
                     
               <div className="card__content related-card__content">
                 <p className="card-title" id="card-title"> JOHN NASIMBA </p>
         
                 <p>firstjob, second job third job forth job </p>
                 <p>LOCATION: Imizamo yethu</p>
               </div>
               <div className="card__info related-card__info">
                 <div>
                   <p> 0 recomendations</p>
                 </div>
                 <div>
                   <a href="/11" className="card__link btn white-text">MORE INFO</a>
                 </div>
               </div>
             </div>
             <div className="card">                 
                     <img className="card__image related-card__image" src={require('../images/John Nasimba.jpg')} alt="" />                     
               <div className="card__content related-card__content">
                 <p className="card-title" id="card-title"> JOHN NASIMBA </p>
         
                 <p> firstjob, second job third job forth job </p>
                 <p>LOCATION: Imizamo yethu</p>
               </div>
               <div className="card__info related-card__info">
                 <div>
                   <p> 0 recomendations</p>
                 </div>
                 <div>
                   <a href="/14" className="card__link btn white-text">MORE INFO</a>
                 </div>
               </div>
             </div>
           
             </div>

            </div>
        </div>  
    );
    }
}

 
export default SingleApplicantPage;