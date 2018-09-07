import { FORM_UPDATE_VALUE } from "../actions/FormActions";

const initialState = {
    str: '',
    bdate: '',
    edate: ''
};

const values = (state = initialState, action) => {
    switch(action.type) {
        case FORM_UPDATE_VALUE:
            return {
                ...state,
                str: action.payload.str,
                bdate: action.payload.bdate,
                edate: action.payload.edate
            };
        default:
            return state;
    }
};

export default values;