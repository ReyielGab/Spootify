import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// import { SampleFunct } from '../src/common/components/SideBar/duck';
 
function Sample() {
  const counter = useSelector(state => state.vehicleReducer);
  const dispatch = useDispatch();
  console.log(counter)
  return (
    <div className="Sample">
      
      <button
        // onClick={() =>
        //   // SampleFunct(dispatch, "Car")
        //   // dispatch({
        //   //   type: "Car"
        //   // })
        // }
      >
    Car
    </button> &nbsp;&nbsp;&nbsp;
    <h1>{counter.vehicle}</h1>
    <button
        // onClick={() =>
        //   // SampleFunct(dispatch, "Bike")
        // }
      >
    Bike
      </button>  
    </div>
   
  );
}
 
export default Sample;