import React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeadphonesAlt,
  faHeart,
  faPlayCircle,
  faSearch, faStream,
} from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Avatar } from '../../../assets/images/avatar.svg';
import './_sidebar.scss';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getSelectedSidebar } from './duck';

function renderSideBarOption(dispatch, link, icon, text, { selected } = {}) {
  
  return (
    <div
      className={cx('sidebar__option', { 'sidebar__option--selected': selected })}
      onClick={() => getSelectedSidebar(dispatch, text)}
    >
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </div>
  )
}

export default function SideBar() {
  const counter = useSelector(state => state.vehicleReducer);
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <Avatar />
        <p>Bob Smith</p>
      </div>
      <div className="sidebar__options">
        {renderSideBarOption(dispatch, '/', faHeadphonesAlt, 'Discover', { selected: counter.selectedOption === 'Discover' })}
        {renderSideBarOption(dispatch, '/search', faSearch, 'Search', { selected: counter.selectedOption === 'Search' })}
        {renderSideBarOption(dispatch, '/favourites', faHeart, 'Favourites', { selected: counter.selectedOption === 'Favourites' })}
        {renderSideBarOption(dispatch, '/playlists', faPlayCircle, 'Playlists', { selected: counter.selectedOption === 'Playlists' })}
        {renderSideBarOption(dispatch, '/charts', faStream, 'Charts', { selected: counter.selectedOption === 'Charts' })}
      </div>
    </div>
  );
}
