export const FORM_UPDATE_VALUE = 'FORM_UPDATE_VALUE';

export const updateForm = (str, bdate, edate, page) => ({
    type: FORM_UPDATE_VALUE,
    payload: { str, bdate, edate, page }
});

const updateFormValue = () => {
    return dispatch => dispatch(updateForm())
};

export default updateFormValue;