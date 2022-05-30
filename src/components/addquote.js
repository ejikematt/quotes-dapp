import React from 'react';
import { useState } from "react";

export const AddQuote = (props) => {

const [text, setText] = useState('');



  return <div>
      <form>
  <div class="form-row">
    
      <input type="text" class="form-control" value={text}
           onChange={(e) => setText(e.target.value)} placeholder="Author Name"/>
           
    <button type="button" onClick={()=>props.addQuote(text)} class="btn btn-info mt-2">Add Quote</button>

  </div>
</form>
  </div>;
};
