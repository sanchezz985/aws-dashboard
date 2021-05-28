import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import style from './main.module.scss';
import LogsContainer from './logs/LogsContainer'
import SideBar from '../sidebar/SideBar';
import MaintenanceContainer from './maintenance/MaintenanceContainer';
import DefaultContainer from "./default/DefaultContainer";

const MainContainer: React.FC = () => {
    return (
        <>
            <main className={style.main}>
                <SideBar/>
                <Switch>
                    <Route exact path="/" component={DefaultContainer}/>
                    <Route exact path="/logs" component={LogsContainer}/>
                    <Route exact path="/functions" component={MaintenanceContainer}/>
                    <Route exact path="/apis" component={MaintenanceContainer}/>
                </Switch>
            </main>            
        </>
    );
    
};

export default MainContainer;