import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../routes";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        height: "100%",
      }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          {routes.map(({ path, RouteIcon, label }, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                selected={location.pathname === path}
                onClick={() => navigate(path)}
              >
                <ListItemIcon>
                  <RouteIcon />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};

export { Sidebar };
