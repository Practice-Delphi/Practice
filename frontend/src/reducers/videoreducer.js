import { VIDEO_OPEN, VIDEO_CLOSE } from '../actions/videoaction';

const videoStatus = (state = { display: false, url: null }, action) => {
    switch (action.type) {
        case VIDEO_OPEN: return { display: true, url: action.url };
        case VIDEO_CLOSE: return { display: false, url: null };
        default: return state;
    }
}

export { videoStatus };