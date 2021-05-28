import * as React from "react";
import style from "./maintenance.module.scss";
import img from "../../../assets/img/maintenance.png";

const MaintenanceContainer: React.FC = () => {
    return (
        <div className={style.maintenanceContainer}>
            <h1>This site is under maintenance</h1>
            <img src={img} alt="Maintenance"/>
        </div>
    );  
};

export default MaintenanceContainer;