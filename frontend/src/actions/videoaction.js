export const VIDEO_OPEN = "VIDEO_OPEN";
export const VIDEO_CLOSE = "VIDEO_CLOSE";

export const openVideo = (url) => ({
    type: VIDEO_OPEN,
    url
});

export const closeVideo = () => ({
    type: VIDEO_CLOSE,
});
