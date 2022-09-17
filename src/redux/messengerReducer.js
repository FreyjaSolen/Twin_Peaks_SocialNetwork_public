const SEND_MESSAGE = 'messenger/SEND-MESSAGE';

let initialState = {
  messengerActors: [
    { id: '1', name: 'Sheriff Harry S. Truman' },
    { id: '2', name: 'Audrey Horne' },
    { id: '3', name: 'Deputy Tommy Hawk Hill' },
    { id: '4', name: 'Shelly Johnson' }
  ],

  MsrMessages: [
    { id: '1', message: 'Hello' },
    { id: '2', message: 'How are you?' },
    { id: '3', message: 'I miss you...' },
  ]
};

const messengerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        id: state.MsrMessages.length + 1,
        message: action.newMsg
      };
      return {
        ...state,
        MsrMessages: [...state.MsrMessages, newMessage]
      }
    }

    default: return state;
  }
}

export const addMessageActionCreator = (newMsg) => ({ type: SEND_MESSAGE, newMsg })

export default messengerReducer;