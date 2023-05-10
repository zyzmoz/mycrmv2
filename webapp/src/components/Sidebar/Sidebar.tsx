import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Dashboard, Person } from "@mui/icons-material";
import { i18n } from "../../translations/I18n";
import { useLocation, useNavigate } from "react-router-dom";


const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", height: "100%" }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton selected={location.pathname === '/dashboard'} onClick={() => navigate("dashboard")}>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary={i18n.sidebar.dashboard} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton selected={location.pathname === '/customers'} onClick={() => navigate("customers")}>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary={i18n.sidebar.customers} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* <DraftsIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export { Sidebar };
