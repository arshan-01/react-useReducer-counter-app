import { Action_Type } from './CounterActionTypes'

export const CounterReducer = (state,action) => {
    switch (action.type) {
        case Action_Type.COUNT_INC:
            {
        return state+1
    }
        case Action_Type.COUNT_DEC:
    {

        if (state===0) {
            return state;
        } else {
            return state-1 
        }
       
    }
        default:
            return state;
    }

    
            
    }
    