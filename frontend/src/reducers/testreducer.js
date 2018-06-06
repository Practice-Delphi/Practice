import { TEST_ACTION } from '../actions/testaction';

const isTestPass = (state = {pass:false, mess: null}, action) => {
    switch (action.type) {
        case TEST_ACTION: {
            return { pass: true, mess: action.message };
        }
        default: return state;
    }
}

export { isTestPass };