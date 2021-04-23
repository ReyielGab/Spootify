import { combineReducers } from 'redux';

//import vehicleReducer from './vehicle.js';
import vehicleReducer from '../src/common/components/SideBar/duck';
import discoverReducer from '../src/routes/Discover/duck';


const appReducer = combineReducers({
    vehicleReducer,
    discoverReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer;