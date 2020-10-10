import React, { Component } from 'react';



class Applicant extends Component {
    render() {
        return (
            <div class="row">        
                <div class="col " id="col-image">
                    <div class="container ">
                        <img class="" src={require('../images/John Nasimba.jpg')} alt="John Nasimba" />
                    </div>
                    <div class="container" id="personal-info">
                        <p><strong>NAME: </strong>
                            <span class="right"> JOHN</span>
                        </p>
                        <p><strong>SURNAME:</strong>
                            <span class="right">NASIMBA</span>
                        </p>
                        <p><strong>AGE:  </strong>
                            <span class="right"> 23 </span>
                        </p>
                        <p><strong>GENDER:</strong>
                            <span class="right">Male </span>
                        </p>
                        <p><strong>NATIONALITY:</strong>
                            <span class="right"> Malawian </span>
                        </p>
                        <p><strong>Available days:</strong>
                            <span class="right">All working days </span>
                        </p>

                        <div class="container" id="recommendation">
                            <h6 class="center">RECOMMENDATIONS</h6>
                            <form method="POST" action="/">                        
                                <label for="name">Your Name</label><br />
                                <input type="text" name="name" />
                                
                                <textarea name="recommend" id="recommed" cols="30" rows="10" placeholder="Recommend John"></textarea>
                                <button type="submit" class="center btn">Post</button>
                            </form>
                            <div class="recPost  ">                                
                                <p><strong>Mark</strong></p>
                                <p class=" blue lighten-4"> <i> He is a hard working Man</i></p>                                
                            </div>
                        </div>
                    </div>
                    
                
                </div>
                <div class="col s12 m6 l4 " id="col-extra-info"> 
                    <h6 class="left"><strong> JOBS APPLIED</strong></h6><br />
                    <p>
                        Gardener,
                        Driver,
                        Housekeeper,
                        Still Fixer
                    </p>
                    <h6 class="left"><strong> QUALIFICATION</strong></h6><br />
                    <p>O level</p>
                

                    <h6 class="left"><strong> EXPERIENCE</strong></h6><br />
                    <p>5 Years of working experience</p>
                    <h6 class="left"><strong>RENFERENCE</strong></h6><br />
                    <p> Mark </p>
                    <p>contact information reserved. </p>
                    <div class="left">
                        <h6 class="light-blue-text">Submit the form below to receive contact information for JOHN. <br /> It will be sent to you within 24hrs</h6>
                    </div><br /><br /><br />
                    <div class="container" id="login"> 
                        <h6 class="left">Contact</h6>
                        <form method="POST" action="/" class="left" >                        
                            <label class="left" >Your Name</label>
                            <input type="text" name="name" placeholder="Enter your Name" required />

                            <label class="left" >Email</label>
                            <input type="text" name="email" placeholder="Enter your user email" required />

                            <label class="left" >Your Mobile Number</label>
                            <input type="number" name="number"  placeholder="Enter mobile number" required />
                            <input type="number" name="id" value="" className="idField" />

                            <label for="message">Message</label>
                            <textarea name="message" id="" cols="30" rows="10" class="grey-text">Please send me contact information for John Nasimba with an id of 12 </textarea><br />
                            <button  type="submit" class="btn right">Send Message</button><br /><br />
                            <h4 class="blue-text">session message</h4>
                        </form>            
                    </div>                
                </div>                
                <div class="col s12 m12 l4 right" id="col-related"> 
                    <h6 class="center">RELATED</h6>                    
                    <div class="cards related-cards">                
                        <div class="card">                            
                            <img class="card__image related-card__image" src={require('../images/John Nasimba.jpg')} alt=" mike" />                                    
                            <div class="card__content related-card__content">
                                <p class="card-title" id="card-title">John Nasimba</p>                        
                                <p>
                                    Gardener,
                                    Housekeeper,
                                    still Fixer,
                                    Plumber
                                </p>
                                <p>LOCATION: Imizamo yethu</p>
                            </div>
                            <div class="card__info related-card__info">
                                <div>
                                    <p> 0 recomendations</p>
                                </div>
                                <div>
                                    <a href="/12" class="card__link btn white-text">MORE INFO</a>
                                </div>
                            </div>
                        </div>
                        <div class="card">                            
                            <img class="card__image related-card__image" src={require('../images/John Nasimba.jpg')} alt=" james" />                                
                            <div class="card__content related-card__content">
                                <p class="card-title" id="card-title">John Nasimba</p>                        
                                <p>
                                    Gardener,
                                    Housekeeper,
                                    still Fixer,
                                    Plumber
                                </p>
                                <p>LOCATION: Imizamo yethu</p>
                            </div>
                            <div class="card__info related-card__info">
                                <div>
                                    <p> 0 recomendations</p>
                                </div>
                                <div>
                                    <a href="/12" class="card__link btn white-text">MORE INFO</a>
                                </div>
                            </div>
                        </div>
                        <div class="card">                            
                            <img class="card__image related-card__image" src={require('../images/John Nasimba.jpg')} alt=" john" />                                
                            <div class="card__content related-card__content">
                                <p class="card-title" id="card-title"> John Nasimba </p>                    
                                <p>
                                    Gardener,
                                    Housekeeper,
                                    still Fixer,
                                    Plumber
                                </p>
                                <p>LOCATION: Imizamo yethu</p>
                            </div>
                            <div class="card__info related-card__info">
                                <div>
                                    <p> 0 recomendations</p>
                                </div>
                                <div>
                                    <a href="/12" class="card__link btn white-text">MORE INFO</a>
                                </div>
                            </div>
                        </div>
                        <div class="card">                            
                            <img class="card__image related-card__image" src={require('../images/John Nasimba.jpg')} alt=" name" />                                
                            <div class="card__content related-card__content">
                                <p class="card-title" id="card-title">  John Nasimba  </p>                        
                                <p>
                                    Gardener,
                                    Housekeeper,
                                    still Fixer,
                                    Plumber
                                </p>
                                <p>LOCATION: Imizamo yethu</p>
                            </div>
                            <div class="card__info related-card__info">
                                <div>
                                    <p> 0 recomendations</p>
                                </div>
                                <div>
                                    <a href="/12" class="card__link btn white-text">MORE INFO</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Applicant;