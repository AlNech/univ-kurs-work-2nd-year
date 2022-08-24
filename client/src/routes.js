import {ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, PRODUCT_ROUTE, CATALOG_PRODUCT, CATALOG_TYPE} from './utils/consts';
import Admin from './pages/Admin';
import Basket from './pages/Basket';
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
    {
        path: BASKET_ROUTE,
        Component: Basket,
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Main,
    },
    {
        path: CATALOG_PRODUCT,
        Component: CatalogType,
    },
    {
        path: CATALOG_TYPE,
        Component: CatalogProduct,
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
