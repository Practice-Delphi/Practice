import { CHANGE_LANGUAGE } from '../actions/languageaction';
import { UA, EN, RU } from '../localisation';
// const langEN = {
//     type: "EN"
// }

// const langUA = {
//     type: "UA"
// }

// const langRU = {
//     type: "RU"
// }

const langData = (state = EN , action) => {
    if (action.type === CHANGE_LANGUAGE) {
        switch(action.langtype) {
            case "EN": return EN;
            case "UA": return UA;
            case "RU": return RU;
            default: return state;
        }
    }
        return state;
}

export { langData };