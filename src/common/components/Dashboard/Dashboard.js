import React from 'react';
import Header from '../Header';
import SideBar from '../SideBar';
import Player from '../Player';
import { useSelector } from "react-redux";

function Dashboard({ children }) {
  const accessToken = useSelector(state => state.discoverReducer.currentAccessToken);
  const selectedTrack = useSelector(state => state.discoverReducer.selectedTrack);
  return (
    <div className="main"> 
        
      <SideBar />
      <div className="main__content">
        <Header  />
        <div className="main__content__child">
          {children}
        </div>
        <div className="player_container">
          <Player accessToken={accessToken} trackUri={selectedTrack}/>
        </div>
        
      </div>
      
    </div>
  );
}

export default Dashboard;
