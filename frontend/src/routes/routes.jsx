import Home from '../resources/Home/Home'
import Login from '../resources/Login/Login';
import Register from '../resources/Register/Register';

// Layouts
import HeaderOnly from '../components/Layouts/HeaderOnly/HeaderOnly';

// public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: HeaderOnly },
    { path: '/register', component: Register, layout: HeaderOnly },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }