import React from 'react';
import { useState } from "react";

export const Quotes = (props) => {

  const [newquote, setNewQuote] = useState('');

  return <div className="card-container">


{props.quotes.map((q) =>(
    <div className='col-2' key={q.index}>  
    <div class="card">
    <div class="card-body ">
      <h5 class="card-title">{q.text}</h5>
      <h6 class="card-subtitle">Helpfullness: {q.helpfull}</h6>

      {props.userWallet !== q.owner && (
  <p class="card-text pt-5">Click the button below if this quote was helpfull and support the author with 1 cUSD </p>
        
      )}
     
      {props.userWallet !== q.owner && (
        <button type="button" class="btn btn-primary" onClick={ ()=> props.addHelpfullness(q.index)}>helpfull for 1cUSD</button>
      )}




    
    { props.userWallet === q.owner && (
     <form>
  <div class="form-r">
      <input type="text" class="form-control mt-4" value={newquote}
           onChange={(e) => setNewQuote(e.target.value)} placeholder="enter quote"/>
      <button type="button" onClick={()=>props.editQuote(q.index, newquote)} class="btn btn-primary mt-2">edit quote</button>
      
  </div>
</form>
)}

{ props.userWallet === q.owner &&(
                    <button
                      type="submit"
                      onClick={() => props.deleteQuote(q.index)}
                      className="btn btn-danger m-3"
                    >
                      Delete Quote
                    </button>
                       )}
      
    </div>
  </div>
  </div>
  ))};

</div>
};