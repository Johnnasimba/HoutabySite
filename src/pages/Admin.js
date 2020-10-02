import React from 'react';
import { MdClose } from "react-icons/md";
import { useHistory } from "react-router-dom";

import '../css/index.css'
import app from "../componets/auth/base"
const Admin = ({employerRequest, deleteemployerRequest}) => { 
    const history = useHistory();
    const handleLogout = () =>{ 
        let path = "/login"; 
        history.push(path);
        app.auth().signOut();
      }
    
        return (
            <div id="Admn-section">
                <div className="center " id="addBtn">
                    <a href="/addApplicant"><h5 className="btn center addApplicant">ADD NEW APPLICANT</h5></a>
                    <a href="/singup-new-admin"><h5 className="btn center addApplicant">SIGN UP NEW  USER ADMIN</h5></a>
                    <button onClick={handleLogout} className="btn left longout">Logout</button>
                    <h4 className="mssg center">session mesage</h4>
                </div>       
                <div className="left employerRequest">
                    <h5 className="center"> employer request will be displayed here</h5>                
                    <ul className="collection ">
                        {employerRequest.map(item => (
                                <li className="collection-item avatar" key={item.employerId}>
                                    <span className="title"><strong>employer name</strong>  : {item.employerName}</span>
                                    <p><strong>Phone</strong> : {item.phone}</p>
                                    <p><strong>Email</strong> : {item.email}</p>
                                    <p><strong> employer message </strong> :{item.employerMessage} </p>
                                    <p><strong>Applicant selected</strong> : {item.ApplicantSelected}</p>
                                        <p><strong> Applicant id</strong> : {item.ApplicantId} </p>
                                <button  className="secondary-content red"
                                onClick={()=> deleteemployerRequest(item)}
                                ><MdClose className="white-text red"/></button>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>
            </div>
        )
    }


export default Admin;