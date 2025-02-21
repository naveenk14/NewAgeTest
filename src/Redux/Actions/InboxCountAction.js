import * as Types from '../ActionTypes'
export const inboxCountRequest = ({filter}) => ({
    type: Types.INBOX_COUNT_REQUEST,
    payload:{filter}
  });