import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery'; 
import AOS from 'aos'

const Home = ({ Applicants }) => {
    
     AOS.init({
        delay: 200, // values from 0 to 3000, with step 50ms
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        });

    $(".row").hover(function(){
        $(this).css("transform", "scale(1.1)");
        }, function(){
        $(this).css("transform", "scale(1)");
      });
    return ( 
        <div className="cards">
            {Applicants.map(item => (               
                <div className="row" key={item.id} id="row" data-aos="fade-up"  >
                     <Link to={"/" + item.id} className="black-text" >
                        <div className="col xs12 sm6 md4" >
                            <div className="card" >
                                <img className="card__image" src={require(`../../images/${item.image}`)} alt="John Nasimba " />
                                <div className="card__content">
                                    <p className="card-title " >
                                        {item.firstJob}, {item.secondJob}, {item.thirdJob},  {item.forthJob}
                                
                                    </p>
                        
                                    <p className="uppercase bold" id="jobsApplied">
                                        NAME: {item.firstName}
                                    </p>
                                    <p>AVAILABLE DAYS: Monday, Wesday & Friday</p>
                                    <p>LOCATION: Imizamo Yethu, Cape Town</p>
                                </div>
                                <div className="card__info">
                                    <div>
                                        <p> {item.recommendations.length} recomendations</p>
                                    </div>
                                    <div>
                                            <p className="card__link btn white-text">MORE INFO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                
                    ))
                 }
              
    </div>
     );
}
 
export default Home;
