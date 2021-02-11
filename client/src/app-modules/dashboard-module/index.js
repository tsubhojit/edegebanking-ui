import Dashboard from './pages/dashboard/dashboard';

export default {
    pages: [
        {
            routeProps: {
                path: '/dashboard',
                component: Dashboard,
            },
            name: 'Dashboard',
        }
    ]
};
