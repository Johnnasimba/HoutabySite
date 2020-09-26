import React, { Component } from 'react';



class SearchApplicant extends Component {
    render() {
        return (
            
            <div className="row">        
            <div className="col " id="col-image">
                <div className="container ">
                    <img className="" src={require('../images/John Nasimba.jpg')} alt="" />
                </div>
                <div className="container" id="personal-info">
                    <p><strong>NAME: </strong> JOHN</p>
                    <p><strong>SURNAME:</strong> NASIMBA</p>
                    <p><strong>AGE:  </strong> Coming soon</p>
                    <p><strong>GENDER:</strong> coming soon</p>
                    <p><strong>NATIONALITY:</strong> coming soon</p>
                    <p><strong>Available days:</strong> coming soon</p>
                </div>

            </div>
            <div className="col s12 m6 l4 " id="col-extra-info"> 
                <h6 className="left"><strong> JOBS APPLIED</strong></h6><br />
                <p>
                    first job second job third job
                </p>

                <h6 className="left"><strong> QUALIFICATION</strong></h6><br />
                <p> Malawi School certificate of education (GRADE 12)</p>
                <p>O Level equivalent qualification</p>

                <h6 className="left"><strong> EXPERIENCE</strong></h6><br/>
                <p>Worked as a Gardener for the past 1 year in Llandano</p>
                <h6 className="left"><strong>RENFERENCE</strong></h6><br />
                <p>Devid Scott</p>
                <p>contact information reserved. </p>
                <div className="left">
                    <a className="waves-effect waves-light btn modal-trigger grey" href="#modal1"><h6 className="left " id="recommendation"><strong> 2 Recommendations</strong></h6></a>                            
                </div><br />
                <div className="left">
                    <h6>submit the form below to receive contact information for JOHN. <br /> It will be sent to you within 24hrs</h6>
                </div><br /><br /><br />
                <div className="left">
                    <form action="" className="left">
                        <label for="name">Your Name</label>
                        <input type="text" id="name" name="name" required />
                        <label for="Email">Email</label>
                        <input type="email" id="email" name="email" />
                        <button className="right btn"> Submit</button>
                    </form>
                </div>
            </div>
    
                <div id="modal1" className="modal modal-fixed-footer">
                    <div className="modal-content">
                    <h4>Recommendations</h4>
                    <p>RECOMMEND</p>
                    </div>
                    <div className="modal-footer">
                    <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">CLOSE</a>
                    </div>
                </div>
                
                <div className="col s12 m12 l6 right" id="col-related"> 
                    <h6 className="center">RELATED</h6>
                    <div className="cards related-cards">
                        <div className="card">
                            
                        <img className="card__image related-card__image" src={require('../images/John Nasimba.jpg')} alt="" />
                                
                        <div className="card__content related-card__content">
                            <p className="card-title" id="card-title"> JOHN NASIMBA  </p>
                    
                            <p>HOUSE KEEPER GARDENER DRIVER BRICK LAYER </p>
                            <p>LOCATION: Imizamo yethu</p>
                        </div>
                        <div className="card__info related-card__info">
                            <div>
                                <p> 0 recomendations</p></div>
                            <div>
                            <a href="/home/10" className="card__link btn white-text">MORE INFO</a>
                            </div>
                        </div>
                        </div> 
                        <div className="card">
                            
                        <img className="card__image related-card__image" src={require('../images/John Nasimba.jpg')} alt="" />
                                
                        <div className="card__content related-card__content">
                            <p className="card-title" id="card-title"> JOHN NASIMBA  </p>
                    
                            <p>HOUSE KEEPER GARDENER DRIVER BRICK LAYER </p>
                            <p>LOCATION: Imizamo yethu</p>
                        </div>
                        <div className="card__info related-card__info">
                            <div>
                                <p> 0 recomendations</p></div>
                            <div>
                            <a href="/home/13" className="card__link btn white-text">MORE INFO</a>
                            </div>
                        </div>
                        </div> 
                        <div className="card">
                            
                        <img className="card__image related-card__image" src={require('../images/John Nasimba.jpg')} alt="" />
                                
                        <div className="card__content related-card__content">
                            <p className="card-title" id="card-title"> JOHN NASIMBA  </p>
                    
                            <p>HOUSE KEEPER GARDENER DRIVER BRICK LAYER </p>
                            <p>LOCATION: Imizamo yethu</p>
                        </div>
                        <div className="card__info related-card__info">
                            <div>
                                <p> 0 recomendations</p></div>
                            <div>
                            <a href="/home/12" className="card__link btn white-text">MORE INFO</a>
                            </div>
                        </div>
                        </div> 
                        <div className="card">
                            
                        <img className="card__image related-card__image" src={require('../images/John Nasimba.jpg')} alt="" />
                                
                        <div className="card__content related-card__content">
                            <p className="card-title" id="card-title"> JOHN NASIMBA  </p>
                    
                            <p>HOUSE KEEPER GARDENER DRIVER BRICK LAYER </p>
                            <p>LOCATION: Imizamo yethu</p>
                        </div>
                        <div className="card__info related-card__info">
                            <div>
                                <p> 0 recomendations</p></div>
                            <div>
                            <a href="/home/11" className="card__link btn white-text">MORE INFO</a>
                            </div>
                        </div>
                        </div> 
                        

                    </div>
                </div>
            
        

            </div>
    
        )
    }
}

export default SearchApplicant;