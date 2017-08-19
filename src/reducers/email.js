const initialState = {
  messages: [
    {
      uid: 'uid_1',
      sender: 'sender_name_1',
      subject: 'subject_1',
      message: 'message_1',
      time_sent: 'utc_timestamp_1',
    },
    {
      uid: 'uid_2',
      sender: 'sender_name_2',
      subject: 'subject_2',
      message: 'message_2',
      time_sent: 'utc_timestamp_2',
    },
  ],
};

export default (state = initialState) => state;
