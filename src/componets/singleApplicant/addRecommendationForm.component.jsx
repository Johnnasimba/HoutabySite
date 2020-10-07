import React, {useState} from 'react'
const RecommendationForm = ({id, recommendation, setRecommendationInfo}) => {
    const [username, setUsername] = useState('');
    const [recommendationText, setRecommendationText] = useState('');
    const addRecommendation = async () => {
        const result = await fetch(`api/applicants/${id}`, {
            method: 'post',
            body: JSON.stringify({ username, text: recommendationText }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        setRecommendationInfo(body);
        setUsername('');
        setRecommendationText('');
}
    return ( 
        <div className="container" id="recommendation">
                 <h6 className="center">RECOMMENDATIONS</h6>
            {recommendation ? recommendation.map((item, key) => (
                <div className="recPost" key = {key}>
                <p><strong> {item.username} </strong></p>
                <p className=" blue lighten-4"> <i> {item.text} </i></p>
            </div>
            )): <div>submit the form below to recommend</div>
            }
              <form >
                <label htmlFor="username">Your Name</label><br />
                <input
                    type="text"
                    value={username}
                    onChange={(e => setUsername(e.target.value))}
                />
                 
                <textarea value={recommendationText}
                    id="recommed" cols="30" rows="10"
                    placeholder="Recommend JOHN"
                    onChange={(e => setRecommendationText(e.target.value))}     
                />
                <button onClick={()=> addRecommendation()} className="center btn">Post</button>
              </form>              
             </div>
     );
}
 
export default RecommendationForm;