
import { Navigate,useRoutes } from 'react-router-dom';
// layouts
// import DashboardLayout from './layouts/dashboard';
// import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
// import NameGenarate from './pages/NameGenarate';
// import UserPage from './pages/UserPage';
// import LoginPage from './pages/LoginPage';
// import Page404 from './pages/Page404';
// import ProductsPage from './pages/ProductsPage';
// import DashboardAppPage from './pages/DashboardAppPage';

// ----------------------------------------------------------------------
import BlogMessage from './pages/BlogMessage';
import DashBoard from './pages/DashBoard';
import DashboardMessages from './pages/DashboardMessages';
import DashboardTasks from './pages/DashboardTasks';
import Products from './pages/Products';


export default function Router() {
  const routes = useRoutes([
    // {
    //   path: '/dashboard',
    //   element: <DashboardLayout />,
    //   children: [
    //     { element: <Navigate to="/dashboard/app" />, index: true },
    //     { path: 'app', element: <DashboardAppPage /> },
    //     { path: 'user', element: <UserPage /> },
    //     { path: 'products', element: <ProductsPage /> },
    //     { path: 'blog', element: <BlogPage /> },
    //   ],
    // },
    // {
    //   path: 'login',
    //   element: <LoginPage />,
    // },
    // {
    //   element: <SimpleLayout />,
    //   children: [
    //     { element: <Navigate to="/dashboard/app" />, index: true },
    //     { path: '404', element: <Page404 /> },
    //     { path: '*', element: <Navigate to="/404" /> },
    //   ],
    // },
    // {
    //   path: '*',
    //   element: <Navigate to="/404" replace />,
    // },
    {
      path: "/blog",
      element: <BlogPage />,
      children: [
        {
          path: "",
          element: <BlogMessage />,
        },
      ]
    },
    {
      path: "/dashboard",
      element: <DashBoard />,
      children: [
        { element: <Navigate to="/dashboard/messages" />, index: true },
        {
          path: "messages",
          element: <DashboardMessages />,
        },
        { path: "tasks", element: <DashboardTasks /> },
        { path: "product", element: <Products /> },
      ]

    }
  ]);

  return routes;
}
