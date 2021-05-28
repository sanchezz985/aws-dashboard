import * as React from "react";
import { Link } from "react-router-dom";
import sb from "./sidebar.module.scss";

interface ISideBarItemProps {
    id: string
    icon: any,
    path: string,
    text: string
};

const SideBarItem: React.FC <ISideBarItemProps> = (props) => {
    return (
        (<div id={props.id} className={sb.sidebarItems}>
            <div className={sb.sidebarItem}>
                {props.icon}
                <Link to={props.path}>{props.text}</Link>
            </div>
        </div>)
    );
};

export default SideBarItem;