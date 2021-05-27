import * as React from "react";
import style from "./main.module.scss";
import SideBar from '../sidebar/SideBar';
import WorkArea from './WorkArea';


const MainContainer: React.FC = () => {
    return (
        <main className={style.main}>
            <SideBar />
            <WorkArea />
        </main>
    );
    
};

export default MainContainer;