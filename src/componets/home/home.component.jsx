import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({Applicants}) => {
    
    return ( 
        <div className="cards">
            {Applicants.map(item => (
                <div className="card" key={item.id}>
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
                                <Link to={"/" + item.id} className="card__link btn white-text">MORE INFO</Link>
                        </div>
                    </div>
                </div>
                ))
            }

        </div>
     );
}
 
export default Home;
