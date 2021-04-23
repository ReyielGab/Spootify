import React from 'react';
import Discover from './Discover';
import useAuth from '../useAuth';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Routes({code}) {

  const counter = useSelector(state => state.vehicleReducer);
  const dispatch = useDispatch();
  const accessToken = useAuth(code);
  // Here you'd return an array of routes
  return accessToken !== undefined ? <Discover dispatch={dispatch} accessToken={accessToken} counter={counter}/> : <div></div> ;
}
