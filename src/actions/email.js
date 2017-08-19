import {
  VIEW_MESSAGE,
  DELETE_MESSAGE,
} from './types';

export const viewMessage = (messageId) => ({
  type: VIEW_MESSAGE,
  payload: messageId,
});

export const deleteMessage = (messageId) => ({
  type: DELETE_MESSAGE,
  payload: messageId,
});
