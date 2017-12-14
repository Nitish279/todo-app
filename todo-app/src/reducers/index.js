import { connectReducers } from 'redux';

const taskReducer =(state=[], action)=> {
	switch(action.type) {
	    case 'ADD_TASK':
	        state = state.concat(action.payload);
	        break;
	    case DELETE_TASK:
	        state = state.slice();
	        state.splice(action.payload);
	        break;
	}

	return state;
},

reducers = connectReducers({
	task: taskReducer
});

export default reducers;