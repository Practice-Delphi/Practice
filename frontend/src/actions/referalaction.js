export const SET_REFERAL = "SET_REFERAL";
export const DELETE_REFERAL = "DELETE_REFERAL";

export const setReferal = (ref) => ({
    type: SET_REFERAL,
    ref
});

export const deleteReferal = () => ({
    type: DELETE_REFERAL
});

