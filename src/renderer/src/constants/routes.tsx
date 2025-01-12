import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';
import CoffeeIcon from '@mui/icons-material/Coffee';
import HomeIcon from '@mui/icons-material/Home';
import { ReactElement } from 'react';
import Material from '@renderer/pages/Material';
import Product from '@renderer/pages/Product';
import Stock from '@renderer/pages/Stock';
import Order from '@renderer/pages/Order';

interface Route {
    title: string;
    location: string;
    page: ReactElement;
    icon: () => ReactElement;
}

const routes : Route[] = [
    {
        location: "/",
        title: "Início",
        icon: () => <HomeIcon />,
        page: ( <div>Teste</div> )
    },
    {
        location: "order",
        title: "Pedidos",
        icon: () => <ShoppingCartIcon />,
        page: <Order />
    },
    {
        location: "stock",
        title: "Estoque",
        icon: () => <InventoryIcon />,
        page: <Stock />
    },
    {
        location: "product",
        title: "Produtos",
        icon: () => <CoffeeIcon />,
        page: <Product />
    },
    {
        location: "material",
        title: "Materiais",
        icon: () => <CategoryIcon />,
        page: <Material />
    },
];

export default routes;