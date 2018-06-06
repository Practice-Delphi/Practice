import { ROUTER_ADD_HISTORY } from '../actions/historyaction';

const historyData = (state = null , action) => {
    switch (action.type) {
        case ROUTER_ADD_HISTORY: {
            return action.history;
        }
        default: return state;
    }
}

export { historyData };