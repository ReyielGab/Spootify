import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import store from '../../../store';

import { getNewReleases, getAllFeaturedPlaylists, getAllCategories, setAccessToken } from '../duck';

export default class Discover extends Component {
  constructor() {
    super();
    this.state = {
     
      discoverReducer:  {
        newReleases: [],
        playlists: [],
        categories: [],
      }
    };
  }

  componentDidMount() {
    this.getCurrentStateFromStore();
    const { accessToken, dispatch } = this.props;
    getNewReleases(accessToken, dispatch);
    getAllFeaturedPlaylists(accessToken, dispatch);
    getAllCategories(accessToken, dispatch);
    setAccessToken(accessToken, dispatch);
    
  }

  componentDidUpdate() {
    
  }

  getCurrentStateFromStore() {
    return {
      discoverReducer: store.getState().discoverReducer,
    }
  }

  render() {
    this.state = this.getCurrentStateFromStore();
  
    const { newReleases, playlists, categories } = this.state.discoverReducer;
    const { dispatch } = this.props;
    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} dispatch={dispatch} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} dispatch={dispatch} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" dispatch={dispatch} />
      </div>
    );
  }
}
