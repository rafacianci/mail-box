import { VIEW_MESSAGE, DELETE_MESSAGE } from '../actions/types';

const initialState = {
  messages: [
    {
      uid: 'uid_1',
      sender: 'sender_name_1',
      subject: 'subject_1',
      message: 'message_1',
      time_sent: new Date(),
    },
    {
      uid: 'uid_2',
      sender: 'sender_name_2',
      subject: 'subject_2',
      message: 'message_2',
      time_sent: new Date(),
    },
  ],
};

export default (state = initialState, action) => {
  if (action.type === VIEW_MESSAGE) {
    return {
      messages: state.messages.map((message) => {
        if (message.uid === action.payload) {
          return {
            ...message,
            readed: true,
          };
        }

        return message;
      }),
      selectedMessage: state.messages.find((message) => message.uid === action.payload),
    };
  }

  if (action.type === DELETE_MESSAGE) {
    return {
      selectedMessage: null,
      messages: state.messages.filter((message) => message.uid !== action.payload),
    };
  }

  return state;
};
