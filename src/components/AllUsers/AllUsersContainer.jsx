import React from 'react';
import { followCommand, unFollowCommand, setCurrentPage, getAllUsers} from '../../redux/allUsersReducer';
import { connect } from 'react-redux';
import AllUsers from './AllUsers';
import Preloader from '../common/Preloader/Preloader';
// import {getterAllUsersPage,
//   getterPageSize,
//   getterTotalUsersCount,
//   getterCurrentPage,
//   getterIsFetching,
//   getterIdRequestWait,
//   getterIsAuth} from '../../redux/allUserSelecrors'

class AllUsersContainer extends React.Component {

  constructor(props){
      super(props);
  }

  componentDidMount(){
      this.getUsers();
  }

  getUsers = () =>{
      if (this.props.allUsersPage.users.length === 0) {
        this.props.getAllUsers(this.props.currentPage, this.props.pageSize);
      }
  }

  onPageChange = (pageNum) =>{
      this.props.setCurrentPage(pageNum);
      this.props.getAllUsers(pageNum, this.props.pageSize);
  }

  render() {    
      return <>
      { this.props.isFetching ? <Preloader />: null }
       <AllUsers totalUsersCount = {this.props.totalUsersCount}
          pageSize = {this.props.pageSize}
          currentPage = {this.props.currentPage}
          allUsersPage = {this.props.allUsersPage}
          idRequestWait = {this.props.idRequestWait}
          unFollowCommand = {this.props.unFollowCommand}
          followCommand = {this.props.followCommand}
          onPageChange = {this.onPageChange}
          isAuth = {this.props.isAuth}/> 
          </>          
  }
}

let mapStateToProps = (state) => {
  return {
    allUsersPage: state.allUsersPage,
    pageSize: state.allUsersPage.pageSize,
    totalUsersCount: state.allUsersPage.totalUsersCount,
    currentPage: state.allUsersPage.currentPage,
    isFetching: state.allUsersPage.isFetching,
    idRequestWait: state.allUsersPage.idRequestWait,
    isAuth: state.authPage.isAuth
  }
}

// let mapStateToProps = (state) => {
//   return {
//     allUsersPage: getterAllUsersPage(state),
//     pageSize: getterPageSize(state),
//     totalUsersCount: getterTotalUsersCount(state),
//     currentPage: getterCurrentPage(state),
//     isFetching: getterIsFetching(state),
//     idRequestWait: getterIdRequestWait(state),
//     isAuth: getterIsAuth(state)
//   }
// }

export default connect(mapStateToProps, {
  followCommand,
  unFollowCommand,
  setCurrentPage,
  getAllUsers
})(AllUsersContainer);