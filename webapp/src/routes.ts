import { TRoutes } from "./constants/types/route";
import Customers from "./views/Customer/Customers";
import Dashboard from "./views/Dashboard/Dashboard";
import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { i18n, configure } from "./translations/I18n";

configure("en-US");

export const routes: TRoutes = [
  {
    path: "/dashboard",
    label: i18n.sidebar.dashboard,
    Element: Dashboard,
    RouteIcon: DashboardIcon,
  },
  {
    path: "/customers",
    label: i18n.sidebar.customers,
    Element: Customers,
    RouteIcon: PersonIcon,
  },
];
