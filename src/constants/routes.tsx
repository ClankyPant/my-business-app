import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';
import CoffeeIcon from '@mui/icons-material/Coffee';
import HomeIcon from '@mui/icons-material/Home';

import { ReactElement } from 'react';

interface Route {
    location: string;
    title: string;
    icon: () => ReactElement; 
}

const routes : Route[] = [
    {
        location: "/",
        title: "Início",
        icon: () => <HomeIcon />
    },
    {
        location: "order",
        title: "Pedidos",
        icon: () => <ShoppingCartIcon />
    },
    {
        location: "stock",
        title: "Estoque",
        icon: () => <InventoryIcon />
    },
    {
        location: "product",
        title: "Produtos",
        icon: () => <CoffeeIcon />
    },
    {
        location: "material",
        title: "Materiais",
        icon: () => <CategoryIcon />
    },
];

export default routes;