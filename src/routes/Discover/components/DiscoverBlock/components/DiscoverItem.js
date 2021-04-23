import React from 'react';
import '../styles/_discover-item.scss';
import { getSelectedTrack } from '../../../duck';

export default function DiscoverItem({ images, name, dispatch, trackUri }) {
  return (
    <div className="discover-item animate__animated animate__fadeIn" onClick={() => getSelectedTrack(trackUri, dispatch)} >
      <div
        className="discover-item__art"
        style={{ backgroundImage: `url(${images[0].url})` }}
      />
      <p className="discover-item__title">{name}</p>
    </div>
  );
}
