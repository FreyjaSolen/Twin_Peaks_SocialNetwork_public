// import messengerReducer from "./messengerReducer";
// import profileReducer from "./profileReducer";

// let store = {
//   _state: {
//     profilePage: {
//       postMessages: [
//         { id: '1', post: 'Hello' },
//         { id: '2', post: 'Welcome to twin peaks' },
//         { id: '3', post: 'Dreamtown' },
//         { id: '4', post: '1990' },
//         { id: '5', post: 'Enjoy' }
//       ],
//       newPostText: 'Hey!'
//     },
//     messengerPage: {
//       messengerActors: [
//         { id: '1', name: 'Sheriff Harry S. Truman' },
//         { id: '2', name: 'Audrey Horne' },
//         { id: '3', name: 'Deputy Tommy Hawk Hill' },
//         { id: '4', name: 'Shelly Johnson' }
//       ],

//       MsrMessages: [
//         { id: '1', message: 'Hello' },
//         { id: '2', message: 'How are you?' },
//         { id: '3', message: 'I miss you...' },
//       ],

//       newMsgText: 'Hey'
//     }
//   },
//   _renderTree() { },

//   getState() {
//     return this._state;
//   },
//   subscribe(observer) {
//     this._renderTree = observer;
//   },

//   dispatch(action) {

//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.messengerPage = messengerReducer(this._state.messengerPage, action);
//     this._renderTree(this._state);
//   }
// }

// export default store;
// // window.store = store;