import * as React from "react";
import { Link } from "react-router-dom";
import sb from "./sidebar.module.scss";
import {Routes} from '../../constants/Routes';
import SideBarItem from './SideBarItem';

const SideBar: React.FC = () => {
    return (
        <div className={sb.sidebar}>
            <div className={sb.siderbarTitle}>
                <Link to="/">#</Link>
            </div>
            {
                Routes.map(route => route.path !== '/' ? (
                    <SideBarItem key={route.id} id={route.id} icon={route.icon()} text={route.text} path={route.path}/>
                ): null)
            }
        </div>
    );
};

export default SideBar;