import { FORM_UPDATE_VALUE } from "../actions/FormActions";

const initialState = {
    str: '',
    bdate: '',
    edate: '',
    page: '0'
};

const values = (state = initialState, action) => {
    switch(action.type) {
        case FORM_UPDATE_VALUE:
            return {
                ...state,
                str: action.payload.str,
                bdate: action.payload.bdate,
                edate: action.payload.edate,
                page: action.payload.page
            };
        default:
            return state;
    }
};

export default values;