const DISCOVER = 'Discover';
const SEARCH = 'Search';
const FAVOURITES = 'Favourites'
const PLAYLISTS = 'Playlists';
const CHARTS = 'Charts';

export default (state = {
    selectedOption: ''
}, action) => {
    switch (action.type) {
        case SEARCH:
            return {
                selectedOption: SEARCH
            };
        case FAVOURITES:
            return {
                selectedOption: FAVOURITES
            };
        case PLAYLISTS:
            return {
                selectedOption: PLAYLISTS
            };
           
        case CHARTS:
            return {
                selectedOption: CHARTS
            };
        case DISCOVER:
            return {
                selectedOption: DISCOVER
            };
        default:
              return {
                selectedOption: DISCOVER
              };
    }
}

export const getSelectedSidebar = (dispatch ,selectedType) => {
    dispatch({
        type: selectedType
      })
}