import React from 'react';
const GroupSearch = ({ jobTitle, groupApplicants }) => {
   //console.log(jobTitle)
    
   const Applicants = groupApplicants.filter(Applicant =>
    Applicant.firstJob.toLowerCase().includes(jobTitle.toLowerCase()) ||
    Applicant.secondJob.toLowerCase().includes(jobTitle.toLowerCase()) ||
    Applicant.thirdJob.toLowerCase().includes(jobTitle.toLowerCase()) ||
    Applicant.forthJob.toLowerCase().includes(jobTitle.toLowerCase()) 
    )
    console.log(Applicants)
    return (
        <div className="cards">
            {Applicants.map(item => (
                <div className="card" key={item.id}>
                    <img className="card__image" src={require(`../images/${item.image}`)} alt="John Nasimba " />
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
                            <p> 0 recomendations</p>
                        </div>
                        <div>
                                <a href={"/" + item.id} className="card__link btn white-text">MORE INFO</a>
                        </div>
                    </div>
                </div>
                ))
            }

        </div>
    );
}
 
export default GroupSearch;