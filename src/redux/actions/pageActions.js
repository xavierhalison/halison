import { CHANGE_PAGE } from "./actions";

export const changePage = (nextPage) => ({
  type: CHANGE_PAGE,
  payload: {
    nextPage: nextPage,
  },
});
