import {ADMIN_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, PRODUCT_ROUTE, CATALOG_PRODUCT, CATALOG_TYPE} from './utils/consts';
import Admin from './pages/Admin';
import Auth from './pages/Auth';
import Main from './pages/Main';
import ProductPage from './pages/ProductPage';
import CatalogProduct from './pages/CatalogProduct';
import CatalogType from './pages/CatalogType';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Main,
    },
    {
        path: CATALOG_PRODUCT,
        Component: CatalogProduct,
    },
    {
        path: CATALOG_TYPE,
        Component: CatalogType,
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth,
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage,
    }
]
