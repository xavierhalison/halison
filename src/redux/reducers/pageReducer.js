import { CHANGE_PAGE } from "../actions/actions";

const defaultState = {
  currentPage: "HOME",
};

const pagesReducer = (state = defaultState, action) => {
  console.log(action);
  switch (action.type) {
    case CHANGE_PAGE:
      return { ...state, currentPage: action.payload.nextPage };
    default:
      return defaultState;
  }
};

export default pagesReducer;
