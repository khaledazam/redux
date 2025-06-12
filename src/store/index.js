import {createStore} from 'redux';

const initialState = {value: 0}
const counterReducer = (state = initialState, action)=>{
    // logic
    if(action.type === "increase") {
       return {
           ...state,
           value: state.value + action.payload 
       };   
    }
    if(action.type === "decrease") {
        return {
            ...state,
            value: state.value - action.payload 
        };
    }
    return state;
}

// app init => run store => action => counter reducer 
const store = createStore(counterReducer); 

export default store