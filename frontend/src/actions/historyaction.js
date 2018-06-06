export const ROUTER_ADD_HISTORY = "ROUTER_ADD_HISTORY";

const add = (history) => ({
    type: ROUTER_ADD_HISTORY,
    history
});

export const addHistory = (history) => (dispatch, getState) => {
    dispatch(add(history));
}