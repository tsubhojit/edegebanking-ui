// import React from 'react';
import Login from './pages/login/login';
import Registration from './pages/registration/registration';

// const Authentication = () => (
//     <div>Authentication Module</div>
// );

export default {
    pages: [
        {
            routeProps: {
                path: '/',
                component: Login,
            },
            name: 'Login',
        },
        {
            routeProps: {
                path: '/registration',
                component: Registration,
            },
            name: 'Registration',
        },
    ]
};
