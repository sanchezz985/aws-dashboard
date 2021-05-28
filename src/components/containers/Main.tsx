import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import style from './main.module.scss';
import SideBar from '../sidebar/SideBar';
import {Routes} from '../../constants/Routes';

const MainContainer: React.FC = () => {
    return (
        <main className={style.main}>
            <SideBar/>
            <Switch>
                {Routes.map((route) =>(
                    <Route exact key={route.id} path={route.path} component={route.component}/>
                ))}
            </Switch>
        </main>
    );
};

export default MainContainer;