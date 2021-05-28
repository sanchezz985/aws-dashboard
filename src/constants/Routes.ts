import LogsContainer from '../components/containers/logs/LogsContainer';
import MaintenanceContainer from '../components/containers/maintenance/MaintenanceContainer';
import DefaultContainer from "../components/containers/default/DefaultContainer";
import {Icons} from "./Icons";

export const Routes = [
    {
        id: '1',
        path: '/',
        icon: () => '',
        text: 'Home',
        component: DefaultContainer
    },
    {
        id: '2',
        path: '/logs',
        icon: () => Icons.CLOUDWATCH,
        text: 'Logs',
        component: LogsContainer
    },
    {
        id: '3',
        path: '/functions',
        icon: () => Icons.LAMBDA,
        text: 'Functions',
        component: MaintenanceContainer
    },
    {
        id: '4',
        path: '/apis',
        icon: () => Icons.APIGATEWAY,
        text: 'Api Gateway',
        component: MaintenanceContainer
    },
];