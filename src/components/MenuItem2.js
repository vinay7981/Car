import React from "react";
import {useHistory} from 'react-router-dom'

function MenuItem2({ image, name, price }) {
    const history = useHistory();

  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ₹{price} </p>
      <button 
          onClick={() => history.push('/recipe/:Buy')}
          type="button" className="btn btn-info"  data-toggle="modal" data-target="#exampleModal">
         Rent
      </button>
    </div>
  );
}

export default MenuItem2;
