import React from 'react';
import { addMessageActionCreator } from '../../redux/messengerReducer';
import Messenger from './Messenger';
import { connect } from 'react-redux';
import { HocRedirect } from '../../hoc/HocRedirect';
import { compose } from 'redux';

// let AuthRedirectComponent = HocRedirect(Messenger);

let mapStateToProps = (state) => {
    return {
        messengerPage: state.messengerPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMsg) => {dispatch(addMessageActionCreator(newMsg))}
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    HocRedirect
)(Messenger);
// const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

// export default MessengerContainer;