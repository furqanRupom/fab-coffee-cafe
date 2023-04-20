import {createBrowserRouter} from 'react-router-dom'
import Main from '../Layouts/Main';
import Home from '../pages/Shared/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import Orders from '../pages/Orders/Orders';
const router =createBrowserRouter([
    {
        path:"/",
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'orders',
                element:<PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {
                path:'login',
                element:<Login />
            },
            {
                path:'register',
                element:<Register />
            },

        ]
    }
])




export default router;