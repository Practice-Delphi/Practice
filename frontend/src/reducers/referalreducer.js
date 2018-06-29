import { SET_REFERAL, DELETE_REFERAL } from '../actions/referalaction';

const refData = (state = { ref: null }, action) => {
    switch (action.type) {
        case SET_REFERAL: return { ref: action.ref };
        case DELETE_REFERAL: return { ref: null };
        default: return state;
    }
}

export {refData};