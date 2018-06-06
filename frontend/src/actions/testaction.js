export const TEST_ACTION = "TEST_ACTION";

const testAction = (mess) => ({
    type: TEST_ACTION,
    message: mess,
});

export const runTestAction = (mess) => (dispatch, getState) => {
    dispatch(testAction(mess));
}

