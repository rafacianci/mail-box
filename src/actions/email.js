import {
  VIEW_MESSAGE,
} from './types';

export const viewMessage = (messageId) => ({
  type: VIEW_MESSAGE,
  payload: messageId,
});
