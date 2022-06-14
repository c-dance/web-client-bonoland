import React from "react";
import { Menus, Logout } from './UserMenuStyle';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { logout } from '../../../store/actions/user';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
    const dispatch = useDispatch();

    return (
        <Menus>
            <Link to="/user/info">회원 정보 변경</Link>
            <Link to="/user/scrap">찜 매물</Link>
            <Link to="/user/recent">최근 본 매물</Link>
            <Link to="/user/alarm">알림 매물</Link>
            <Link target="_blank" to="/terms">약관 정책</Link>
            <Logout 
                className={ isMobile && "mobile" } 
                onClick={ () => dispatch(logout()) }
            >로그아웃</Logout>
        </Menus>
    )
}

export default UserMenu;