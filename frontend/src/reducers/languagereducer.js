import { CHANGE_LANGUAGE } from '../actions/languageaction';

const langEN = {
    type: "EN"
}

const langUA = {
    type: "UA"
}

const langRU = {
    type: "RU"
}

const langData = (state = langEN , action) => {
    if (action.type === CHANGE_LANGUAGE) {
        switch(action.langtype) {
            case "EN": return langEN;
            case "UA": return langUA;
            case "RU": return langRU;
            default: return state;
        }
    }
        return state;
}

export { langData };