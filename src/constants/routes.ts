import { OverridableComponent } from '@mui/material/OverridableComponent';
import InventoryIcon from '@mui/icons-material/Inventory';
import HomeIcon from '@mui/icons-material/Home';
import { SvgIconTypeMap } from '@mui/material';

interface Route {
    location: string;
    title: string;
    icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>; 
}

const routes : Route[] = [
    {
        location: "/",
        title: "Home",
        icon: HomeIcon
    },
   {
    location: "stock",
    title: "Estoque",
    icon: InventoryIcon
   }
];

export default routes;