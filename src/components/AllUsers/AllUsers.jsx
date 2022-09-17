import React from 'react';
import style from './AllUsers.module.css';
// import headerPhoto from '../../images/heat.jpg';
import avaPhoto from '../../images/default.jpg'
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';
import HeadImg from '../common/HeadImg/HeadImg';

const AllUsers = (props) => {
    return (
        <div className={style.allUsersContainer}>
            <HeadImg />
            <div className={style.tittle}>All residents of the city</div>
            <div className={style.usersGrid}>
                {
                    props.allUsersPage.users.map(u => <div key={u.id} className={style.item}>
                        <div >
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : avaPhoto} className={style.userPhoto} />
                            </NavLink>
                        </div>

                        <div className={style.descript}>
                            <div>{u.name} {u.LastName}:  {u.status}</div>
                        </div>
                        <div>
                            {u.followed ?
                                <button disabled={props.idRequestWait.some(id => id === u.id)} onClick={() => {
                                    props.unFollowCommand(u.id);
                                }} className={style.buttonF}>Follow</button>

                                : <button disabled={props.idRequestWait.some(id => id === u.id) || !props.isAuth} onClick={() => {
                                    props.followCommand(u.id);
                                }} className={style.buttonUf}>Unfollow</button>}
                        </div>
                    </div>)
                }
            </div>
           
            {
            props.totalUsersCount > props.pageSize &&
            <Paginator currentPage={props.currentPage}
                totalItemsCount={props.totalUsersCount}
                pageSize={props.pageSize}
                onPageChange={props.onPageChange} />
                }
        </div>
    );
}

export default AllUsers;