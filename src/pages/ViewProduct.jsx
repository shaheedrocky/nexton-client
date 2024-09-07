import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

const ViewProduct = () => {
    const { id } = useParams();
    const location = useLocation();
    const { data } = location.state 
    console.log("Dataactivated: ", data);
  return (
    <div>
      ViewPRoduct: {id}
    </div>
  )
}

export default ViewProduct
