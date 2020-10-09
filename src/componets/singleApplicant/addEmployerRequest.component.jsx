import React, {useState} from 'react'

const EmployerRequestForm = ({id, selectedApplicant, setEmployerRequestInfo  }) => {
    const [employerName, setEmployerName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [employerMessage, setEmployerMessage] = useState('');
    const applicantSelected = selectedApplicant;
    const applicantId = id;

  const addRequest = async (e) => {
      e.preventDefault()
        const result = await fetch(`api/employerRequest/${id}`, {
            method: 'post',
            body: JSON.stringify({ employerName, phone, email, employerMessage, applicantSelected, applicantId }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        setEmployerRequestInfo = body;
        setEmployerName('');
        setEmail('');
        setPhone('');
        setEmployerMessage('');
}
    return (
        <div className="container" id="login">
            <form className="right" >
             
              <label className="left" >Your Name</label>
                <input
                    type="text"
                    value={employerName}
                    onChange={(e => setEmployerName(e.target.value))}
                    placeholder="Enter your Name"
                    required
                />

              <label className="left" >Email</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e => setEmail(e.target.value))}
                    placeholder="Enter your user email"
                    required
                />

              <label className="left" >Your Mobile Number</label>
                <input
                   type="text"
                   value={phone}
                   onChange={(e => setPhone(e.target.value))}
                    placeholder="Enter mobile number"
                    required
                />
                
              <label htmlFor="message">Message</label>
                <textarea
                    type="text"
                    value={employerMessage}
                    onChange={(e => setEmployerMessage(e.target.value))}
                    cols="30" rows="10" className="grey-text"
                 /> <br/>
              <button onClick={(e)=> addRequest(e)} className="btn right">Send Message</button><br /><br />
            </form>
          </div> 
      );
}
 
export default EmployerRequestForm;